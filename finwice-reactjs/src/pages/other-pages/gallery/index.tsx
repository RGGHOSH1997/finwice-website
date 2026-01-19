import Gallery from "@/components/otherPages/Gallery";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Gallery || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function GalleryPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-10">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Gallery" />
            <h2 className="title-page-title">Gallery</h2>
            <div className="sub-title body-2">
              Explore our visual showcase of team achievements, client success
              stories, and key
              <br />
              moments that highlight our commitment to excellence.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <Gallery />
      </div>
    </>
  );
}
