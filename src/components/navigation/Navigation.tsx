import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { navigationQuery } from "@/sanity/lib/queries";

interface NavigationItem {
  _key: string;
  title: string;
  slug: string;
}

interface NavigationData {
  title: string;
  items: NavigationItem[];
}

export const Navigation = async () => {
  const navigation = await sanityFetch<NavigationData>({
    query: navigationQuery,
  });

  return (
    <nav className="sticky top-0 left-0 right-0 z-10 bg-white flex items-center justify-between font-primary p-4">
      <Image
        src="/hundebetreuung_nord_logo_hund.svg"
        alt="Hundebetreuung Nord"
        width={30}
        height={30}
      />
      <ul className="flex gap-4 text-primary-500">
        {navigation.items.map((item) => (
          <li key={item._key}>
            <a href={`/${item.slug}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
