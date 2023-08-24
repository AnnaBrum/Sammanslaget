import Infocard from "../../components/InfoCard";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white h-screen min-h-full">
      <div className="pt-40 p-7">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black mb-20 text-red-500">
            om sidan
          </h2>
          <p className="text-xl max-w-2xl">
            Vi fick uppgiften att göra ett förslag på ett nytt urvalsprov för en
            av våra utbildningar och valde det provet som sökande till
            utbildningen för Webbutveckling. Kriterierna som vi skulle förhålla
            oss till var tillgänglighet, kostnadseffektivitet, säkerhet samt hur
            väl testet matchade utbildningens krav. Dessutom skulle det gärna
            innehålla moment som kunde hitta oslipade webbutvecklar-diamanter.
          </p>
          <br />
          <p className="text-xl max-w-2xl">Vi delade upp testet i tre delar:</p>
          <div className="flexflex-col m-6">
            <div className="p-4">
              <h3 className="font-bold">
                1. Korta kodfrågor med svarsalternativ
              </h3>
              <p>beskrivning</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">2. Problemlösningsdel</h3>
              <p>beskrivning</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">3. Personlig video</h3>
              <p>beskrivning</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <Infocard
            profileimg={"anna.jpeg"}
            name="Anna Brumark"
            education="Webbutvecklare"
            email=""
          />
          <Infocard
            profileimg={"emma.jpeg"}
            name="Emma Hedlund"
            education="Webbutvecklare"
            email=""
          />
          <Infocard
            profileimg={"gustav.jpeg"}
            name="Gustav Bååth"
            education="Game Programmer"
            email=""
          />
          <Infocard
            profileimg={"magnolia.jpeg"}
            name="Magnolia Banda Marin"
            education="UX Designer"
            email=""
          />
          <Infocard
            profileimg={"veronica.jpeg"}
            name="Veronica Ohlsson"
            education="UX Designer"
            email=""
          />
        </div>
      </div>
      {/* <div className="bg-white mt-8 h-40 mt-10">
        <Link
          className="text-black hover:font-bold"
          href="
          https://www.yrgo.se/"
        >
          Yrgos hemsida
        </Link>
      </div> */}
    </div>
  );
}
