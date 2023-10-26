import Image from "next/image";
import { motion } from "framer-motion";

const BridesGoom = () => {
  return (
    <section>
      <div>
        <motion.div
          className="pl-20"
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 1,
            once: true,
          }}
        >
          <Image
            src="/bride.webp"
            alt="bride"
            width={360}
            height={180}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        <div className="[&>*]:text-center">
          <h3 className="font-birthstone text-gold text-6xl pt-5 pb-3">
            Jeiny
          </h3>
          <p className="tracking-widest text-lg">CHRISTININGSIH RUNTU, S.AK.</p>
          <p className="tracking-widest text-xs pt-2">ANAK KE-2</p>
          <p className="tracking-widest text-xs">
            DARI JOHNY RUNTU & JEANE SAMAH
          </p>
        </div>
      </div>

      <div className="pt-16">
        <motion.div
          className="pr-20"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 1,
            once: true,
          }}
        >
          <Image
            src="/groom.webp"
            alt="groom"
            width={360}
            height={180}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        <div className="[&>*]:text-center">
          <h3 className="font-birthstone text-gold text-6xl pt-5 pb-3">
            Julio
          </h3>
          <p className="tracking-widest text-lg">MESAK DUMAIS</p>
          <p className="tracking-widest text-xs pt-2">ANAK KE-2</p>
          <p className="tracking-widest text-xs">
            FERY DUMAIS & ANSELA TUMIMOMOR
          </p>
        </div>
      </div>
    </section>
  );
};

export default BridesGoom;
