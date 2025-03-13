"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Moving({ image, className = "" }) {
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
    <div ref={moveRef} className={`relative  flex w-25 h-25 ${className}`}>
      <img
        src="/img/product.png"
        className="object-cover w-full h-full  opacity-90 "
      />
      <img src="/img/polygon3.png" className="absolute h-7 top-6 right-3" />
      {image && (
        <img
          src={image}
          alt="Animated Image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-22 top-1/2 left-1/2"
          width={10}
          height={20}
        />
      )}
    </div>
  );
}
