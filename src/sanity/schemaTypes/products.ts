export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "discountPercentage",
      title: "Discount",
      type: "number",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName", // Slug productName se generate hoga
        maxLength: 96, // Slug ka max length
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "priceWithoutDiscount",
      title: "Without Discount",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "ratingCount",
      title: "Rating Count",
      type: "number",
      of: [{ type: "string" }],
    },

    {
      name: "tags",
      title: "Tags",
      type: "string",
    },

    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "number",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image", // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
