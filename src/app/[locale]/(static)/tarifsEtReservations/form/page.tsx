"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import style from "./style.module.css";
import { useSearchParams } from "next/navigation";
import Links from "@/compoments/links";
import Image from "next/image";

export default function page() {
  const params = useSearchParams();
  let redirect: string;
  if (params.get("days"))
    redirect = `/tarifsEtReservations/form/inscription?days=${params.get(
      "days"
    )}`;
  else redirect = "/tarifsEtReservations/form/inscription";
  return (
    <>
      <HeaderForm />
      <main className={style.main}>
        <h1 className={style.h1}>Avez-vous appelé l'école au préalable ?</h1>
        <div className={style.btns}>
          <Links href={redirect} className={style.btn}>
            Oui
          </Links>
          <Links
            href={"/reservationObligatoireParTelephone"}
            className={style.btn}
          >
            Non
          </Links>
        </div>
        <a href="tel:+33628051411">
          <div className={style.tel}>
            <Image
              src={"/contact/tel.png"}
              width={150}
              height={150}
              alt="Logo d un téléphone stylisé coco surf"
            />
            <span style={{textDecorationColor:"black",textDecoration:"underline"}}>Tel : +33 (0)6 28 05 14 11</span>
          </div>
        </a>
      </main>
      <Footer />
    </>
  );
}
