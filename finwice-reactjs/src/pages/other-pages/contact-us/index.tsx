import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Contact Us || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function ContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">Contact Us</h2>
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
        <Contact />
        <Map />
        <Locations />
      </div>
    </>
  );
}
