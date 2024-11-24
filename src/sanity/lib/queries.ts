// Query to fetch all page slugs
export const pagePathsQuery = `*[_type == "page"]{ "slug": slug.current }`;

// Query to fetch page data by slug
export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug
}`;
