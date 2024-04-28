"use client";
import Btn from "@/compoments/utilities/button/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import style from "./style.module.css";
import { Li } from "./Li";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import data from "@/../public/cours/siderTarif/data.json";
import Faq from "@/compoments/Question/Faq";
import Question from "@/compoments/Question/question";
import { PayAccept } from "../location/PayAccept";

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
            <li style={{listStyle : "none", fontSize : "0.8em"}}>
              <Btn txt="Finaliser ma réservation" to="/app/form?type=true" />
            </li>
          </ol>
          <div className={style.center}>
            <div className={style.flex}>
              <div className={style.paie}>Moyens de paiement acceptés :</div>
              <a href="">Paiement d un montant personnalisé</a>
            </div>
          </div>

          <PayAccept />
        </div>
        <div style={{ margin: "10px 20px" }} className={style.center}>
          <div style={{ maxWidth: "1000px" }}>
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
          <div style={{ maxWidth: "1000px" }}>
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function FAQ() {
  const t = useTranslations("FaqTarif");

  return (
    <Faq>
      <Question question={t("1.q")}>
        <div>{t("1.p1")}</div>
        <div>{t("1.p2")}</div>
        <div>{t("1.p3")}</div>
      </Question>
      <Question question={t("2.q")}>
        <ol>
          <li>{t("2.li1")}</li>
          <li>{t("2.li2")}</li>
          <li>{t("2.li3")}</li>
          <li>{t("2.li4")}</li>
        </ol>
      </Question>
      <Question question={t("3.q")}>
        <div>{t("3.p1")}</div>
        <div>{t("3.p2")}</div>
        <div>{t("3.p3")}</div>
        <div>{t("3.p4")}</div>
        <div>{t("3.p5")}</div>
        <div>{t("3.p6")}</div>
      </Question>
      <Question question={t("4.q")}>
        <div>{t("4.p1")}</div>
        <div>{t("4.p2")}</div>
      </Question>
      <Question question={t("5.q")}>
        <div>{t("5.p1")}</div>
        <div>{t("5.p2")}</div>
        <div>{t("5.p3")}</div>
      </Question>
      <Question question={t("6.q")}>
        <div>{t("6.p1")}</div>
        <div>{t("6.p2")}</div>
      </Question>
      <Question question={t("7.q")}>
        <div>{t("7.p1")}</div>
        <div>{t("7.p2")}</div>
      </Question>
      <Question question={t("8.q")}>
        <div>{t("8.p1")}</div>
        <div>{t("8.p2")}</div>
      </Question>
      <Question question={t("9.q")}>
        <div>{t("9.p1")}</div>
      </Question>
      <Question question={t("10.q")}>
        <div>{t("10.p1")}</div>
        <div>{t("10.p2")}</div>
      </Question>
      <Question question={t("11.q")}>
        <div>{t("11.p1")}</div>
        <div>{t("11.p2")}</div>
      </Question>
      <Question question={t("12.q")}>
        <div>{t("12.p1")}</div>
        <div>{t("12.p2")}</div>
      </Question>
      <Question question={t("13.q")}>
        <div>{t("13.p1")}</div>
        <div>{t("13.p2")}</div>
      </Question>
      <Question question={t("14.q")}>
        <div>{t("14.p1")}</div>
        <div>{t("14.p2")}</div>
        <div>{t("14.p3")}</div>
      </Question>
      <Question question={t("15.q")}>
        <div>{t("15.p1")}</div>
      </Question>
    </Faq>
  );
}
