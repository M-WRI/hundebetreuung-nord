import Image from "next/image";

export default function Page() {
  return (
    <>
      <section
        id="home"
        className="min-h-[calc(100vh-70px)] grid grid-cols-2 gap-4 w-screen px-4 pb-4"
      >
        <div className="flex flex-col gap-8 items-center justify-center">
          <Image
            src="/hundebetreuung_nord_logo_blau.svg"
            alt="hunde betreuung nord hamburg logo"
            width={300}
            height={300}
          />
        </div>
        <div
          id="service"
          className="rounded-xl bg-primary-500 text-white flex flex-col gap-4 p-8 h-fit my-auto"
        >
          <h2 className="text-white text-center font-normal">
            Liebevolle Betreuung in Hamburg.
          </h2>
          <p className="text-white text-center">
            Sie sind berufstätig, wollen Ihren Hund tagsüber in guten Händen
            wissen und möchten ihm dabei Abwechslung und Freilauf gönnen? Dann
            entscheiden Sie sich für unsere Tagesbetreuung. Wir bieten auf
            unserem Hundeplatz in Ammersbek (zwischen Hamburg und Ahrensburg
            gelegen) eine artgerechte, beaufsichtigte Gruppenbetreuung. Ihr Hund
            kann sich im Rudel nach Herzenslust austoben und ganz nebenbei auch
            noch sein natürliches Sozialverhalten stärken. Bei Bedarf bieten wir
            auch Übernachtungen in unserem Zuhause an. Für uns ist es
            selbstverständlich, Ihren Liebling individuell und liebevoll zu
            betreuen. Das beinhaltet sowohl eine ausgewogene Ernährung wie auch
            eine speziell auf Ihren Hund zugeschnittene Gestaltung des Tages mit
            Ruhezeiten, Spiel- und Streicheleinheiten.
          </p>
        </div>
      </section>
      <section className="p-4">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/pickup.svg"
              alt="abhol service"
              width={100}
              height={100}
            />
            <h4>Abholservice</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/daycare.svg"
              alt="tages betreuung"
              width={100}
              height={100}
            />
            <h4>Tages Betreuung</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/overnight.svg"
              alt="über nacht"
              width={100}
              height={100}
            />
            <h4>Übernachtung</h4>
          </div>
        </div>
      </section>
    </>
  );
}
