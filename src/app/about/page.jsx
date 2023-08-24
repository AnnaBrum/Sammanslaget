import Infocard from "../components/Infocard";

export default function About() {
  return (
    <div className="bg-white h-screen min-h-full">
      <div className="pt-40 p-7">

        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black mb-20 text-red-500">
            ABOUT US
          </h2>
          <p className="text-black">
            efowekfpewkgpwglepwglewpglewpglwelgwlgpwglwpglwpdlåew
            vkewovkfewofkewofkewolkfceowvkewovkewofkeowfw
            fewjifjwovkwpoflkewopfjkewopfkcmespkldvmewopvmewopvmwopvmwpo
          </p>
        </div>

        <div>
          <Infocard></Infocard>
          <Infocard></Infocard>
          <Infocard></Infocard>
          <Infocard></Infocard>
          <Infocard></Infocard>
          <Infocard></Infocard>
        </div>

      </div>
    </div>
  );
}
