import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";

import "photoswipe/dist/photoswipe.css";
import type React from "react";
export default function ProductsLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar1 />
      <Header1 />
      {children}
      <Footer1 />
    </>
  );
}
