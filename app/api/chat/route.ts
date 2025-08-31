
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const chats = await prisma.chat.findMany({
      where: {
        participants: {
          some: {
            userId: session.user.id
          }
        }
      },
      include: {
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        },
        messages: {
          orderBy: {
            createdAt: "desc"
          },
          take: 1,
          include: {
            sender: {
              select: {
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        updatedAt: "desc"
      }
    })

    const formattedChats = chats.map(chat => ({
      id: chat.id,
      type: chat.type,
      participants: chat.participants.map(p => ({
        id: p.user.id,
        name: p.user.name,
        image: p.user.image
      })),
      lastMessage: chat.messages[0] ? {
        content: chat.messages[0].content,
        createdAt: chat.messages[0].createdAt.toISOString(),
        sender: {
          name: chat.messages[0].sender.name
        }
      } : null
    }))

    return NextResponse.json({
      chats: formattedChats
    })

  } catch (error) {
    console.error("Chat list error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
