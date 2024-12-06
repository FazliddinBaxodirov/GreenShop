"use client";
import { ProductType } from "@/components/Products";
import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ContextType {
  category: string | null;
  setCategory: React.Dispatch<SetStateAction<string | null>>;
  tags: string | null;
  setTags: React.Dispatch<SetStateAction<string | null>>;
  size: string | null;
  setSize: React.Dispatch<SetStateAction<string | null>>;
  minPrice: number | null;
  setMinPrice: React.Dispatch<SetStateAction<number | null>>;
  maxPrice: number | null;
  setMaxPrice: React.Dispatch<SetStateAction<number | null>>;
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>>;
  productList: ProductType[];
  setProductList: React.Dispatch<SetStateAction<ProductType[]>>;
}

export const Context = createContext<ContextType>({
  category: null,
  setCategory: () => "",
  tags: null,
  setTags: () => "",
  size: null,
  setSize: () => "",
  minPrice: null,
  setMinPrice: () => "",
  maxPrice: null,
  setMaxPrice: () => "",
  token: null,
  setToken: () => "",
  productList: [],
  setProductList: () => [],
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [tags, setTags] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("user");
      if (storedToken) {
        setToken(JSON.parse(storedToken));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && token) {
      localStorage.setItem("user", JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProductList = localStorage.getItem("productList");
      if (storedProductList) {
        setProductList(JSON.parse(storedProductList));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("productList", JSON.stringify(productList));
    }
  }, [productList]);

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        tags,
        setTags,
        size,
        setSize,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        token,
        setToken,
        productList,
        setProductList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
