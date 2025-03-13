"use client";
import OffersCard from "./OffersCard";

export default function Offers() {
  return (
    <div className="h-screen max-h-screen container mx-auto px-2.5 flex">
      <div className="py-20">
        <OffersCard
          title="Personalization"
          content="Select your dish parameters—from calorie count to macronutrient composition"
          img={"/img/personalcard.png"}
        />
      </div>
      <div className="flex flex-col gap-0 items-center flex-grow py-25">
        <img src="/img/sub.png" className="h-14" />
        <img
          src="/img/bot.png"
          className="h-full  w-auto object-contain"
        />
      </div>
      <div className="py-20 h-full flex items-end">
        <OffersCard
          title="AI Chef"
          content="Artificial intelligence creates unique recipes on the fly"
          img={"/img/aicard.png"}
        />
      </div>
    </div>
  );
}
