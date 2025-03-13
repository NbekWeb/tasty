"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Moving from "./Moving";

export default function Solution() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="funnel-font">
      <div className="h-screen flex items-center overflow-hidden border">
        <span
          ref={textRef}
          className="gradient-text leading-[100%] font-medium text-[360px] whitespace-nowrap pl-44"
        >
          Our Solution
        </span>
      </div>
      <div className="mx-auto px-60 container h-screen flex items-center ">
        <div className=" max-h-max border relative">
          <p className=" font-medium text-5xl text-center gradient-text">
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
          <span className="absolute"></span>
          <div className="flex">
            {/* 
    
            <Moving image={"/img/tomat.png"} />
            <Moving image={"/img/ramen.png"} />
            <Moving image={"/img/egg.png"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
