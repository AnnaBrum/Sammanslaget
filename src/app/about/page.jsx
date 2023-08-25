import Profile from "../../components/Profile";

export default function About() {
  return (
    <div className="bg-white h-screen min-h-full">
      <div className="pt-40 p-7">
        <div className="mb-40">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black mb-20 text-red-500">
            om sidan
          </h2>
          <p className="text-xl max-w-2xl">
            Sammanslaget är ett samarbetsprojekt mellan utbildningarna
            UX-design, Game Programming och Webbutveckling på Yrgo och vi som
            har gjort den här sidan är ett team av studenter från de
            utbildningarna.
          </p>
          <br />
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
              <p className=" max-w-2xl">
                Det skrivna testet som görs på plats visar på grundläggande
                kunskaper i html, css och allmänt om hur webben fungerar.
              </p>
              <br />
            </div>
            <div className="p-4">
              <h3 className="font-bold">2. Problemlösningsdel</h3>
              <p className=" max-w-2xl">
                Problemlösning och logiskt tänkande är grundläggande egenskaper
                som behövs för att lära sig skriva kod. Även om man aldirg har
                kodat förut och får sämre resultat på kodfrågorna, ska man här
                kunna visa på att man ändå har en förmåga att se strukturer och
                sammanhang. Här testas även sekventiellt tänkande och huruvida
                man förstår hur man strukturerar efter hierarkier.
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">3. Personlig video</h3>
              <p className=" max-w-2xl">
                Videodelen - som utförs och skickas innan deltagande vid testet
                på plats och syftar till att se hur personen svarar på frågor
                som handlar om grupparbeten och kompromisser. Videon är bara
                några minuter lång och deltagaren får svara på en eller två
                frågor.
              </p>
            </div>
          </div>
          <br />
          <p className="text-xl max-w-2xl">
            För att göra testet så
            <span className="font-bold">tillgängligt</span> som möjligt erbjuds
            vissa hjälpmedel på förfrågan på plats, så som ljudisolerande
            hörlurar, skärmar mot distraktion eller skärmavläsare.
          </p>
          <br />
          <p className="text-xl max-w-2xl">
            För att göra testet så <span className="font-bold">säkert</span> som
            möjligt utförs det på plats i Yrgos lokaler under övervakning, utan
            tillgång till internet och med en nedladdad programvara som känner
            av andra flikar etc. Den delen som är faktabaserad är dessutom helt
            analog och det går därför inte att kopiera och söka på
            informationen.
          </p>
          <br />
          <p className="text-xl max-w-2xl">
            I frågan om <span className="font-bold">kostnadseffektivitet</span>
            så kräver problemlösnings- och videodelen mer resurser i form av
            utvärdering. Men vi avgjorde att det var nödvändiga resurser för att
            inte kompromissa med kvalitén och för att hitta eventuella &quot;oslipade
            diamanter&quot;.
          </p>
          <br />
          <p className="text-xl max-w-2xl">
            <span className="font-bold">Den oslipade diamanten</span> tolkade vi
            som någon som kan tänka kreativt och problemlösningsorienterat.
            Därför utformade vi del 2 så att deltagaren kan förklara sina
            tankegångar och undvika rena kryss-frågor, till skillnad från första
            delen.
          </p>
          <p className="text-xl max-w-2xl"></p>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black mb-10 text-red-500">
          om oss
        </h2>
        <div className="flex flex-col items-center mb-40">
          <div className="flex flex-wrap">
            <Profile
              profileimg={"anna.jpeg"}
              name="Anna Brumark"
              education="Webbutvecklare"
              email="annahelenabrumark@gmail.com"
            />
            <Profile
              profileimg={"emma.jpeg"}
              name="Emma Hedlund"
              education="Webbutvecklare"
              email=""
            />
            <Profile
              profileimg={"gustav.jpeg"}
              name="Gustav Bååth"
              education="Game Programmer"
              email="gustav.baath02@gmail.com"
            />
            <Profile
              profileimg={"magnolia.jpeg"}
              name="Magnolia Banda Marin"
              education="UX Designer"
              email="magban1227@skola.goteborg.se"
            />
            <Profile
              profileimg={"veronica.jpeg"}
              name="Veronica Ohlsson"
              education="UX Designer"
              email="verols2001@skola.goteborg.se"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
