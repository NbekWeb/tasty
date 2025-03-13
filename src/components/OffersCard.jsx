"use client";

export default function OffersCard({ title, content, img }) {
  return (
    <div className="h-100 rounded-4xl  flex-col justify-between funnel-font  bg-dark-180 border backdrop-blur-[50px] flex w-94 border-white/20 p-6">
      <div className="flex flex-col gap-6">
        <span className="text-2xl text-white">{title}</span>
        <span className="text-gray-900 text-lg ">{content}</span>
      </div>
      <img src={img} className="w-full" />
    </div>
  );
}
