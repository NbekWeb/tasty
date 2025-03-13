"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Moving from "./Moving";

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Animation starts when container enters viewport
          end: "bottom center", // Stops when it leaves viewport
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="funnel-font">
      <div ref={containerRef} className="flex items-center h-screen">
        <div className="flex items-start overflow-hidden h-max">
          <span
            ref={textRef}
            className="gradient-text leading-[100%] font-medium text-[360px] whitespace-nowrap pl-44"
          >
            Our Solution
          </span>
        </div>
      </div>
      <div className="container flex items-center h-screen mx-auto px-60 ">
        <div className="relative max-h-max">
          <p className="text-5xl font-medium text-center gradient-text">
            We are building a platform that connects users, restaurants, and
            contributors. Together, we aim to make nutrition healthier, more
            personalized, and accessible to all.
          </p>
          <span className="absolute -top-28 left-10">
            <Moving
              image={"/img/ring.png"}
              className="-rotate-[30deg] transform"
            />
          </span>
          <span className="absolute -top-24 left-1/4">
            <Moving image={"/img/cheese.png"} />
          </span>
          <span className="absolute -top-36 left-1/2 ">
            <Moving image={"/img/avo.png"} />
          </span>
          <span className="absolute right-10 -top-20">
            <Moving image={"/img/ramsen.png"} />
          </span>
          <span className="absolute -bottom-25">
            <Moving image={"/img/tomat.png"} />
          </span>
          <span className="absolute -bottom-32 left-1/3">
            <Moving image={"/img/ramen.png"} />
          </span>
          <span className="absolute -bottom-22 right-4">
            <Moving image={"/img/egg.png"} />
          </span>
        </div>
      </div>
    </div>
  );
}
