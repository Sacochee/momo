
import Image from "next/image";
import { useTranslations } from "next-intl";
import style from "./logement.module.css";
import Btn from "@/compoments/utilities/button/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import dynamic from "next/dynamic";
import data from "@/../public/logement/data.json"

const Slider = dynamic(()=>import("@/compoments/utilities/slider/SliderImage"),{ssr:false})

export default function Page() {
  const t = useTranslations("logement");
  return (
    <>
    <Header/>
    <main className={style.main}>
      <Slider data={data}/>
      <Image
        src={"/Icons/palmierGif2.gif"}
        width={205}
        height={204}
        alt="gif d un palmier stylisé Coco Surf"
      />
      <h1 className={style.h1}>{t("h1")}</h1>
      <div className={style.color}></div>
      <ul className={style.ul}>
        <li className={style.li}>{t("p1")}</li>
        <li className={style.li}>
          {t("p2")}
          <strong>{t("s1")}</strong>
        </li>
        <li className={style.li}>
          {t("p3")}
          <strong>{t("s2")}</strong>
          {t("p4")}
          <strong>{t("s3")}</strong>
          {t("p5")}
        </li>
        <li className={style.li}>{t("p6")}</li>
        <li className={style.li}>
        <Btn to="https://vacances-andretrigano.com/camping/charente-maritime/domaine-de-montcalm-les-mathes" txt={t("btn1")} outside={true}/>
        </li>
      </ul>
      <h2 className={style.h2}>{t("h2")}</h2>
      <div className={style.color}></div>
      <ul className={style.ul}>
        <li className={style.li}>{t("p7")}</li>
        <li className={style.li}>{t("p8")}</li>
        <li className={style.li}>
            <Btn to="https://www.azureva-vacances.com/fr/village-club-hebergement-restauration/ronce-les-bains" txt={t("btn2")} outside={true}/>
        </li>
      </ul>
    </main>
    <Footer/>
    </>
  );
}
