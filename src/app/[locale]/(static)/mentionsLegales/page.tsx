import Footer from "@/compoments/footer/footer";
import style from "./style.module.css";
import { useTranslations } from "next-intl";
import Header from "@/compoments/header/header";

export default function Page() {
  const t = useTranslations("mentions");
  return (
    <>
    <Header/>
    
    <main>
      <section className={style.section}>
        <p className={style.title}>{t("t1")}</p>
        <p className={style.text}>{t("p1")}</p>
        <p className={style.text}>{t("p2")}</p>
        <p className={style.title}>{t("t2")}</p>
        <p className={style.text}>{t("p3")}</p>
        <p className={style.text}>{t("p4")}</p>
        <p className={style.text}>{t("p5")}</p>
        <p className={style.title}>{t("t3")}</p>
        <p className={style.text}>{t("p6")}</p>
        <p className={style.text}>{t("p7")}</p>
        <p className={style.title}>{t("t4")}</p>
        <p className={style.text}>{t("p8")}</p>
        <p className={style.title}>{t("t5")}</p>
        <p className={style.text}>{t("p9")}</p>
        <p className={style.text}>{t("p10")}</p>
        <p className={style.title}>{t("t6")}</p>
        <p className={style.text}>{t("p11")}</p>
        <p className={style.text}>{t("p12")}</p>
        <p className={style.title}>{t("t7")}</p>
        <p className={style.text}>{t("p13")}</p>
        <p className={style.text}>{t("p14")}</p>
      </section>
    </main>
    <Footer/>
    </>
  );
}
