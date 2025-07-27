import { client } from "./lib/client";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    "image": image.asset->url,
    description,
    name,
    price,
    rating,
    ratingCount,
    _id,
    sizes,
    tags,            
  }`;
  const products = await client.fetch(query);
  return products;
};


export const fetchFeaturedProducts = async () => {
  const query = `*[_type == "product"][0...4]{
    _id,
    name,
    price,
    "image": image.asset->url,
    rating,
    ratingCount,
    description
  }`;

  const products = await client.fetch(query);
  return products;
};

export const recommendedProducts = async () => {
  const query = `*[_type == "product"][1...5]{
    _id,
    name,
    price,
    "image": image.asset->url,
    rating,
    ratingCount,
    description
  }`;

  const products = await client.fetch(query);
  return products;
};