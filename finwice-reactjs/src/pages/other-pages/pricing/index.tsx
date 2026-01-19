import Services from "@/components/common/Services3";
import Pricing from "@/components/otherPages/Pricing";
import Testimonials from "@/components/otherPages/Testimonials";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Pricing || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function PricingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-9">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Pricing" />
            <h2 className="title-page-title">Our Pricing</h2>
            <div className="sub-title body-2">
              Discover transparent and competitive pricing plans, tailored to
              meet the needs of
              <br />
              businesses of all sizes. Invest in success with confidence.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Pricing />
        <Services />
        <Testimonials />
      </div>
    </>
  );
}
