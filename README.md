# **General-E-Commerce Website**

## **Overview**
This project is an e-commerce platform designed to provide a seamless online shopping experience. It includes features like product browsing, a dynamic search bar, add-to-cart functionality, and user-friendly navigation. The project is built using **Next.js** for the frontend, **Sanity CMS** for backend data management, and **Tailwind CSS** for responsive design.

---

## **Features**
1. **Dynamic Product Listing:**  
   Products are fetched from **Sanity CMS** and displayed with relevant details, including name, category, price, and availability.  
2. **Add to Cart:**  
   Users can add products to the cart, which updates dynamically and displays selected items in real-time.  
3. **Search Functionality:**  
   A search bar allows users to filter products by name or category.  
4. **Responsive Design:**  
   Fully optimized for all devices using **Tailwind CSS**.  
5. **Navigation:**  
   Includes easy navigation with categories like Men, Women, Kids, and Sale.  
6. **Lighthouse Performance Scores:**  
   - Accessibility: **94**  
   - Best Practices: **100**  
   - SEO: **83**  
   - Performance: **35**  

---

## **Folder Structure**
The project follows a well-organized folder structure for scalability and maintainability:

```
.
├── public/
│   ├── images/            # Static images for the website
│   ├── favicon.ico        # Website favicon
│   └── ...                # Other public assets
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout component
│   │   ├── page.tsx       # Homepage component
│   │   ├── products/      # Products page components
│   │   ├── product/       # Individual product details page
│   │   ├── cart/          # Cart page components
│   │   └── ...            # Other pages
│   ├── components/
│   │   ├── Header.tsx     # Header component with navigation and search bar
│   │   ├── Footer.tsx     # Footer component
│   │   └── Products.tsx   # Products listing component
│   ├ 
│   ├── sanity/            # Sanity CMS configurations and queries
│   │   ├── schema/        # Sanity schema definitions
│   │   ├── fetchProducts.ts # API function to fetch all products
│   │   └── ...            # Other Sanity configurations
│   ├── styles/            # Tailwind CSS styles and global CSS
│   └── utils/             # Utility functions
├── .env                   # Environment variables
├── README.md              # Project documentation
├── package.json           # Project dependencies
└── ...                    # Other configuration files
```

---

## **Steps Taken to Build and Integrate Components**
### **Frontend Development**
- **Technology Used:**  
  Built using **Next.js** and styled with **Tailwind CSS** for responsiveness.  
- **Pages Implemented:**  
  - `Homepage`: Features a hero section and product highlights.  
  - `Products Page`: Displays products dynamically fetched from Sanity CMS.  
  - `Product Details Page`: Shows detailed information for a single product.  
  - `Cart Page`: Allows users to review selected items.  

### **Sanity CMS Integration**
- Created and managed the product schema using **Sanity CMS**.
- Added fields such as product name, category, price, inventory, colors, status, description, and slug.

### **Functionalities**
1. Products fetched dynamically using API functions.  
2. Real-time product filtering based on search input.  
3. Dynamic cart functionality with product details displayed.  

---

## **Future Enhancements**
1. **Authentication:**  
   Integrate **Sign In/Join Us** functionality with user authentication systems like **OAuth** or **JWT**.
2. **Performance Optimization:**  
   Improve Lighthouse performance score by optimizing images, reducing unused JavaScript, and enabling lazy loading.  
3. **Error Handling:**  
   Add robust error handling for API failures and network issues.  
4. **Payment Gateway:**  
   Plan to integrate payment methods like **Stripe**, **Easypaisa**, and **JazzCash**.  

---

## **Conclusion**
This project serves as a user-friendly, scalable e-commerce platform. Despite some challenges during development, it successfully meets its core objectives. The experience has been both educational and inspiring, motivating further exploration of more complex projects in the future.  

 

