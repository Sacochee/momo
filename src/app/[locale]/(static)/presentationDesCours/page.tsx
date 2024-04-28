import SliderCss from "@/compoments/utilities/slider/SliderImage";
import style from "./présentation.module.css";
import Btn from "@/compoments/utilities/button/btn";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import Faq from "@/compoments/Question/Faq";
import Question from "@/compoments/Question/question";

export default function Page() {
  const t = useTranslations("presentation");
  return (
    <>
      <Header />
      <main className={style.main}>
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
              <Btn txt={t("call")} to="/tarifsEtReservations" />
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
                  <li className={style.ulli}>
                    <strong>{t("li1s1")}</strong>
                    {t("li1p1")}
                  </li>
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export function Palmier({ bool }: { bool?: Boolean }) {
  const t = useTranslations("presentation");
  return (
    <div className={style.palm} style={{fontSize : "0.8em"}}>
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
        <Btn
          txt={bool ? t("call3") : t("call2")}
          to={bool ? "/presentationDesCours" : "plageEtEquipe"}
        />
      </div>
    </div>
  );
}

function FAQ() {
  const t = useTranslations("FaqPresentation");

  const style = { textAlign: "start" };

  return (
    <Faq>
      <Question question={t("1.q")}>
        <div>{t("1.p1")}</div>
        <div>{t("1.p2")}</div>
        <div>{t("1.p3")}</div>
        <div>{t("1.p4")}</div>
        <div>{t("1.p5")}</div>
        <div>{t("1.p6")}</div>
        <div>{t("1.p7")}</div>
        <div>{t("1.p8")}</div>
      </Question>
      <Question question={t("2.q")}>
        <div>{t("2.p1")}</div>
      </Question>
      <Question question={t("3.q")}>
        <div>{t("3.p1")}</div>
        <div>{t("3.p2")}</div>
      </Question>
      <Question question={t("4.q")}>
        <div>{t("4.p1")}</div>
      </Question>
      <Question question={t("5.q")}>
        <div>{t("5.p1")}</div>
      </Question>
      <Question question={t("6.q")}>
        <div>{t("6.p1")}</div>
        <div>{t("6.p2")}</div>
        <div>{t("6.p3")}</div>
        <div>{t("6.p4")}</div>
      </Question>
      <Question question={t("7.q")}>
        <div>{t("7.p1")}</div>
        <div>{t("7.p2")}</div>
        <div>{t("7.p3")}</div>
      </Question>
      <Question question={t("8.q")}>
        <div>{t("8.p1")}</div>
        <div>{t("8.p2")}</div>
      </Question>
      <Question question={t("9.q")}>
        <div>{t("9.p1")}</div>
        <div>{t("9.p2")}</div>
      </Question>
      <Question question={t("10.q")}>
        <div>{t("10.p1")}</div>
        <ul>
          <li>{t("10.li1")}</li>
          <li>{t("10.li2")}</li>
          <li>{t("10.li3")}</li>
          <li>{t("10.li4")}</li>
          <li>{t("10.li5")}</li>
          <li>{t("10.li6")}</li>
          <li>{t("10.li7")}</li>
        </ul>
      </Question>
      <Question question={t("11.q")}>
        <div>{t("11.p1")}</div>
        <div>{t("11.p2")}</div>
        <div>{t("11.p3")}</div>
      </Question>
      <Question question={t("12.q")}>
        <div>{t("12.p1")}</div>
        <ul>
          <li>{t("12.li1")}</li>
          <li>{t("12.li2")}</li>
          <li>{t("12.li3")}</li>
        </ul>
        <div>{t("12.p2")}</div>
        <ul>
          <li>{t("12.li4")}</li>
          <li>{t("12.li5")}</li>
          <li>{t("12.li6")}</li>
          <li>{t("12.li7")}</li>
        </ul>
      </Question>
      <Question question={t("13.q")}>
        <div>{t("13.p1")}</div>
        <div>{t("13.p2")}</div>
      </Question>
      <Question question={t("14.q")}>
      <div>{t("14.p1")}</div>
        <ul>
          <li>{t("14.li1")}</li>
          <li>{t("14.li2")}</li>
          <li>{t("14.li3")}</li>
        </ul>
      </Question>
      <Question question={t("15.q")}>
        <div>{t("15.p1")}</div>
      </Question>
      <Question question={t("16.q")}>
        <ol>
          <li>{t("16.li1")}</li>
          <li>{t("16.li2")}</li>
          <li>{t("16.li3")}</li>
        </ol>
      </Question>
      <Question question={t("17.q")}>
        <div>{t("17.p1")}</div>
      </Question>
      <Question question={t("18.q")}>
        <div>{t("18.p1")}</div>
        <div>{t("18.p2")}</div>
      </Question>
      <Question question={t("19.q")}>
        <div>{t("19.p1")}</div>
      </Question>
      <Question question={t("20.q")}>
        <div>{t("20.p1")}</div>
      </Question>
    </Faq>
  );
}
