import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-70px)] w-screen grid grid-cols-2 px-4">
      <div className="flex items-center justify-center">
        <Image
          src="/hundebetreuung_nord_logo_blau.svg"
          alt="hunde betreuung nord hamburg logo"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full h-full flex items-center justify-center bg-primary-500 rounded-xl p-4">
        <h2 className="text-white text-center font-normal">
          Liebevolle Betreuung in Hamburg.
        </h2>
      </div>
    </section>
  );
}
