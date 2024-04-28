import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Video from "@/compoments/utilities/video/Video";
import Btn from "@/compoments/utilities/button/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";
import Question from "@/compoments/Question/question";
import Faq from "@/compoments/Question/Faq";

export default function Home() {
  const t = useTranslations("main");
  const faq = useTranslations("Faq");
  return (
    <>
      <Header />
      <main>
        <div className={styles.main}>
          <h1>Le surf chez cocosurf</h1>
          <section>
            <Video
              s={["video1_720", "video1_1080", "video1_360"]}
              bool={true}
            />
          </section>
          <section className={styles.txt}>
            <div className={styles.part}>
              <p className={styles.title}>{t("t1")}</p>
              <p className={styles.title}> {t("t2")}</p>
            </div>
            <div className={styles.part}>
              <p className={styles.p}>
                {t("p1")}
                <strong>{t("s1")}</strong>
                {t("p2")} <strong>{t("s2")}</strong>
              </p>
            </div>
            <div className={styles.part}>
              <p className={styles.p}>
                {t("p3")}
                <strong>{t("s3")}</strong>
                {t("p4")}
              </p>
              <p className={styles.p}>
                {t("p5")}
                <strong>{t("s4")}</strong> : <strong>{t("s5")}</strong>.
              </p>
            </div>
            <div className={styles.part}>
              <p className={styles.p}>{t("p6")}</p>
            </div>
            <div className={styles.part}>
              <p className={styles.p}>
                They both speak english und Morgan spricht auch ein bischen
                deutsch.
              </p>
            </div>

            <div>
              <div>
                <Image
                  src={"/Icons/gifHomePage.gif"}
                  width={true ? 300 : 525}
                  height={true ? 78 : 138}
                  alt="gif de l ecole de surf cocosurf"
                />
              </div>
            </div>
          </section>
          <div style={{ marginBottom: "80px", marginTop: "50px" }}>
            <Btn to="/tarifsEtReservations" txt="Tarifs & Réservation" />
          </div>

          <section style={{ marginBottom: "30px" }}>
            <Video s={["video2", "video2", "video2"]} bool={false} />
          </section>
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function FAQ() {
  const t = useTranslations("Faq");
  const style = {
    fontSize: "1em",
    lineHeight: "35px",
  };
  return (
    <Faq>
      <Question question={t("1.q")}>
        <div style={style}>{t("1.p1")}</div>
        <div style={style}>{t("1.p2")}</div>
        <div style={style}>{t("1.p3")}</div>
        <div style={style}>{t("1.p4")}</div>
      </Question>
      <Question question={t("2.q")}>
        <div style={style}>{t("2.p1")}</div>
        <div style={style}>{t("2.p2")}</div>
        <div style={style}>{t("2.p3")}</div>
        <div style={style}>{t("2.p4")}</div>
      </Question>
      <Question question={t("3.q")}>
        <div style={style}>{t("3.p1")}</div>
        <div style={style}>{t("3.p2")}</div>
        <div style={style}>{t("3.p3")}</div>
        <div style={style}>{t("3.p4")}</div>
      </Question>
      <Question question={t("4.q")}>
        <div style={style}>{t("4.p1")}</div>
        <div style={style}>{t("4.p2")}</div>
        <div style={style}>{t("4.p3")}</div>
      </Question>
      <Question question={t("5.q")}>
        <div style={style}>{t("5.p1")}</div>
        <div style={style}>{t("5.p2")}</div>
        <div style={style}>{t("5.p3")}</div>
        <div style={style}>{t("5.p4")}</div>
      </Question>
      <Question question={t("6.q")}>
        <div style={style}>{t("6.p1")}</div>
        <div style={style}>{t("6.p2")}</div>
        <div style={style}>{t("6.p3")}</div>
      </Question>
      <Question question={t("7.q")}>
        <div style={style}>{t("7.p1")}</div>
        <div style={style}>{t("7.p2")}</div>
      </Question>
      <Question question={t("8.q")}>
        <div style={style}>{t("8.p1")}</div>
        <div style={style}>{t("8.p2")}</div>
      </Question>
      <Question question={t("9.q")}>
        <div style={style}>{t("9.p1")}</div>
        <div style={style}>{t("9.p2")}</div>
      </Question>
      <Question question={t("10.q")}>
        <div style={style}>{t("10.p1")}</div>
        <div style={style}>{t("10.p2")}</div>
      </Question>
      <Question question={t("11.q")}>
        <div style={style}>{t("11.p1")}</div>
      </Question>
      <Question question={t("12.q")}>
        <div style={style}>{t("12.p1")}</div>
        <div style={style}>{t("12.p2")}</div>
      </Question>
      <Question question={t("13.q")}>
        <div style={style}>{t("13.p1")}</div>
      </Question>
      <Question question={t("14.q")}>
        <div style={style}>{t("14.p1")}</div>
        <div style={style}>{t("14.p2")}</div>
        <ul>
          <li>{t("14.li1")}</li>
          <li>{t("14.li2")}</li>
          <li>{t("14.li3")}</li>
        </ul>
      </Question>
    </Faq>
  );
}
