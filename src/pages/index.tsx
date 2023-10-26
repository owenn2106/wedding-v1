import BridesGoom from "@/components/BridesGoom";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Maps from "@/components/Maps";
import Messages from "@/components/Messages";
import Quotes from "@/components/Quotes";
import { abhaya, nunito, birthstone } from "@/fonts";

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen h-full flex justify-center ${nunito.variable} ${abhaya.variable} ${birthstone.variable}`}
    >
      <div className={`w-full md:w-[500px] bg-neutral-100`}>
        <Header />
        <Gallery />
        <Quotes />
        <BridesGoom />
        <Countdown dateString={"2023-11-25T12:00:00"} />
        <Maps />
        <Messages />

        <footer className="text-sm text-center pb-3">CREATED BY MEMOIRE</footer>
      </div>
    </main>
  );
}
