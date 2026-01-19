import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

export default function OtherPagesLayout({ children }) {
  return (
    <>
      <Topbar1 />
      <Header1 />
      {children}
      <Footer1 />
    </>
  );
}
