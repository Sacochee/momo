import { useTranslations } from "next-intl";
import styles from "./style.module.css"
import Image from "next/image";
import { ReactNode } from "react";

export default function ({children}:{children : ReactNode}) {
    const t = useTranslations("Faq");
  
    return (
      <section className={styles.FAQ}>
        <div className={styles.FaqTitle}>
          <Image src={"/Icons/questions.png"} alt={t("alt")} height={75} width={75} />
          <p>{t("title")}</p>
        </div>
        {children}
      </section>
    );
  }
  
  {/* <Question question={t("1.q")}>
          <div>
            eyy
          </div>
        </Question>
        <Question question={t("2.q")}>
  
        </Question>
        <Question question={t("3.q")}>
  
        </Question>
        <Question question={t("4.q")}>
  
        </Question>
        <Question question={t("5.q")}>
  
        </Question>
        <Question question={t("6.q")}>
  
        </Question>
        <Question question={t("7.q")} ></Question>
        <Question question={t("8.q")}></Question>
        <Question question={t("9.q")} ></Question>
        <Question question={t("10.q")} ></Question>
        <Question question={t("11.q")} ></Question>
        <Question question={t("12.q")} ></Question>
        <Question question={t("13.q")} ></Question>
        <Question question={t("14.q")} ></Question> */}