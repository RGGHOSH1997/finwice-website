import "../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrolltoToBehaviour";
// Common Components
const RtlToggler = lazy(() => import("@/components/common/RtlToggler"));
const GlobalEffectsProvider = lazy(() =>
  import("@/components/common/GlobalEffectsProvider")
);
const ScrollTop = lazy(() => import("@/components/common/ScrollTop"));
const Context = lazy(() => import("@/context/Context"));

// Modals
const MobileMenu = lazy(() => import("@/components/modals/MobileMenu"));
const Quickview = lazy(() => import("@/components/modals/Quickview"));
const Search = lazy(() => import("@/components/modals/Search"));
const SideOffcanvas = lazy(() => import("@/components/modals/SideOffcanvas"));
const LoginModal = lazy(() => import("@/components/modals/LoginModal"));
const TeamModal = lazy(() => import("@/components/modals/TeamModal"));

// Pages
const HomePage = lazy(() => import("./pages"));

const ConsultingAgencyPage = lazy(() =>
  import("./pages/homes/consulting-agency")
);
const StratagyConsultingPage = lazy(() =>
  import("./pages/homes/strategy-consulting")
);
const DigitalTransformationPage = lazy(() =>
  import("./pages/homes/digital-transformation")
);
const MarketingCOnsultingPage = lazy(() =>
  import("./pages/homes/marketing-consulting")
);
const IndustryConsultingPage = lazy(() =>
  import("./pages/homes/insurance-consultancy")
);
const TaxAdvisoryPage = lazy(() => import("./pages/homes/tax-advisory"));
const ItConsultingPage = lazy(() => import("./pages/homes/it-consulting"));
const HomeRtlPage = lazy(() => import("./pages/homes/home-LTR"));
const HomeOnePage = lazy(() => import("./pages/homes/index-one-page"));
const ConsultingAgencyOnePage = lazy(() =>
  import("./pages/homes/consulting-agency-one-page")
);
const StratagyConsultingOnePage = lazy(() =>
  import("./pages/homes/strategy-consulting-one-page")
);
const DigitalTransformationOnePage = lazy(() =>
  import("./pages/homes/digital-transformation-one-page")
);
const MarketingCOnsultingOnePage = lazy(() =>
  import("./pages/homes/marketing-consulting-one-page")
);
const IndustryConsultingOnePage = lazy(() =>
  import("./pages/homes/insurance-consultancy-one-page")
);
const TaxAdvisoryOnePage = lazy(() =>
  import("./pages/homes/tax-advisory-one-page")
);
const ItConsultingOnePage = lazy(() =>
  import("./pages/homes/it-consulting-one-page")
);
const HomeRtlOnePage = lazy(() => import("./pages/homes/home-LTR-one-page"));

// Services
const ServicesPage1 = lazy(() => import("./pages/services/our-services-1"));
const ServicesPage2 = lazy(() => import("./pages/services/our-services-2"));
const ServiceDetailsPage1 = lazy(() =>
  import("./pages/services/services-details-1")
);
const ServiceDetailsPage2 = lazy(() =>
  import("./pages/services/services-details-2")
);
const ServiceDetailsPage3 = lazy(() =>
  import("./pages/services/services-details-3")
);
const ServicesLayout = lazy(() => import("./pages/services/layout"));

// Case Studies
const CaseStudiesPage1 = lazy(() =>
  import("./pages/case-studies/case-studies-1")
);
const CaseStudiesPage2 = lazy(() =>
  import("./pages/case-studies/case-studies-2")
);
const CaseStudiesDetailsPage = lazy(() =>
  import("./pages/case-studies/case-studies-details")
);
const CaseStudiesLayout = lazy(() => import("./pages/case-studies/layout"));

