import Header5 from "@/components/headers/Header5";
import Services1 from "@/components/common/Services";
import About from "@/components/homes/marketing-consulting/About";
import Brands from "@/components/common/Brands";
import Hero from "@/components/homes/marketing-consulting/Hero";

import Features from "@/components/homes/marketing-consulting/Features";
import Process from "@/components/common/Process2";
import Services from "@/components/common/Services3";
import Faqs from "@/components/homes/marketing-consulting/Faqs";
import Team from "@/components/common/Team";
import Blogs from "@/components/homes/marketing-consulting/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Marketing Consulting || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function MarketingCOnsultingPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header5 />
      <Hero />
      <div className="main-content">
        <About />
        <Brands />
        <Services1 />
        <Features />
        <Process />
        <Services />
        <Faqs />
        <Team />
        <Blogs />
        <Cta />
      </div>
      <Footer2 />
    </>
  );
}
