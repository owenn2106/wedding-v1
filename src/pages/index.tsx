import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen h-full flex justify-center ${inter.className}`}
    >
      <div
        className={`w-full md:w-[360px] bg-neutral-100 outline outline-red-500`}
      >
        <section>
          <div>Header here</div>
        </section>

        <section>
          <div>Gallery photos here</div>
        </section>

        <section>
          <div>Quotes here</div>
        </section>

        <section>
          <div>Brides and Groom here</div>
        </section>

        <section>
          <div>Countdown here</div>
        </section>

        <section>
          <div>Maps here</div>
        </section>

        <section>
          <div>Message here</div>
        </section>
      </div>
    </main>
  );
}
