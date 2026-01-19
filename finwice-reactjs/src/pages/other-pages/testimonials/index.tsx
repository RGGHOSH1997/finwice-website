import Contact from "@/components/common/Contact";
import Testimonials2 from "@/components/otherPages/Testimonials2";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Testimonials || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function TestimonialsPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-17">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Testimonials" />
            <h2 className="title-page-title">Testimonials</h2>
            <div className="sub-title body-2">
              Hear from our clients and discover how our financial solutions
              have made a
              <br />
              positive impact on their businesses and success stories.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Testimonials2 />
        <Contact />
      </div>
    </>
  );
}
