import Checkout from "@/components/products/Checkout";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Checkout || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function CheckoutPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-20">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Check Out" />
            <h2 className="title-page-title">Check Out</h2>
            <div className="sub-title body-2">
              Finalize your purchase with our secure and seamless checkout
              process, designed
              <br />
              for quick and easy transactions.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content position-relative">
        <Checkout />
      </div>
    </>
  );
}
