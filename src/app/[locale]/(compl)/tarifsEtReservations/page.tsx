import Btn from "@/compoments/utilities/button/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import SliderFull from "@/compoments/utilities/sliderFull/sliderFull";
import data from "../../../../../public/presentationCours/image.json";
import style from "./style.module.css";
import Image from "next/image";
import { Li } from "./Li";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("tarifs")
  return (
    <>
      <Header />

      <main className={style.main}>
        <h1>{t("h1")}</h1>
        <SliderFull data={data as any} from={"presentationCours"} />
        <div className={style.container}>
          <h2>{t("h2")}</h2>
          <p className={style.container_desc}>
          {t("p1")}
          </p>
          <h2>{t("h22")}</h2>
          <ol className={style.ol}>
            <li className={style.li}>
              <span className={style.underline}>{t("li1underline")}</span>
              {t("li1")}
            </li>
            <li className={style.li}>
              <span className={style.underline}>
              {t("l2underline")}
              </span>
              {t("li2")}
            </li>
          </ol>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Btn txt="Inscription" to="/tarifsEtReservations/form" />
          </div>
          
          <p>
          {t("p2")}
          </p>
          <div>
            <Image
              src={"/presentationCours/esp.png"}
              width={100}
              height={80}
              alt="Logo d un billet de banque"
            />
            <Image
              src={"/presentationCours/ancv.png"}
              width={100}
              height={80}
              alt="Logo d un chèque vacance"
            />
            <Image
              src={"/presentationCours/CQ.png"}
              width={100}
              height={80}
              alt="Logo d un chèque"
            />
          </div>
          
        </div>
        <div style={{margin:"10px 20px"}}>
          <div>
            <div className={style.tabl_top}>
            <h2 className={style.tabl_top_h2}>{t("tabl1_h2")}</h2>
            <div className={style.tabl_top_line}>{/*line */}</div>
            <p className={style.tabl_top_p}>{t("tabl1_p")} </p>
            <p className={style.tabl_top_p}>{t("tabl_reduc")}</p>
          </div>
          <ul className={style.tabl_ul}>
            <Li type={t("tabl_li1.name")} duree={t("tabl_li1.time")} when={t("tabl_li1.when")} price={55} params="1"/>
            <Li type={t("tabl_li2.name")} duree={t("tabl_li2.time")} when={t("tabl_li2.when")} price={100} params="2"/>
            <Li type={t("tabl_li3.name")} duree={t("tabl_li3.time")} when={t("tabl_li3.when")} price={140} params="3"/>
            <Li type={t("tabl_li4.name")} duree={t("tabl_li4.time")} when={t("tabl_li4.when")} price={170} params="4"/>
            <Li type={t("tabl_li5.name")} duree={t("tabl_li5.time")} when={t("tabl_li5.when")} price={190} params="5"/>
            <Li type={t("tabl_li6.name")} duree={t("tabl_li6.time")} when={t("tabl_li6.when")} price={320} params="10carte"/>
            <Li type={t("tabl_li7.name")} duree={t("tabl_li7.time")} when={t("tabl_li7.when")} price={240} params="10HS"/>
            <Li type={t("tabl_li8.name")} duree={t("tabl_li8.time")} when={t("tabl_li8.when")} price={200} params="enfant"/>
            <Li type={t("tabl_li9.name")} duree={t("tabl_li9.time")} when={t("tabl_li9.when")} price={30} params="acompte"/>
          </ul>
          </div>
          <div>
            <div className={style.tabl_top}>
            <h2 className={style.tabl_top_h2}>{t("tabl2_h2")}</h2>
            <div className={style.tabl_top_line}>{/*line */}</div>
            <p className={style.tabl_top_pp}>{t("tabl2_p")} </p>
          </div>
          <ul className={style.tabl_ul}>
          <Li type={t("tabl2_li1.name")} duree={t("tabl2_li1.time")} when={t("tabl2_li1.when")} price={100} params="part1"/>
          <Li type={t("tabl2_li2.name")} duree={t("tabl2_li2.time")} when={t("tabl2_li2.when")} price={160} params="part2"/>
          </ul>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}

