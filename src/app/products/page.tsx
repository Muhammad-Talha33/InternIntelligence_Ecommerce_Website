import React, { Suspense } from "react";

import Products from "../components/Products";

export default function page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading products...</div>}>
      <div>
        <Products />
      </div>
    </Suspense>
  );
}
