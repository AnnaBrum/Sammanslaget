"use client";
import ImageCarousel from "./components/imageCarousel";
import JumpingArrow from "./components/JumpingArrow";

const images = [
  "/Startsida-lightmode.jpeg",
  // Add more image URLs here
];

const imagesSecond = ["/Startsida-lightmode.jpeg", "/budget.png"];

export default function Home() {
  return (
    <main>
      <div className="bg-red-500 flex flex-col justify-between h-screen   --tw-bg-opacity:1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black p-7 pt-40 [font-variation-settings:'wght'_900] hover:[font-variation-settings:'wght'_10] transition-[font-variation-settings] duration-200 text-white">
          Urvalsprov <br/> Webbutveckling
        </h1>
        <p className="text-white text-3xl ml-11">
          En sida för att visa exempel av hur <br/> urvalsprovet för YRGO hade kunnat se ut. <br/>
          Scrolla ned för att se provets olika delar!
        </p>

        <JumpingArrow />
      </div>

      <div className="h-screen mb-4">
      <h2 className="text-3xl ml-11 mt-20">
          STARTSIDA / INLOGG
        </h2>
        <h2 className="text-3xl ml-11 mt-20">
          PROBLEMLÖSNING EXEMPEL
        </h2>
        <ImageCarousel images={images} />
        <h2 className="text-3xl ml-11 mt-20">
          KOD FRÅGOR EXEMPEL
        </h2>
        <ImageCarousel images={imagesSecond} />
      </div>
    </main>
  );
}
