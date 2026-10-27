import { Suspense } from "react"
import { RoomCanvas } from "@/components/RoomCanvas"

export default function Canvas({
  params,
}: {
  params: Promise<{ roomId: string }>
}) {
  return (
    <Suspense fallback={<div>Loading canvas...</div>}>
      <RoomLoader params={params} />
    </Suspense>
  )
}

async function RoomLoader({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params
  return <RoomCanvas roomId={roomId} />
}