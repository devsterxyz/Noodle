"use client"

import { WS_URL } from "@/config"
import { initDraw } from "@/draw"
import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas"

export function RoomCanvas ({roomId}: {
  roomId: string
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NzBhYjY2My1mYjliLTQwODQtYTlhYi1mYWM4M2MzMWU2YTYiLCJpYXQiOjE3OTI1MTIxMDJ9.nHzkPYroW4ZGYF1wl2u0yh6vqJRa7VL-oYqMCMNGanE`)

    ws.onopen = () => {
      setSocket(ws)
      ws.send(JSON.stringify({
        type: "join_room",
        roomId
      }))
    }
  }, [])

  if(!socket){
    return(
      <div>
        connecting to the server.....
      </div>
    )
  }
  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  )
}