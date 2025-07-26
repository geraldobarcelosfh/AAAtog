import { defineField, defineType } from "sanity"

export const schemaTypes = [
  defineType({
    name: "author",
    type: "document",
    title: "Author",
    fields: [
      defineField({ name: "name", type: "string", title: "Name" }),
      defineField({ name: "bio", type: "text", title: "Bio" }),
      defineField({ name: "image", type: "image", title: "Image" }),
    ],
  }),
  defineType({
    name: "post",
    type: "document",
    title: "Post",
    fields: [
      defineField({ name: "title", type: "string", title: "Title" }),
      defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "title", maxLength: 96 } }),
      defineField({ name: "excerpt", type: "text", title: "Excerpt" }),
      defineField({ name: "body", type: "array", title: "Body", of: [{ type: "block" }] }),
      defineField({ name: "publishedAt", type: "datetime", title: "Published at" }),
      defineField({ name: "mainImage", type: "image", title: "Main image" }),
      defineField({ name: "category", type: "string", title: "Category" }),
      defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    ],
  }),
]
