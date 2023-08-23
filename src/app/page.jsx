import ImageCarousel from "./components/imageCarousel";

const images = [
  "/Startsida-lightmode.jpeg",
  // Add more image URLs here
];
export default function Home() {
  return (
    <main>
      <div className="bg-red-600 h-screen min-h-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black p-10 [font-variation-settings:'wght'_900] hover:[font-variation-settings:'wght'_10] transition-[font-variation-settings] duration-200 text-white">
          Urvalsprov Webbutveckling{" "}
        </h1>
        <div>
          
        </div>
      </div>
      
      <div className="flex justify-center items-center h-screen">
        
        <ImageCarousel images={images} />
      </div>
    </main>
  );
}
