import Image from "next/image";

const Maps = () => {
  return (
    <a
      href="https://maps.app.goo.gl/Y3qGxndpSsRFoJem6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="mt-20 h-60 w-full bg-[url(/maps.webp)] bg-cover bg-center relative">
        <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 z-10">
          <Image src="/pin.png" alt="map-pin" width={80} height={80} />
          <p className="tracking-widest text-white">PATH TO HAPPINESS</p>
          <p className="tracking-widest text-white text-[8px]">
            CLICK ME TO OPEN MAPS
          </p>
        </div>
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
      </section>
    </a>
  );
};

export default Maps;
