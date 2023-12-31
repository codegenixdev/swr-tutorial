import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

import { Cart } from "@/app/types/cart";
import { Post } from "@/app/types/post";
import { Product } from "@/app/types/product";
import { Todo } from "@/app/types/todo";
import { User } from "@/app/types/user";
import { logger } from "@/app/utils/logger";

export function useUser() {
  return useSWR<User>("/user");
}

export function useCart() {
  const { data } = useUser();

  return useSWR<Cart>(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products", { use: [logger] });
}

export function usePosts(pageIndex: number) {
  return useSWR<Post[]>(`/posts?_limit=3&_page=${pageIndex}`);
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex + 1}&_limit=3`;
  };

  return useSWRInfinite<Todo[]>(getKey);
}
