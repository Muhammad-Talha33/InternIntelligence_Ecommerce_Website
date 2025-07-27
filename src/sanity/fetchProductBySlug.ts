import { client } from '../sanity/lib/client'; // Sanity client import karo


export async function fetchProductById(id: string) {
  const query = `
    *[_type == "product" && _id == $id][0] {
      _id,
      name,
      price,
      description,
      category,
      status,
      inventory,
      colors,
      sizes,
      tags,
      "image": image.asset->url
    }
  `;
  const product = await client.fetch(query, { id });
  return product;
}
