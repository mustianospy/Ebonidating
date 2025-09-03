import { io as socketIO, type Socket } from "socket.io-client"

class SocketService {
  private socket: Socket | null = null

  connect(userId: string) {
    // ✅ Only connect on the client
    if (typeof window === "undefined") {
      return null
    }

    if (!this.socket) {
      this.socket = socketIO(
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001",
        {
          auth: { userId },
          withCredentials: true,
        }
      )

      this.socket.on("connect", () => {
        console.log("✅ Connected to socket server")
      })

      this.socket.on("disconnect", () => {
        console.log("❌ Disconnected from socket server")
      })
    }

    return this.socket
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  getSocket() {
    return this.socket
  }
}

export default new SocketService()
