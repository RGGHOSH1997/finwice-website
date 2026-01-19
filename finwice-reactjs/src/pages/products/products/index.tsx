import Products from "@/components/products/Products";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Products || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function ProductsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-11">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Our Products" />
            <h2 className="title-page-title">Our Product</h2>
            <div className="sub-title body-2">
              Discover premium financial tools and resources designed to drive
              your business
              <br />
              forward with confidence and clarity.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Products />
      </div>
    </>
  );
}
