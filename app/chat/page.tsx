"use client"

import socket from "@/lib/socket"

export default function ChatPage() {
  // Example usage
  socket.on("connect", () => {
    console.log("Connected to socket server")
  })

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Chat</h1>
    </div>
  )
}
