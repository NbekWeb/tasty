import Image from "next/image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Modern from "@/components/Modern";
import Offers from "@/components/Offers";
import Dinning from "@/components/Dinning";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-main-bg">
      <Navbar />
      <Main />
      <Dinning />
      <Offers />
      <Modern />
      <Solution />
      <span className="flex min-h-screen climate-font">salom</span>
    </div>
  );
}
