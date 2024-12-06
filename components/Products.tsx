"use client";
import { useAxios } from "@/hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Context } from "@/contexxt/Context";
import Image from "next/image";
import { Pagination } from "antd";

export interface ProductType {
  product_id: string;
  basket: boolean;
  cost: number;
  count?: number;
  discount?: number;
  image_url: string[];
  liked: boolean;
  product_description: string;
  product_name: string;
  short_description?: string;
  size?: string[];
  tags?: string[];
}

interface SortType {
  sort: boolean;
}

const Products: React.FC<SortType> = ({ sort }) => {
  const { category, tags, minPrice, maxPrice, size, token,setProductList } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", category, tags, minPrice, maxPrice, size],
    queryFn: () =>
      useAxios()
        .get("/products", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          params: {
            page: currentPage, 
            limit: pageSize,
            category,
            size,
            tags,
            max_price: maxPrice,
            min_price: minPrice,
          },
        })
        .then((res) => (res.data.products ? res.data.products : [])),
    enabled: true,
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = products.slice(startIndex, endIndex);
  useEffect(() => {
    setProductList(products);
  }, [products, setProductList]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap justify-between pt-[30px] gap-[20px]">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-[80vh]">
          <Image
            src={"/Loading.png"}
            alt="Loading img"
            width={300}
            height={300}
            priority
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ) : sort ? (
        [...paginatedProducts]
          .sort((a: ProductType, b: ProductType) =>
            a.product_name.localeCompare(b.product_name)
          )
          .map((item: ProductType) => (
            <ProductCard item={item} key={item.product_id} />
          ))
      ) : (
        paginatedProducts.map((item: ProductType) => (
          <ProductCard item={item} key={item.product_id} />
        ))
      )}
      <div className="w-full flex justify-end mt-[40px]">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
