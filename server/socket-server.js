const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Configure CORS
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  credentials: true
}));

const io = new Server(server, {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = process.env.SOCKET_PORT || 3001;

// Store active users
const activeUsers = new Map();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle user joining
  socket.on('join-user', (userId) => {
    activeUsers.set(userId, socket.id);
    socket.userId = userId;

    // Join user-specific room
    socket.join(`user_${userId}`);

    // Notify friends that user is online
    socket.broadcast.emit('user-online', userId);
  });

  // Handle joining chat rooms
  socket.on('join-chat', (chatId) => {
    socket.join(`chat_${chatId}`);
    console.log(`User ${socket.userId} joined chat ${chatId}`);
  });

  // Handle sending messages
  socket.on('send-message', (data) => {
    const { chatId, message } = data;

    // Emit to all users in the chat room
    socket.to(`chat_${chatId}`).emit('new-message', {
      ...message,
      senderId: socket.userId
    });
  });

  // Handle typing indicators
  socket.on('typing-start', (chatId) => {
    socket.to(`chat_${chatId}`).emit('user-typing', {
      userId: socket.userId,
      isTyping: true
    });
  });

  socket.on('typing-stop', (chatId) => {
    socket.to(`chat_${chatId}`).emit('user-typing', {
      userId: socket.userId,
      isTyping: false
    });
  });

  // Handle video call signaling
  socket.on('call-user', (data) => {
    const { targetUserId, offer } = data;
    const targetSocketId = activeUsers.get(targetUserId);

    if (targetSocketId) {
      io.to(targetSocketId).emit('incoming-call', {
        callerId: socket.userId,
        offer
      });
    }
  });

  socket.on('answer-call', (data) => {
    const { callerId, answer } = data;
    const callerSocketId = activeUsers.get(callerId);

    if (callerSocketId) {
      io.to(callerSocketId).emit('call-answered', {
        answer
      });
    }
  });

  socket.on('ice-candidate', (data) => {
    const { targetUserId, candidate } = data;
    const targetSocketId = activeUsers.get(targetUserId);

    if (targetSocketId) {
      io.to(targetSocketId).emit('ice-candidate', {
        candidate,
        senderId: socket.userId
      });
    }
  });

  socket.on('end-call', (targetUserId) => {
    const targetSocketId = activeUsers.get(targetUserId);

    if (targetSocketId) {
      io.to(targetSocketId).emit('call-ended');
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);

    if (socket.userId) {
      activeUsers.delete(socket.userId);

      // Notify friends that user is offline
      socket.broadcast.emit('user-offline', socket.userId);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Socket server running on port ${PORT}`);
});