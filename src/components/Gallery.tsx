import Image from "next/image";

const Gallery = () => {
  return (
    <section className="w-full pt-12 flex">
      <div className="pt-10">
        <Image
          src="/gallery-1.png"
          alt="photo-1"
          sizes="100vw"
          width={200}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="px-5">
        <Image
          src="/gallery-2.jpg"
          alt="photo-2"
          width={200}
          height={300}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default Gallery;
