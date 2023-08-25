"use client";
import ImageCarousel from "../components/ImageCarousel";
import JumpingArrow from "../components/JumpingArrow";

const imagesFirst = ["prov.gif", "nodeDemo2.gif"];
const descriptionsFirst = [
  "Frågor med svarsalternativ som testar logiskt tänkande. Den första frågan testar förmågan att se mönster och sekventiellt tänkande. I den andra uppgiften ska eleven skriva instruktioner för en maskin.",
  "Uppgift: uppnå slutvärdet ovan med hjälp av att sammansluta noder av tal i noder med operatorer."
];

const imagesSecond = ["kodtest1.jpeg", "kodtest2.jpeg"];
const descriptionsSecond = [

];

const imagesThird = [
  "confirmation-lightmode.jpeg",
  "confirmation-darkmode.jpeg",
];
const descriptionsThird = ["Bekräftelse i Lightmode", "Bekräftelse i Darkmode"];

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
        <div className="flex flex-col px-40">
          <div className="bg-white p-8 "></div>
          <div className="p-8 border max-h-max flex object-center bg-blue-900">
            <img
              src="/login.gif"
              alt="Picture of the author"
              className="object-contain p-2 mx-auto"
            />
          </div>
        </div>
        <div className="pt-20">
          <h2 className="text-3xl ml-11 font-light">
            DEL 1. Analogt test med kodfrågor
          </h2>
          <p className=" pt-5 pb-5 ml-11 max-w-2xl ">
          Första delan av testet innehåller enklare och grundläggande kodfrågor, för att testa förståelsen och kunskapsnivån av kod. Detta görs på plats med penna och papper under övervakning av en testvakt.
          </p>
          <ImageCarousel
            images={imagesSecond}
            descriptions={descriptionsSecond}
          />
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">
          DEL 2. Test på problemlösningsförmåga
        </h2>
        <p className=" pt-5 pb-5 ml-11 max-w-2xl">
        Den här delen utförs också på plats i sal, men genom ett program som förinstalleras på deltagarens dator. Den består av ett antal frågor och övningar som syftar till att testa och utvärdera problemlösningsförmåga.
        </p>
        <ImageCarousel images={imagesFirst} descriptions={descriptionsFirst} />
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 font-light">DEL 3. Personlig video</h2>
        <p className=" pt-5 pb-5 ml-11 max-w-2xl">
        I del 3 ska den sökande skicka in en kort video för att svara på frågor kring samarbete. De ska reflektera kring kompromisser och hur de hanterar missförstånd och utmaningar i grupp, då en stor del av utbildningen och yrket utförs i team.
        </p>
        <div className="flex flex-col px-40 ">
          <div className="p-8 border max-h-max flex object-center bg-blue-900">
            <img
              src="personligvideo.avif"
              alt="Man filming himself with mobile camera"
              className="object-contain p-2 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="pt-20">
        <h2 className="text-3xl ml-11 mb-10 font-light">Bekräftelse / Utloggning</h2>
        <ImageCarousel images={imagesThird} descriptions={descriptionsThird} />
      </div>
    </main>
  );
}
