import { Link } from "react-router-dom";

import { taxProjects } from "@/data/caseStudies";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CaseStudies() {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);

  // Clear and reassign refs on re-render
  projectRefs.current = [];
  imageRefs.current = [];

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleInteraction = (index) => () => {
      projectRefs.current.forEach((el) => el.classList.remove("active"));
      imageRefs.current.forEach((el) => el.classList.remove("active"));

      projectRefs.current[index]?.classList.add("active");
      imageRefs.current[index]?.classList.add("active");
    };

    projectRefs.current.forEach((item, index) => {
      const handler = handleInteraction(index);

      item.addEventListener("mouseenter", handler);
      item.addEventListener("click", handler);

      item._handler = handler;
    });

    return () => {
      projectRefs.current.forEach((item) => {
        item.removeEventListener("mouseenter", item._handler);
        item.removeEventListener("click", item._handler);
      });
    };
  }, []);
  return (
    <section
      className="section-project h-7 tf-spacing-2 section-one-page"
      id="project"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  Our Featured Projects
                </a>
              </div>
              <h3 className="text-anime-wave-1 mb-12">Success Stories</h3>
              <div className="sub-title body-2 color-on-suface-container text-anime-wave-1">
                Discover how we’ve helped clients achieve remarkable results.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-project-inner">
        <div className="list-case">
          <Swiper
            dir="ltr"
            className="sw-case-studies swiper sw-layout"
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {taxProjects.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className={`project-item style-2${
                    item.active ? " active" : ""
                  }`}
                  ref={addToProjectRefs}
                >
                  <div className="project-content rtl-text-start-3">
                    <h5>
                      <Link to={`/case-studies-details`}>{item.title}</Link>
                    </h5>
                    <p className="label text-btn-uppercase">{item.label}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="list-image-project">
          {taxProjects.map((project, index) => (
            <div
              className={`image-project ${project.active ? "active" : ""}`}
              key={index}
              ref={addToImageRefs}
            >
              <img
                src={project.imgSrc}
                alt=""
                className="lazyload"
                width={1920}
                height={634}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
