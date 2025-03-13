"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Moving from "./Moving";

export default function Offers() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current.innerText;
    textRef.current.innerHTML = "";

    const chars = text.split("");
    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";

      textRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: i * 0.05,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-screen mx-auto container flex flex-col gap-0 px-2.5"
    >
      <div className="relative pt-10 max-w-max border max-h-max">
        <h2 className="gradient-text font-medium funnel-font   text-[132px] leading-[115%] relative max-2xl:text-[100px]">
          Welcome to a new <br /> era of dining!
          <span className="absolute -bottom-44 left-1/3">
            <Moving image={"/img/oliv.png"} />
          </span>
        </h2>
        <div>
          <span className="absolute top-5 left-1/4 max-2xl:top-0">
            <Moving image={"/img/tomat.png"} className="" />
          </span>
          <span className="absolute top-2 max-2xl:top-0 right-1/4">
            <Moving image={"/img/corn.png"} className="transform rotate-90" />
          </span>
          <span className="absolute top-80 left-[10%] max-2xl:top-64">
            <Moving image={"/img/fish.png"} />
          </span>

          <span className="absolute top-70 right-10 max-2xl:top-52">
            <Moving image={"/img/egg.png"} />
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-15 w-full border relative flex-grow">
        <span ref={textRef} className="max-w-[500px]">
          We offer a unique solution that redefines restaurants. Say goodbye
          to fixed menus–welcome dishes created exclusively for you
          by an intelligent AI chef.
        </span>
        <div>
          <img
            src="/img/bot-tomat.png"
            className="h-full absolute top-0 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
      <div className="h-full hidden scrolling  justify-between">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  );
}
