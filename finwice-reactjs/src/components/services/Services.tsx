import { Link } from "react-router-dom";

import { sectionServices } from "@/data/services";
import { sanitizeHTML } from "@/utils/sanitize";

export default function Services() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div className="list-section-services-item tf-spacing-2">
            {sectionServices.map((service, index) => (
              <div className="section-services-item style-border" key={index}>
                <div className="image tf-animate-1">
                  <Link to={`/services-details-1`} className="link" />
                  <img
                    src={service.imgSrc}
                    alt=""
                    className="lazyload"
                    width={590}
                    height={590}
                  />
                </div>
                <div className="services-content">
                  <div className="heading">
                    <h3 className="wow fadeInUp">
                      <Link
                        to={`/services-details-1`}
                        className="name-services"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <div
                      className="sub-name body-2 wow fadeInUp"
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(service.description),
                      }}
                    ></div>
                  </div>
                  <div className="benefit-lists">
                    {service.benefits.map((benefit, bIndex) => (
                      <div className="benefit-items" key={bIndex}>
                        <div className="icon wow fadeInUp">
                          <i className="icon-checkbox" />
                        </div>
                        <div
                          className="title wow fadeInUp"
                          data-wow-delay=".1s"
                        >
                          {benefit}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="wow fadeInUp">
                    <Link
                      to={`/services-details-1`}
                      className="tf-btn style-1 bg-on-suface-container"
                    >
                      <span> View Services </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
