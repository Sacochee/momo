import SliderCss from "@/compoments/utilities/slider/sliderCss";
import style from "./présentation.module.css";
import Btn from "@/compoments/utilities/button/btn";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";

export default function Page() {
  const t = useTranslations("presentation");
  return (
    <>
    
    <Header/>
    <main className={style.main}>
      <SliderCss />
      <div className={style.box}>
        <section className={style.alin}>
          <h1 className={style.h1}>{t("h1")}</h1>
          <ol className={style.ol}>
            <li className={style.olli}>
              {t("ol1")}
              <strong>{t("ol1s")}</strong>
              {t("oll1")}
            </li>
            <li className={style.olli}>
              {t("ol2")}
              <strong>{t("ol2s")}</strong>
              {t("oll2")}
            </li>
          </ol>
          <div className={style.size}>
            <Btn txt={t("call")} to="/TarifsEtReservations" />
          </div>
        </section>
        <section className={style.cont}>
          <ul className={style.container}>
            <li className={style.part}>
              <h2 className={style.h2}>{t("box1H2")}</h2>
              <Image
                src={"/cours/planche.png"}
                width={86}
                height={100}
                alt="logo d une planche de surf theme couleur : Coco Surf"
              />
              <ul className={style.ul}>
                <li className={style.ulli}><strong>{t("li1s1")}</strong>{t("li1p1")}</li>
                <li className={style.ulli}>
                  <strong>{t("li1s2")}</strong>
                  {t("li1p2")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li1s3")}</strong>
                  {t("li1p3")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li1s4")}</strong>
                  {t("li1p4")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li1s5")}</strong>
                  {t("li1p5")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li1s6")}</strong>
                  {t("li1p6")}
                </li>
              </ul>
            </li>
            <li className={style.part}>
              <h2 className={style.h2}>{t("li2h2")}</h2>
              <Image
                src={"/cours/pouce.png"}
                width={100}
                height={100}
                alt="logo d un pouce theme couleurs : coco surf"
              />
              <ul className={style.ul}>
                <li className={style.ulli}>
                  {t("li2p1")}
                  <strong>{t("li2s1")}</strong>
                  {t("li2p11")}
                  <strong>{t("li2s11")}</strong>
                </li>
                <li className={style.ulli}>
                  {t("li2p2")}
                  <strong>{t("li2s2")}</strong>
                  {t("li2p22")}
                </li>
                <li className={style.ulli}>
                  {t("li2p3")}
                  <strong>{t("li2s3")}</strong>
                  {t("li2p33")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li2s4")}</strong>
                  {t("li2p4")}
                </li>
                <li className={style.ulli}>{t("li2p5")}</li>
              </ul>
            </li>
          </ul>
          <ul className={style.container}>
            <li className={style.part}>
              <h2 className={style.h2}>{t("li4h2")}</h2>
              <Image
                src={"/cours/croix.png"}
                width={100}
                height={100}
                alt="logo d une croix de secours theme coleurs : coco surf"
              />
              <ul className={style.ul}>
                <li className={style.ulli}>
                  <strong>{t("li4s1")}</strong>
                  {t("li4p1")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li4s2")}</strong>
                  {t("li4p2")}
                </li>
                <li className={style.ulli}>
                  {t("li4p3")}
                  <strong>{t("li4s3")}</strong>
                  {t("li4p33")}
                </li>
                <li className={style.ulli}>
                  <strong>{t("li4s4")}</strong>
                  {t("li4p4")}
                </li>
              </ul>
            </li>
            <li className={style.part}>
              <h2 className={style.h2}>{t("li3h2")}</h2>
              <Image
                src={"/cours/gopro.png"}
                width={100}
                height={100}
                alt="logo d une camera theme coco surf"
              />
              <ul className={style.ul}>
                <li className={style.ulli}>{t("li3p1")}</li>
                <li className={style.ulli}>
                  {t("li3p2")}
                  <strong>{t("li3s2")}</strong>
                </li>
                <li className={style.ulli}>
                  <strong>{t("li3s3")}</strong>
                  {t("li3p3")}
                </li>
                <li className={style.ulli}>
                  {t("li3p4")}
                  <strong>{t("li3s4")}</strong>
                  {t("li3p44")}
                </li>
              </ul>
            </li>
          </ul>
        </section>
          <Palmier />
      </div>
    </main>
    <Footer/>
    </>
  );
  
}

export function Palmier() {
  const t = useTranslations("presentation")
  return (
    <div className={style.palm}>
      <div style={{ margin: "30px 0" }}>
        <Image
          src={"/Icons/palmier.png"}
          width={94}
          height={96}
          alt="logo palmier stylisé coco surf"
        />
        <Btn txt={t("call")} to="/tarifsEtReservations" />
      </div>
      <div style={{ margin: "30px 0" }}>
        <Image
          src={"/Icons/palmier.png"}
          width={94}
          height={96}
          alt="logo palmier stylisé coco surf"
        />
        <Btn txt={t("call2")} to="/plage" />
      </div>
    </div>
  );
}