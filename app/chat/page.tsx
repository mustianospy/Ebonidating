
"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { socketService } from "@/lib/socket"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Video, Phone } from "lucide-react"

interface Chat {
  id: string
  type: string
  lastMessage?: {
    content: string
    createdAt: string
    sender: {
      name: string
    }
  }
  participants: Array<{
    id: string
    name: string
    image?: string
  }>
}

interface Message {
  id: string
  content: string
  senderId: string
  createdAt: string
  sender: {
    name: string
    image?: string
  }
}

export default function ChatPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/auth/signin")
      return
    }

    fetchChats()
    initializeSocket()
  }, [session, status])

  const fetchChats = async () => {
    try {
      const response = await fetch("/api/chat")
      if (response.ok) {
        const data = await response.json()
        setChats(data.chats || [])
      }
    } catch (error) {
      console.error("Failed to fetch chats:", error)
    } finally {
      setLoading(false)
    }
  }

  const initializeSocket = () => {
    if (session?.user?.id) {
      const socket = socketService.connect(session.user.id)
      
      socket.on("new_message", (message: Message) => {
        setMessages(prev => [...prev, message])
      })

      socket.on("user_typing", (data: { userId: string; typing: boolean }) => {
        // Handle typing indicators
      })
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedChat || !session?.user?.id) return

    try {
      const response = await fetch("/api/chat/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId: selectedChat.id,
          content: newMessage,
        }),
      })

      if (response.ok) {
        setNewMessage("")
        // Message will be added via socket
      }
    } catch (error) {
      console.error("Failed to send message:", error)
    }
  }

  const handleChatSelect = async (chat: Chat) => {
    setSelectedChat(chat)
    
    try {
      const response = await fetch(`/api/chat/${chat.id}/messages`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error)
    }

    // Join socket room
    if (session?.user?.id) {
      socketService.joinChat(chat.id)
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Your Matches
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {chats.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No matches yet. Start swiping to find your perfect match!
                </div>
              ) : (
                <div className="space-y-1">
                  {chats.map((chat) => {
                    const otherUser = chat.participants.find(p => p.id !== session?.user?.id)
                    return (
                      <div
                        key={chat.id}
                        onClick={() => handleChatSelect(chat)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                          selectedChat?.id === chat.id ? "bg-purple-50" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={otherUser?.image || "/placeholder.svg"} />
                            <AvatarFallback>
                              {otherUser?.name?.charAt(0) || "?"}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              {otherUser?.name || "Unknown User"}
                            </p>
                            {chat.lastMessage && (
                              <p className="text-xs text-gray-500 truncate">
                                {chat.lastMessage.content}
                              </p>
                            )}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            New
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="lg:col-span-2">
            {selectedChat ? (
              <>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage 
                          src={selectedChat.participants.find(p => p.id !== session?.user?.id)?.image || "/placeholder.svg"} 
                        />
                        <AvatarFallback>
                          {selectedChat.participants.find(p => p.id !== session?.user?.id)?.name?.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">
                          {selectedChat.participants.find(p => p.id !== session?.user?.id)?.name || "Unknown User"}
                        </h3>
                        <p className="text-sm text-green-600">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <Separator />
                <CardContent className="p-0">
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {messages.length === 0 ? (
                      <div className="text-center text-gray-500 mt-20">
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>Start your conversation!</p>
                        <p className="text-sm">Say hello and break the ice.</p>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.senderId === session?.user?.id ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.senderId === session?.user?.id
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-75 mt-1">
                              {new Date(message.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center text-gray-500">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-semibold mb-2">Select a Chat</h3>
                  <p>Choose a conversation from your matches to start chatting.</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
