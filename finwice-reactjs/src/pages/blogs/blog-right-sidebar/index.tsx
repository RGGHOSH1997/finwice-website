import Blogs1 from "@/components/blogs/Blogs1";

import Breadcumb from "@/components/common/Breadcumb";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog Right Sidebar || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function BlogRightSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-title style-1 bg-img-1">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="Blog" />
            <h2 className="title-page-title">Blog Right Sidebar</h2>
            <div className="sub-title body-2">
              Stay updated with insights, tips, and trends in finance and
              business strategy—
              <br />
              curated by our experts to keep you informed and ahead.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-1">
        <Blogs1 />
      </div>
    </>
  );
}
