import ImageCarousel from "./components/imageCarousel";

const images = [
  "https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
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
