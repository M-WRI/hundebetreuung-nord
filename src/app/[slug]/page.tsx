import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { pagePathsQuery, pageQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "@sanity/client";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const pages = await client.fetch(pagePathsQuery);
  return pages.map((page: { slug: string }) => ({
    slug: page.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await sanityFetch<SanityDocument>({
    query: pageQuery,
    params: { slug: params.slug },
  });

  if (!page) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <div></div>
    </main>
  );
};

export default Page;
