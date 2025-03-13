"use client";

import Moving from "./Moving";
import Scrolling from "./Scrolling";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const chefRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(chefRef.current, {
        scale: 0.9,
        opacity: 1,
        duration: 0.05,
      });

      tl.to(
        titleRef.current,
        {
          scale: 0.8,
          opacity: 0.7,
          y: -50,
          duration: 0.1,
        },
        "<"
      );
      if (!bottomTextRef.current) return;

      const text = bottomTextRef.current.innerText;
      bottomTextRef.current.innerHTML = "";

      const chars = text.split("");
      chars.forEach((char, i) => {
        let span;

        span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";

        bottomTextRef.current.appendChild(span);
        if (char == "\n") {
          bottomTextRef.current.appendChild(document.createElement("br"));
        }

        gsap.to(span, {
          opacity: 1,
          duration: 0.05,
          delay: i * 0.05,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[calc(100vh-100px)] overflow-y-hidden"
    >
      <Scrolling />
      <div className="container relative flex h-full mx-auto">
        <img
          src="/img/hexagon-bg.png"
          className="absolute object-contain w-auto h-full transform -translate-x-1/2 max-h-[978px] left-1/2 top-13"
        />
        <div className="relative flex w-full h-full flex-col justify-between  container mx-auto px-2.5">
          <span
            ref={titleRef}
            className="text-[158px] leading-[94%] relative z-[1] max-h-max uppercase gradient-text climate-font flex justify-center w-full max-2xl:text-[120px] max-xl:text-[100px]"
          >
            Tasty Flow
          </span>
          <img
            src="/img/chef.png"
            ref={chefRef}
            className="absolute  z-10 object-contain w-auto h-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          />
          <div className="flex justify-between px-36 ">
            <div className="flex gap-25 ">
              <Moving image={"/img/apple.png"} />
              <Moving image={"/img/cheese.png"} className="mt-20" />
            </div>
            <div className="flex ">
              <Moving
                image={"/img/ring.png"}
                className="mt-12 transform -rotate-[22deg]"
              />
              <Moving image={"/img/tomat.png"} className="ml-8  mt-32" />
              <Moving
                image={"/img/fish.png"}
                className="-ml-8 -mt-10 max-2xl:-mt-0 rotate-12"
              />
            </div>
          </div>
          <div className="flex justify-between items-center pb-10 ">
            <span
              className="text-4xl font-medium funnel-font"
              ref={bottomTextRef}
            >
              Personalized <br /> Nutrition <br /> Powered by AI
            </span>
            <div className="flex gap-3 items-center h-18">
              <img src="/img/play-market.png" className="h-full" />
              <img src="/img/appstore.png" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
