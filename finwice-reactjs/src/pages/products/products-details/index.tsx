import { Link, useParams } from "react-router-dom";

import Details from "@/components/products/Details";
import RelatedProducts from "@/components/products/RelatedProducts";

import { products } from "@/data/products";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Products Details || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default async function ProductDetailsPage() {
  let params = useParams();
  const id = params.id;

  const product =
    products.filter((p) => String(p.id) === String(id))[0] || products[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-11">
        <div className="tf-container">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link to={`/`} className="caption-1 home">
                Homepage
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <Link to={`/`} className="caption-1 home">
                Shop
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">{product.title}</span>
            </div>
            <h2 className="title-page-title">Product Details</h2>
            <div className="sub-title body-2">
              Explore in-depth specifications and unique features of our
              financial tools, crafted
              <br />
              to empower your business decisions and streamline operations.
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="main-content">
        <Details product={product} />
        <RelatedProducts />
      </div>
    </>
  );
}
