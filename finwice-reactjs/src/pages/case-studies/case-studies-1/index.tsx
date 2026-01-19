import CaseStudies1 from "@/components/case-studies/CaseStudies1";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Case Studies 01 || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function CaseStudiesPage1() {
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
        <CaseStudies1 />
      </div>
    </>
  );
}
