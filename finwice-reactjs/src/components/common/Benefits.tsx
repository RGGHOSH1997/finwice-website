import { boxIconItems } from "@/data/benefits";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Benefits() {
  return (
    <section className="section-benefit h-2 tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <Swiper
              className="sw-icon-list swiper sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".sbp1",
              }}
            >
              {boxIconItems.map((item, index) => (
                <SwiperSlide className="swiper-slide mb-2" key={index}>
                  <div className="box-icon">
                    <div className="icon color-primary">
                      <i className={item.iconClass} />
                    </div>
                    <div className="box-content">
                      <h5>
                        <a href="#" className="title-box">
                          {item.title}
                        </a>
                      </h5>
                      <div className="sub-title">{item.description}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-layout mt-5 sbp1 flex justify-content-center spe2"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
