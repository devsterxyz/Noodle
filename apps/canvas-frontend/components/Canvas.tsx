
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from "lucide-react";

type Shape = "circle" | "rect" | "pencil"

export function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedTool, setSelectedTool] = useState<Shape>("circle")

  useEffect(() => {
    //@ts-ignore
    window.selectedTool = selectedTool
  }, [selectedTool])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    initDraw(canvas, roomId, socket);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [roomId, socket]);

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
  selectedTool: Shape,
  setSelectedTool: (s: Shape) => void
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