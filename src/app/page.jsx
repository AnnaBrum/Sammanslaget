"use client";
import ImageCarousel from "./components/ImageCarousel";
import JumpingArrow from "./components/JumpingArrow";

const imagesFirst = ["nodeDemo2.gif"];

const imagesSecond = ["/Startsida-lightmode.jpeg", "/budget.png"];

export default function Home() {
  return (
    <main className="mb-80">
      <div className="bg-red-500 flex flex-col justify-between h-screen   --tw-bg-opacity:1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black p-7 pt-40 [font-variation-settings:'wght'_900] hover:[font-variation-settings:'wght'_10] transition-[font-variation-settings] duration-200 text-white">
          Urvalsprov <br /> Webbutveckling
        </h1>
        <p className="text-white text-3xl ml-11">
          En sida för att visa exempel av hur <br /> urvalsprovet för YRGO hade
          kunnat se ut. <br />
          Scrolla ned för att se provets olika delar!
        </p>

        <JumpingArrow />
      </div>

      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">Startsida / Inlogg</h2>
        <div className="flex flex-col px-40 py-20  bg-blue-900">
          <img
            src="/Startsida-lightmode.jpeg"
            alt="Picture of the author"
            className="object-contain w-full p-2"
          />
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">
          Test på problemlösningsförmåga
        </h2>
        <div className="">
          <ImageCarousel images={imagesFirst} />
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">
          Kodfrågor med svarsalternativ
        </h2>
        <div className="">
          <ImageCarousel images={imagesSecond} />
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">Personlig video</h2>
        <div className="flex flex-col px-40 py-20  bg-blue-900">
          <img
            src="/Startsida-lightmode.jpeg"
            alt="Picture of the author"
            className="object-contain w-full p-2"
          />
        </div>
      </div>
    </main>
  );
}
