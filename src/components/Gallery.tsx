import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="w-full pt-12 flex overflow-x-hidden">
      <motion.div
        className="pt-10"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        transition={{
          duration: 1,
          once: true,
        }}
      >
        <Image
          src="/gallery-1.webp"
          alt="photo-1"
          sizes="100vw"
          width={200}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      <motion.div
        className="px-5"
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        transition={{
          duration: 1,
          once: true,
        }}
      >
        <Image
          src="/gallery-2.webp"
          alt="photo-2"
          width={200}
          height={300}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
    </section>
  );
};

export default Gallery;
