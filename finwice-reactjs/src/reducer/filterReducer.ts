import { products } from "@/data/products";
import type { Product } from "@/types/products";

// Define the shape of the state
export interface State {
  price: [number, number];
  categories: string[];
  filtered: Product[];
  sortingOption: string;
  sorted: Product[];
  currentPage: number;
  itemPerPage: number;
  activeFilterOnSale?: boolean;
}

// Define the possible action types
export type Action =
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "SET_CATEGORIES"; payload: string[] }
  | { type: "SET_FILTERED"; payload: Product[] }
  | { type: "SET_SORTING_OPTION"; payload: string }
  | { type: "SET_SORTED"; payload: Product[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "TOGGLE_FILTER_ON_SALE" }
  | { type: "SET_ITEM_PER_PAGE"; payload: number }
  | { type: "CLEAR_FILTER" };

// Initial state
export const initialState: State = {
  price: [0, 100],
  categories: [],
  sorted: products as Product[],
  sortingOption: "Default",
  filtered: products as Product[],
  currentPage: 1,
  itemPerPage: 6,
  activeFilterOnSale: false,
};

// Reducer function
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_FILTERED":
      return { ...state, filtered: [...action.payload] };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_SORTED":
      return { ...state, sorted: [...action.payload] };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: [0, 100],
        categories: [],
      };
    default:
      return state;
  }
}
