"use client";
import Btn from "@/compoments/utilities/button/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import style from "./style.module.css";
import Image from "next/image";
import { Li } from "./Li";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import data from "@/../public/cours/siderTarif/data.json";

const Slider = dynamic(
  () => import("@/compoments/utilities/slider/SliderImage")
);

export default function Page() {
  const t = useTranslations("tarifs");
  return (
    <>
      <Header />
      <main className={style.main} style={{ margin: "0 20px" }}>
        <Slider data={data} />

        <div className={style.container}>
          <p className={style.container_desc}>{t("p1")}</p>
          <h2 style={{ textAlign: "start", textDecoration: "underline" }}>
            {t("h22")}
          </h2>
          <ol className={style.ol}>
            <li className={style.li}>
              <span className={style.underline}>{t("li1underline")}</span>
              {t("li1")}
            </li>
            <li className={style.li}>
              <span className={style.underline}>{t("l2underline")}</span>
              {t("li2")}
            </li>
          </ol>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.8em",
            }}
          >
            <Btn txt="Finaliser ma réservation" to="/app/form?type=true" />
          </div>

          <div className={style.pay}>
            <Image
              src={"/payMethode/cb.png"}
              width={59}
              height={33}
              alt="Logo d une carte bancaire"
              quality={100}
            />
            <Image
              src={"/payMethode/espece.png"}
              width={59}
              height={34}
              alt="Logo d un billet"
              quality={100}
            />
            <Image
              src={"/payMethode/CQ.png"}
              width={58}
              height={46}
              alt="Logo d un chèque"
              quality={100}
            />
            <Image
              src={"/payMethode/ancv.png"}
              width={57}
              height={43}
              alt="Logo d un chèque vacance"
              quality={100}
            />
          </div>
        </div>
        <div style={{ margin: "10px 20px"}} className={style.center}>
          <div style={{maxWidth:"1000px"}}>
            <div className={style.tabl_top}>
              <h2 className={style.tabl_top_h2}>
                {t("tabl1_h2")}
                <div className={style.tabl_top_line}>{/*line */}</div>
              </h2>

              <p className={style.tabl_top_p}>{t("tabl1_p")} </p>
              <p className={style.tabl_top_p}>{t("tabl_reduc")}</p>
            </div>
            <ul className={style.tabl_ul}>
              <Li
                type={t("tabl_li1.name")}
                duree={t("tabl_li1.time")}
                when={t("tabl_li1.when")}
                price={55}
                params="1"
              />
              <Li
                type={t("tabl_li2.name")}
                duree={t("tabl_li2.time")}
                when={t("tabl_li2.when")}
                price={100}
                params="2"
              />
              <Li
                type={t("tabl_li3.name")}
                duree={t("tabl_li3.time")}
                when={t("tabl_li3.when")}
                price={140}
                params="3"
              />
              <Li
                type={t("tabl_li4.name")}
                duree={t("tabl_li4.time")}
                when={t("tabl_li4.when")}
                price={170}
                params="4"
              />
              <Li
                type={t("tabl_li5.name")}
                duree={t("tabl_li5.time")}
                when={t("tabl_li5.when")}
                price={190}
                params="5"
              />
              <Li
                type={t("tabl_li6.name")}
                duree={t("tabl_li6.time")}
                when={t("tabl_li6.when")}
                price={320}
                params="10carte"
              />
              <Li
                type={t("tabl_li7.name")}
                duree={t("tabl_li7.time")}
                when={t("tabl_li7.when")}
                price={240}
                params="10HS"
              />
              <Li
                type={t("tabl_li8.name")}
                duree={t("tabl_li8.time")}
                when={t("tabl_li8.when")}
                price={200}
                params="enfant"
              />
              
            </ul>
          </div>
          <div style={{maxWidth:"1000px"}}>
            <div className={style.tabl_top}>
              <h2 className={style.tabl_top_h2}>
                {t("tabl2_h2")}
                <div className={style.tabl_top_line}>{/*line */}</div>
              </h2>

              <p className={style.tabl_top_pp}>{t("tabl2_p")} </p>
            </div>
            <ul className={style.tabl_ul}>
              <Li
                type={t("tabl2_li1.name")}
                duree={t("tabl2_li1.time")}
                when={t("tabl2_li1.when")}
                price={100}
                params="part1"
              />
              <Li
                type={t("tabl2_li2.name")}
                duree={t("tabl2_li2.time")}
                when={t("tabl2_li2.when")}
                price={160}
                params="part2"
              />
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
