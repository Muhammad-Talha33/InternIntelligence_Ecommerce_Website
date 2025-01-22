import { client } from '../sanity/lib/client'; // Sanity client import karo

export const fetchProductBySlug = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    productName,
    "imageUrl": image.asset->url,
    description,
    price,
    category,
    status
  }`;
  const params = { slug };

  const product = await client.fetch(query, params);
  return product;
};
