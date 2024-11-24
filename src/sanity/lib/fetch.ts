import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params,
}: {
  query: string;
  params?: any;
}): Promise<T> {
  return client.fetch(query, params);
}
