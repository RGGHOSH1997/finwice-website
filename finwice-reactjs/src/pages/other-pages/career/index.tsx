import About from "@/components/otherPages/About";
import Career from "@/components/otherPages/Career";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Career || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function CareerPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-19">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Career" />
            <h2 className="title-page-title">Career</h2>
            <div className="sub-title body-2">
              Join our team of industry experts and make a meaningful impact.
              Discover
              <br />
              opportunities to grow your career with us in a dynamic &amp;
              rewarding environment.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <About />
        <Career />
      </div>
    </>
  );
}
