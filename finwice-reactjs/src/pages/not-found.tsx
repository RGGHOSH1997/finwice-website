import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Page Not Found || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function NotFoundPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="main-content">
        <div className="wg-404">
          <div className="inner-404">
            <div className="tf-container position-relative">
              <div className="row">
                <div className="col-12">
                  <div className="content-404">
                    <div className="text-oops">Oops</div>
                    <h3>Something is Missing....</h3>
                    <h6 className="text">
                      The page you are looking for cannot be found. take a break
                      before trying again
                    </h6>
                    <Link to={`/`} className="tf-btn bg-white style-1">
                      <span>Back To Homepage</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
