import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex items-center justify-center w-screen px-4">
      <div className="flex flex-col gap-8 items-center justify-center">
        <Image
          src="/hundebetreuung_nord_logo_blau.svg"
          alt="hunde betreuung nord hamburg logo"
          width={300}
          height={300}
        />
        <h2 className="text-primary-500 text-center font-bold">
          Liebevolle Betreuung in Hamburg.
        </h2>
      </div>
    </section>
  );
}
