import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import style from "./style.module.css";
import Links from "@/compoments/utilities/links/links";
import dynamic from "next/dynamic";
import SkullTel from "@/compoments/utilities/telephone/skull";

const Contact = dynamic(() => import("@/compoments/utilities/telephone/tel"), {
  loading: () => <SkullTel />,
});

export default function page() {
  return (
    <>
      <HeaderForm />
      <main className={style.main}>
        <h1 className={style.h1}>Avez-vous appelé l'école au préalable ?</h1>
        <div className={style.btns}>
          <Links
            href={"/tarifsEtReservations/form/inscription"}
            className={style.btn}
          >
            Oui
          </Links>
          <Links href={"/telephoneUniquement"} className={style.btn}>
            Non
          </Links>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
