import { useContextElement } from "@/context/Context";
import type { Product } from "@/types/products";

export default function AddToQuickview({ product }: { product: Product }) {
  const { setQuickViewItem } = useContextElement();
  return (
    <>
      <div className="icon icon-2">
        <a
          href="#canvnasQuickview"
          data-bs-toggle="offcanvas"
          onClick={() => {
            setQuickViewItem(product);
          }}
        >
          <i className="icon-Eye" />
        </a>
      </div>
    </>
  );
}
