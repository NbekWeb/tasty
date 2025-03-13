"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function Scrolling() {
  const moveRef = useRef(null);

  useEffect(() => {
    gsap.to(moveRef.current, {
      y: -10,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={moveRef}
      className="absolute bottom-4 backdrop-blur-[15px] left-1/2 transform -translate-x-1/2 z-[11]  flex w-12 h-12 text-white bg-white/20 border rounded-full border-white/50 items-center justify-center"
    >
      <ChevronDown className="w-8" />
    </div>
  );
}
