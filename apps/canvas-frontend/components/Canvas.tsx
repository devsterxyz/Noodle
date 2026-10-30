
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from "lucide-react";
import { Game } from "@/draw/Game";

export type Tool = "circle" | "rect" | "pencil"

export function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Game>()
  const [selectedTool, setSelectedTool] = useState<Tool>("circle")

  useEffect(() => {
    game?.setTool(selectedTool)
  }, [selectedTool, game])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    
    const g = new Game(canvas, roomId, socket)
    setGame(g)

    return () => {
      g.destory()
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [roomId, socket, canvasRef]);

  return (
    <div style={{
      height: "100vh",
      overflow: "hidden"
    }}>
      <canvas ref={canvasRef} style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
      />
      <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
  );
}


function TopBar({selectedTool, setSelectedTool} : {
  selectedTool: Tool,
  setSelectedTool: (s: Tool) => void
}) {



  return (
    <div style={{
        position: "fixed",
        top: 10,
        left: 10
      }}>
        <div className="flex gap-t">
          <IconButton 
            activated={selectedTool === "pencil"} 
            icon={<Pencil />} 
            onClick={() => {
              setSelectedTool("pencil")
            }}>
          </IconButton>

          <IconButton 
            activated={selectedTool === "rect"} 
            icon={<RectangleHorizontalIcon />} 
            onClick={() => {
              setSelectedTool("rect")
            }}>
          </IconButton>
          
          <IconButton 
            activated={selectedTool === "circle"} 
            icon={<Circle />} 
            onClick={() => {
              setSelectedTool("circle")
            }}>
          </IconButton>
        </div>
    </div>
  )
}