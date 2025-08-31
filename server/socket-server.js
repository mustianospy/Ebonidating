
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://localhost:3000",
    process.env.NEXTAUTH_URL || "http://localhost:3000",
    /\.replit\.dev$/,
    /\.repl\.co$/
  ],
  credentials: true
}));

const io = socketIo(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://localhost:3000", 
      process.env.NEXTAUTH_URL || "http://localhost:3000",
      /\.replit\.dev$/,
      /\.repl\.co$/
    ],
    methods: ["GET", "POST"],
    credentials: true
  },
  transports: ['websocket', 'polling']
});

// Store active users and rooms
const activeUsers = new Map();
const chatRooms = new Map();

// Middleware for socket authentication
io.use((socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    const userId = socket.handshake.auth.userId;
    
    if (!userId) {
      return next(new Error('Authentication required'));
    }
    
    socket.userId = userId;
    next();
  } catch (error) {
    console.error('Socket authentication error:', error);
    next(new Error('Authentication failed'));
  }
});

io.on('connection', (socket) => {
  console.log(`User ${socket.userId} connected`);
  
  // Store user connection
  activeUsers.set(socket.userId, {
    socketId: socket.id,
    userId: socket.userId,
    online: true,
    lastSeen: new Date()
  });

  // Join user to their personal room
  socket.join(`user:${socket.userId}`);

  // Handle joining chat rooms
  socket.on('join_chat', (data) => {
    try {
      const { chatId, participants } = data;
      
      // Verify user is part of this chat
      if (!participants.includes(socket.userId)) {
        socket.emit('error', { message: 'Unauthorized to join this chat' });
        return;
      }
      
      socket.join(`chat:${chatId}`);
      
      // Store chat room info
      if (!chatRooms.has(chatId)) {
        chatRooms.set(chatId, {
          participants: participants,
          connectedUsers: new Set()
        });
      }
      
      chatRooms.get(chatId).connectedUsers.add(socket.userId);
      
      socket.emit('joined_chat', { chatId });
      
      // Notify other participants that user is online
      socket.to(`chat:${chatId}`).emit('user_online', {
        userId: socket.userId,
        chatId
      });
      
    } catch (error) {
      console.error('Join chat error:', error);
      socket.emit('error', { message: 'Failed to join chat' });
    }
  });

  // Handle sending messages
  socket.on('send_message', (data) => {
    try {
      const { chatId, message, messageId, timestamp } = data;
      
      // Validate message data
      if (!chatId || !message || !messageId) {
        socket.emit('error', { message: 'Invalid message data' });
        return;
      }
      
      const messageData = {
        id: messageId,
        chatId,
        senderId: socket.userId,
        content: message,
        timestamp: timestamp || new Date(),
        type: 'text'
      };
      
      // Send to all users in the chat room
      io.to(`chat:${chatId}`).emit('new_message', messageData);
      
      // Send delivery confirmation to sender
      socket.emit('message_sent', { messageId, chatId });
      
    } catch (error) {
      console.error('Send message error:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  // Handle typing indicators
  socket.on('typing_start', (data) => {
    try {
      const { chatId } = data;
      socket.to(`chat:${chatId}`).emit('user_typing', {
        userId: socket.userId,
        chatId,
        typing: true
      });
    } catch (error) {
      console.error('Typing start error:', error);
    }
  });

  socket.on('typing_stop', (data) => {
    try {
      const { chatId } = data;
      socket.to(`chat:${chatId}`).emit('user_typing', {
        userId: socket.userId,
        chatId,
        typing: false
      });
    } catch (error) {
      console.error('Typing stop error:', error);
    }
  });

  // Handle video call events
  socket.on('call_user', (data) => {
    try {
      const { targetUserId, chatId, offer } = data;
      
      socket.to(`user:${targetUserId}`).emit('incoming_call', {
        callerId: socket.userId,
        chatId,
        offer
      });
      
    } catch (error) {
      console.error('Call user error:', error);
      socket.emit('error', { message: 'Failed to initiate call' });
    }
  });

  socket.on('call_response', (data) => {
    try {
      const { callerId, accepted, answer } = data;
      
      socket.to(`user:${callerId}`).emit('call_responded', {
        responderId: socket.userId,
        accepted,
        answer
      });
      
    } catch (error) {
      console.error('Call response error:', error);
    }
  });

  socket.on('ice_candidate', (data) => {
    try {
      const { targetUserId, candidate } = data;
      
      socket.to(`user:${targetUserId}`).emit('ice_candidate', {
        senderId: socket.userId,
        candidate
      });
      
    } catch (error) {
      console.error('ICE candidate error:', error);
    }
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log(`User ${socket.userId} disconnected: ${reason}`);
    
    // Update user status
    if (activeUsers.has(socket.userId)) {
      const userData = activeUsers.get(socket.userId);
      userData.online = false;
      userData.lastSeen = new Date();
      activeUsers.set(socket.userId, userData);
    }
    
    // Remove from chat rooms
    chatRooms.forEach((room, chatId) => {
      if (room.connectedUsers.has(socket.userId)) {
        room.connectedUsers.delete(socket.userId);
        
        // Notify other participants that user is offline
        socket.to(`chat:${chatId}`).emit('user_offline', {
          userId: socket.userId,
          chatId
        });
      }
    });
    
    // Clean up empty chat rooms
    chatRooms.forEach((room, chatId) => {
      if (room.connectedUsers.size === 0) {
        chatRooms.delete(chatId);
      }
    });
  });

  // Handle errors
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date(),
    activeUsers: activeUsers.size,
    activeChatRooms: chatRooms.size
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Express error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.SOCKET_PORT || 3001;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Socket.IO server running on port ${PORT}`);
}).on('error', (error) => {
  console.error('Server startup error:', error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Socket.IO server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.close(() => {
    console.log('Socket.IO server closed');
    process.exit(0);
  });
});
