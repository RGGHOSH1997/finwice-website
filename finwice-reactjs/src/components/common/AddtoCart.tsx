import { useContextElement } from "@/context/Context";
import type { Product } from "@/types/products";

export default function AddtoCart({ product }: { product: Product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (product.id) {
          addProductToCart(product.id);
        }
      }}
      className="tf-btn bg-on-suface-container style-3 text-center w-full"
    >
      <span>
        {isAddedToCartProducts(product.id) ? "Already Added" : "Add to Cart"}
      </span>
    </a>
  );
}
