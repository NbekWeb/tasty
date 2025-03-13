"use client";

export default function Modern() {
  return (
    <div className="h-screen pt-28 pb-14 flex flex-col funnel-font container px-2.5 mx-auto">
      <h2 className="flex w-full justify-center text-gray-900 opacity-60 text-[360px] leading-[80%] font-medium">
        Problem
      </h2>
      <div className="grid grid-cols-2 gap-5 flex-grow h-full -mt-15  ">
        <div className="border rounded-4xl border-gray-900/50 p-8 h-full bg-dark-180 relative ">
          <img
            src="/img/message_bot.png"
            className=" w-auto h-44 absolute top-8 left-8"
          />
          <img
            src="/img/hex-bottom.png"
            className="absolute bottom-8 left-8 rotate-90"
          />
          <img
            src="/img/hex-bottom.png"
            className="absolute top-8 right-8 -rotate-90"
          />
          <img
            src="/img/chefbot.png"
            className=" w-full object-contain h-full absolute top-0 left-11"
          />
        </div>
        <div className="border rounded-4xl border-gray-900/50 p-8 h-full bg-dark-180 relative flex flex-col justify-between">
          <span className="text-[72px] leading-[100%] gradient-text font-medium ">Modern Nutrition Challenges</span>
          <span className="text-2xl">
            The growing prevalence of diet-related issues such as obesity and
            diabetes highlights the lack of personalization and healthy meal
            options. Our mission is to empower everyone to take control of their
            nutrition.
          </span>
        </div>
      </div>
    </div>
  );
}
