import CaseStudies2 from "@/components/case-studies/CaseStudies2";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Case Studies 02 || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function CaseStudiesPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-15">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Case Studies" />
            <h2 className="title-page-title">Case Studies</h2>
            <div className="sub-title body-2">
              Explore success stories from businesses that achieved growth
              through our tailored
              <br />
              strategies and solutions.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <CaseStudies2 />
      </div>
    </>
  );
}
