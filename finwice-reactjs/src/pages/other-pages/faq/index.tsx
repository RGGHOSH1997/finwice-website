import Faqs from "@/components/otherPages/Faqs";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Faqs || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function FaqPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-18">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Faqs" />
            <h2 className="title-page-title">FAQs</h2>
            <div className="sub-title body-2">
              Have questions? Explore our Frequently Asked Questions for quick
              answers on
              <br />
              products, services, and expert insights.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Faqs />
      </div>
    </>
  );
}
