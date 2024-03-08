import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Header = dynamic(() => import("@/compoments/inscription/header/header"));
const Footer = dynamic(() => import("@/compoments/footer/footer"));
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
