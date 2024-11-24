export const pagePathsQuery = `*[_type == "page"]{ "slug": slug.current }`;

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug
}`;
