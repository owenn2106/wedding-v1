import { useEffect, useState } from "react";
import BridesGoom from "@/components/BridesGoom";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Maps from "@/components/Maps";
import Messages from "@/components/Messages";
import Quotes from "@/components/Quotes";
import { abhaya, nunito, birthstone } from "@/fonts";
import Loader from "@/components/Loader";

import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Wedding of Jeiny & Julio</title>
        <link rel="icon" href="/memoire-icon.png" />
      </Head>

      <Loader isVisible={isLoading} />
      <motion.main
        className={`w-full h-full flex justify-center ${nunito.variable} ${
          abhaya.variable
        } ${birthstone.variable} ${isLoading && "fixed"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3,
        }}
      >
        <div className={`w-full md:w-[500px] bg-neutral-100`}>
          <Header />
          <Gallery />
          <Quotes />
          <BridesGoom />
          <Countdown dateString={"2023-11-25T12:00:00"} />
          <Maps />
          <Messages />

          <footer className="text-sm text-center pb-3">
            CREATED BY MEMOIRE
          </footer>
        </div>
      </motion.main>
    </>
  );
}
