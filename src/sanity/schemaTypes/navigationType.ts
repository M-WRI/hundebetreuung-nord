import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";
import { navigationItemType } from "./navigationItemType";

export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "navigationItem" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
