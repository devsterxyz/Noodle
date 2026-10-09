import { useEffect, useState } from "react"
import { WS_URL } from "../app/config"


export function useSocket(){
  const [loading, setLoading] = useState(true)
  const [socket, setSocket] = useState<WebSocket>()
  
  useEffect(()=>{
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTAxNmNmZC0zMGVlLTRjY2EtYWFmYi1iNTgxNTdhODNjODkiLCJpYXQiOjE3OTExMDY0NzJ9.oAC29gKBfmA4bnxptQVYJM_lPaofzDkPisbMFcUqfbE`)
    ws.onopen = () => {
      setLoading(false)
      setSocket(ws)
    }
  }, [])

  return {
    socket,
    loading
  }
}