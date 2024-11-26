import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Navigation } from "@/components/navigation";

const sofiaProSoft = localFont({
  src: [
    {
      path: "fonts/SofiaProSoftLight.woff",
      weight: "300",
    },
    {
      path: "fonts/SofiaProSoftRegular.woff",
      weight: "400",
    },
    {
      path: "fonts/SofiaProSoftMedium.woff",
      weight: "500",
    },
    {
      path: "fonts/SofiaProSoftBold.woff",
      weight: "700",
    },
  ],
  variable: "--font-sofia-pro-soft",
});

export const metadata: Metadata = {
  title: "Hundebetreuung Nord | Hamburg",
  description: "Ihre Hundebetreuung in und um Hamburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${sofiaProSoft.variable}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
