"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { Product } from "@prisma/client";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface ProductListProps {
  //   InitialProducts: {
  //     id: number;
  //     created_at: Date;
  //     title: string;
  //     price: number;
  //     photo: string;
  //   }[];
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...newProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <div className="py-8 px-3 flex flex-col gap-3">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {isLastPage ? null : (
        <button
          onClick={onLoadMoreClick}
          disabled={isLoading}
          className="primary-btn"
        >
          {isLoading ? "로딩중" : "Load More"}
        </button>
      )}
    </div>
  );
}
