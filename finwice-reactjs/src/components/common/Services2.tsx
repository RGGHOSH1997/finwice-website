import { Link } from "react-router-dom";

import { services } from "@/data/services";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Services() {
  return (
    <section
      className="section-services h-2 tf-spacing-31 section-one-page"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-section">
              <div className="heading-section text-center">
                <div className="text-anime-wave-1">
                  <a href="#" className="tag label text-btn-uppercase">
                    Our Services
                  </a>
                </div>
                <h3 className="title-section text-anime-wave-1 mb-12">
                  Solutions for Your Growth
                </h3>
                <div className="sub-title body-2 text-anime-wave-1">
                  Tailored solutions to drive your business growth and success.
                </div>
              </div>
            </div>
            <Swiper
              dir="ltr"
              className="sw-services-list swiper sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={10}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".sspd",
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="services-item">
                    <div className="icon color-primary mb-12">
                      <i className={service.iconClass} />
                    </div>
                    <div className="services-content">
                      <h5>
                        <Link
                          to={`/services-details-1`}
                          className="title-services"
                        >
                          {service.title}
                        </Link>
                      </h5>
                      <div className="sub-title">{service.description}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-layout sspd" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