// Other Pages
const AboutUsPage = lazy(() => import("./pages/other-pages/about-us"));
const OurTeamsPage = lazy(() => import("./pages/other-pages/our-teams"));
const IndustriesPage = lazy(() => import("./pages/other-pages/industries"));
const PricingPage = lazy(() => import("./pages/other-pages/pricing"));
const TestimonialsPage = lazy(() => import("./pages/other-pages/testimonials"));
const GalleryPage = lazy(() => import("./pages/other-pages/gallery"));
const FaqPage = lazy(() => import("./pages/other-pages/faq"));
const CareerPage = lazy(() => import("./pages/other-pages/career"));
const ContactPage = lazy(() => import("./pages/other-pages/contact-us"));
const OtherPagesLayout = lazy(() => import("./pages/other-pages/layout"));
const CommingSoonPage = lazy(() => import("./pages/coming-soon"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

// Products
const ProductsPage = lazy(() => import("./pages/products/products"));
const ProductDetailsPage = lazy(() =>
  import("./pages/products/products-details")
);
const ShoppingCartPage = lazy(() => import("./pages/products/shopping-cart"));
const CheckoutPage = lazy(() => import("./pages/products/check-out"));
const ProductsLayoutPage = lazy(() => import("./pages/products/layout"));

// Blogs
const BlogRightSidebarPage = lazy(() =>
  import("./pages/blogs/blog-right-sidebar")
);
const BlogNoSidebarPage = lazy(() => import("./pages/blogs/blog-no-sidebar"));
const BlogLeftSidebarPage = lazy(() =>
  import("./pages/blogs/blog-left-sidebar")
);
const BlogDetailsPage1 = lazy(() => import("./pages/blogs/blog-details-1"));
const BlogDetailsPage2 = lazy(() => import("./pages/blogs/blog-details-2"));
const BlogLayout = lazy(() => import("./pages/blogs/layout"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            className="position-fixed top-0 start-0 h-100 d-flex justify-content-center align-items-center bg-white"
            style={{ zIndex: 1050, width: "100vw" }}
          >
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="wrapper">
          <Context>
            <RtlToggler />
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />

                <Route
                  path="consulting-agency"
                  element={<ConsultingAgencyPage />}
                />
                <Route
                  path="strategy-consulting"
                  element={<StratagyConsultingPage />}
                />
                <Route
                  path="digital-transformation"
                  element={<DigitalTransformationPage />}
                />
                <Route
                  path="marketing-consulting"
                  element={<MarketingCOnsultingPage />}
                />
                <Route
                  path="insurance-consultancy"
                  element={<IndustryConsultingPage />}
                />
                <Route path="tax-advisory" element={<TaxAdvisoryPage />} />
                <Route path="it-consulting" element={<ItConsultingPage />} />
                <Route path="home-LTR" element={<HomeRtlPage />} />

                <Route path="index-one-page" element={<HomeOnePage />} />
                <Route
                  path="consulting-agency-one-page"
                  element={<ConsultingAgencyOnePage />}
                />
                <Route
                  path="strategy-consulting-one-page"
                  element={<StratagyConsultingOnePage />}
                />
                <Route
                  path="digital-transformation-one-page"
                  element={<DigitalTransformationOnePage />}
                />
                <Route
                  path="marketing-consulting-one-page"
                  element={<MarketingCOnsultingOnePage />}
                />
                <Route
                  path="insurance-consultancy-one-page"
                  element={<IndustryConsultingOnePage />}
                />
                <Route
                  path="tax-advisory-one-page"
                  element={<TaxAdvisoryOnePage />}
                />
                <Route
                  path="it-consulting-one-page"
                  element={<ItConsultingOnePage />}
                />
                <Route path="home-LTR-one-page" element={<HomeRtlOnePage />} />

                <Route
                  path="our-services-1"
                  element={
                    <ServicesLayout>
                      {" "}
                      <ServicesPage1 />
                    </ServicesLayout>
                  }
                />
                <Route
                  path="our-services-2"
                  element={
                    <ServicesLayout>
                      <ServicesPage2 />
                    </ServicesLayout>
                  }
                />
                <Route
                  path="services-details-1"
                  element={
                    <ServicesLayout>
                      <ServiceDetailsPage1 />
                    </ServicesLayout>
                  }
                />
                <Route
                  path="services-details-2"
                  element={
                    <ServicesLayout>
                      <ServiceDetailsPage2 />
                    </ServicesLayout>
                  }
                />
                <Route
                  path="services-details-3"
                  element={
                    <ServicesLayout>
                      <ServiceDetailsPage3 />
                    </ServicesLayout>
                  }
                />

                <Route
                  path="case-studies-1"
                  element={
                    <CaseStudiesLayout>
                      <CaseStudiesPage1 />
                    </CaseStudiesLayout>
                  }
                />
                <Route
                  path="case-studies-2"
                  element={
                    <CaseStudiesLayout>
                      <CaseStudiesPage2 />
                    </CaseStudiesLayout>
                  }
                />
                <Route
                  path="case-studies-details"
                  element={
                    <CaseStudiesLayout>
                      <CaseStudiesDetailsPage />
                    </CaseStudiesLayout>
                  }
                />

                <Route
                  path="about-us"
                  element={
                    <OtherPagesLayout>
                      <AboutUsPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="our-teams"
                  element={
                    <OtherPagesLayout>
                      <OurTeamsPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="industries"
                  element={
                    <OtherPagesLayout>
                      <IndustriesPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="pricing"
                  element={
                    <OtherPagesLayout>
                      <PricingPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="testimonials"
                  element={
                    <OtherPagesLayout>
                      <TestimonialsPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="gallery"
                  element={
                    <OtherPagesLayout>
                      <GalleryPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="faq"
                  element={
                    <OtherPagesLayout>
                      <FaqPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="career"
                  element={
                    <OtherPagesLayout>
                      <CareerPage />
                    </OtherPagesLayout>
                  }
                />
                <Route
                  path="contact-us"
                  element={
                    <OtherPagesLayout>
                      <ContactPage />
                    </OtherPagesLayout>
                  }
                />
                <Route path="coming-soon" element={<CommingSoonPage />} />
                <Route path="404" element={<NotFoundPage />} />

                <Route
                  path="products"
                  element={
                    <ProductsLayoutPage>
                      {" "}
                      <ProductsPage />
                    </ProductsLayoutPage>
                  }
                />
                <Route
                  path="products-details/:id"
                  element={
                    <ProductsLayoutPage>
                      <ProductDetailsPage />
                    </ProductsLayoutPage>
                  }
                />
                <Route
                  path="shopping-cart"
                  element={
                    <ProductsLayoutPage>
                      <ShoppingCartPage />
                    </ProductsLayoutPage>
                  }
                />
                <Route
                  path="check-out"
                  element={
                    <ProductsLayoutPage>
                      <CheckoutPage />
                    </ProductsLayoutPage>
                  }
                />

                <Route
                  path="blog-right-sidebar"
                  element={
                    <BlogLayout>
                      <BlogRightSidebarPage />
                    </BlogLayout>
                  }
                />
                <Route
                  path="blog-left-sidebar"
                  element={
                    <BlogLayout>
                      <BlogLeftSidebarPage />
                    </BlogLayout>
                  }
                />
                <Route
                  path="blog-no-sidebar"
                  element={
                    <BlogLayout>
                      <BlogNoSidebarPage />
                    </BlogLayout>
                  }
                />
                <Route
                  path="blog-details-1/:id"
                  element={
                    <BlogLayout>
                      <BlogDetailsPage1 />
                    </BlogLayout>
                  }
                />
                <Route
                  path="blog-details-2/:id"
                  element={
                    <BlogLayout>
                      <BlogDetailsPage2 />
                    </BlogLayout>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <MobileMenu />
            <Quickview />
            <LoginModal />
            <Search />
            <TeamModal />
            <SideOffcanvas />
            <ScrollTop />{" "}
          </Context>
          <GlobalEffectsProvider />
        </div>
        <ScrollTopBehaviour />
      </Suspense>
    </>
  );
}

export default App;
