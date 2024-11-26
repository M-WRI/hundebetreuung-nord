import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./pageType";
import { navigationType } from "./navigationType";
import { navigationItemType } from "./navigationItemType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, navigationType, navigationItemType],
};
