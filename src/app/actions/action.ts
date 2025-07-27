import { Product } from "../components/Products";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex(
    (item) => item.name === product.name
  );

  if (existingProductIndex > -1) {
    cart[existingProductIndex].price += 1;
  } else {
    cart.push({
      ...product,
      inventory: 1,
    })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId: string) =>{
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item.name !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const productIndex = cart.findIndex(item => item.name === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}