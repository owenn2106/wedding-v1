const Header = () => {
  return (
    <section className="min-h-[120vh] px-5 bg-[url(/header.jpg)] bg-cover bg-[55%_0%] font-nunito">
      <div className="pt-20 [&>*]:text-center">
        <p className="tracking-widest text-sm">SAVE THE DATE</p>
        <h1 className="font-birthstone text-gold text-6xl pt-2 pb-5">
          Jeiny & Julio
        </h1>
        <p className="tracking-widest text-sm px-2">
          BERSAMA KELUARGA MENGUNDANG ANDA KE PERAYAAN PERNIKAHAN
        </p>
      </div>

      <div className="flex items-center pt-8">
        <div className="border-y-[1.5px] py-1 basis-full">
          <p className="tracking-widest text-sm text-center">SABTU</p>
        </div>
        <div className="flex flex-col items-center mx-5">
          <p className="tracking-widest text-sm">NOV</p>
          <h3 className="font-abhaya text-gold text-5xl">25</h3>
          <p className="tracking-widest text-sm">2023</p>
        </div>
        <div className="border-y-[1.5px] py-1 basis-full">
          <p className="tracking-widest text-sm text-center">12PM & 07PM</p>
        </div>
      </div>

      <div className="[&>*]:text-center pt-8">
        <h3 className="font-birthstone text-gold text-3xl">Pemberkatan</h3>
        <p className="tracking-widest text-sm">
          GEDUNG GEREJA GMIM BAITEL KEMA II
        </p>
      </div>

      <div className="[&>*]:text-center pt-5">
        <h3 className="font-birthstone text-gold text-3xl">Resepsi</h3>
        <p className="tracking-widest text-sm">
          KEMA 2 JAGA 3 KEL. RUNTU - SAMAH
        </p>
      </div>
    </section>
  );
};

export default Header;
