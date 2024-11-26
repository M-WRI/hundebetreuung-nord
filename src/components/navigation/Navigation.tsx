import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { navigationQuery } from "@/sanity/lib/queries";
import { NavigationWrapper } from "./NavigationWrapper";
import { NavigationList } from "../NavigationList";

export interface NavigationItem {
  _key: string;
  title: string;
  slug: string;
}

export interface NavigationData {
  title: string;
  items: NavigationItem[];
}

export const Navigation = async () => {
  const navigation = await sanityFetch<NavigationData>({
    query: navigationQuery,
  });

  return (
    <NavigationWrapper
      navigation={{
        screen: <NavigationList navigation={navigation} />,
        mobile: <NavigationList navigation={navigation} />,
      }}
    />
  );
};
