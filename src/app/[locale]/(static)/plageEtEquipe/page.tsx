import dataHead from "@/../public/plage/data.json" 
import { useTranslations } from "next-intl";
import style from "./plage.module.css";
import { Palmier } from "../presentationDesCours/page";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import dynamic from "next/dynamic";

const Slide = dynamic(
  () => import("@/compoments/utilities/slider/SliderImage"),{ssr : false}
);

export default function page() {
  const t = useTranslations("plage");
  return (
    <>
    <Header/>
    
    <main className={style.main}>
      <Slide data={dataHead} />
      <div className={style.box}>
        <section className={style.part}>
          <h1 className={style.h1}>{t("h1")}</h1>
          <p>
            <strong>{t("s1")}</strong>
            {t("p1")}
          </p>
          <p>
            <strong>{t("s2")}</strong>
            {t("p2")}
          </p>
          <p>{t("p3")}</p>
          <p>
            {t("p3bis")}
          </p>
          <p>
            <strong>{t("s3")}</strong>
            {t("p4")}
            <strong>{t("s4")}</strong>
            {t("p5")}
          </p>
          <p>{t("p6")}</p>
          <p>{t("p7")}</p>
        </section>
        <div className={style.resize}>
          
        </div>
        <section className={style.part}>
          <h2 className={style.h2}>{t("h2")}</h2>
          <p>
            {t("pp1")}
            <strong>{t("ss1")}</strong>
            {t("pp2")}
            <strong>{t("ss2")}</strong>
          </p>
          <p>
            {t("pp3")}
            <strong>{t("ss3")}</strong>
            {t("pp4")}
            <strong>{t("ss4")}</strong>
            {t("pp5")}
          </p>
          <p>{t("pp6")}</p>
          <p>{t("pp7")}</p>
        </section>
        <Palmier bool={true}/>
      </div>
    </main>
    <Footer/>
    </>
  );
}
