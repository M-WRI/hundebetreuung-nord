export const pagePathsQuery = `*[_type == "page"]{ "slug": slug.current }`;

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug
}`;

export const navigationQuery = `
  *[_type == "navigation" && title == "Main Navigation"][0] {
    title,
    items[] {
      _key,
      title,
      slug
    }
  }
`;
