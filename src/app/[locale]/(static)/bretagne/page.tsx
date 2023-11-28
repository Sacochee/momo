import SliderFull from "@/compoments/comps/sliderFull/sliderFull";
import data from "../../../../../public/bretagne/image.json";
import Image from "next/image";
import style from "./brt.module.css";
import Btn from "@/compoments/comps/btn";
import D from "../../../../../public/bretagne/imageBis.json";
import { useTranslations } from "next-intl";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";

export default function page() {
  const t = useTranslations("bretagne");
  return (
    <>
      <Header />
      <main className={style.main}>
        <SliderFull data={data as any} />
        <Image
          src={"/Icons/logobrt.png"}
          width={58}
          height={109}
          alt="logo breton stylisé Coco Surf"
        />
        <section className={style.section}>
          <h1 className={style.h1}>{t("h1")} </h1>
          <h2 className={style.h2}>{t("h2")}</h2>
          <div className={style.color}></div>
          <ul className={style.ul}>
            <li className={style.li}>
              <p className={style.P}>{t("p1")}</p>
              <p className={style.P}>
                {t("p2")}
                <strong>{t("s1")}</strong>
              </p>
            </li>
            <li className={style.li}>
              <p className={style.P}>
                <strong>{t("s2")}</strong>
                {t("p3")}
                <strong>{t("s3")}</strong>
                {t("p4")}
              </p>
              <p className={style.P}>
                {t("p5")}
                <strong>{t("s4")}</strong>
              </p>
            </li>
            <li className={style.li}>
              <p className={style.P}>{t("p6")}</p>
              <p className={style.P}>
                {t("p7")}
                <strong>{t("s5")}</strong>
              </p>
            </li>
            <li className={style.li}>
              <p className={style.P}>{t("p8")}</p>
              <p className={style.P}>
                {t("p9")}
                <strong>{t("s6")}</strong>
                {t("p10")}
              </p>
            </li>
            <li className={style.li}>
              <p className={style.P}>{t("p11")}</p>
              <p className={style.P}>{t("p12")}</p>
            </li>
            <li className={style.li}>
              <p className={style.P}>{t("p13")}</p>
            </li>
          </ul>
          <Btn to="/" txt={t("call")} />
        </section>
        <Image
          src={"/Icons/palmier.png"}
          width={94}
          height={96}
          alt="Palmier Stylisé Coco Surf"
          style={{ marginBottom: "64px" }}
        />
        <div className={style.less}>
          <SliderFull data={D as any} />
        </div>
        <section className={style.infos}>
          <h2 className={style.info_h2}>{t("sub")} </h2>
          <p className={style.info_p}>
            <strong>{t("g")}</strong>
            {t("t")}
          </p>
          <p className={style.info_p}>
            <strong>{t("g1")}</strong>
            {t("t1")}
          </p>
          <p className={style.info_p}>
            <strong>{t("g2")}</strong>
            {t("t2")}
          </p>
          <p className={style.info_p}>
            <strong>{t("g3")}</strong>
            {t("t3")}
          </p>
          <p className={style.info_p}>
            <strong>{t("g4")}</strong>
            {t("t4")}
          </p>
          <p className={style.info_p} style={{ marginBottom: "30px" }}>
            <strong>{t("g5")}</strong>
            {t("t5")}
          </p>
          <Btn to="/" txt={t("call")} />
        </section>
      </main>
      <Footer />
    </>
  );
}
