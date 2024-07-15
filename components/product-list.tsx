"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { Product } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
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
  const trigger = useRef<HTMLSpanElement>(null);
  // trigger.current = 2;
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.observe(trigger.current);
          setIsLoading(true);
          const newProducts = await getMoreProducts(page + 1);
          if (newProducts.length !== 0) {
            setPage((prev) => prev + 1);
            setProducts((prev) => [...prev, ...newProducts]);
          } else {
            setIsLastPage(true);
          }
          setIsLoading(false);
        }
      },
      { threshold: 1.0, rootMargin: "0px 0px -100px 0px" }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page]);
  // const onLoadMoreClick = async () => {
  //   setIsLoading(true);
  //   const newProducts = await getMoreProducts(page + 1);
  //   if (newProducts.length !== 0) {
  //     setPage((prev) => prev + 1);
  //     setProducts((prev) => [...prev, ...newProducts]);
  //   } else {
  //     setIsLastPage(true);
  //   }
  //   setIsLoading(false);
  // };
  return (
    <div className="py-8 px-3 flex flex-col gap-3">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}

      {!isLastPage ? (
        <span
          ref={trigger}
          style={{
            marginTop: `${(page + 1) * 900}vh`,
          }}
          className="w-52 mb-96 primary-btn"
        >
          {isLoading ? "로딩중" : "Load More"}
        </span>
      ) : null}
    </div>
  );
}
