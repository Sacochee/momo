import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Video from "@/compoments/videos/video";
import Btn from "@/compoments/comps/btn";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";

export default function Home() {
  const t = useTranslations("main");
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <Video
            breakpoint={1023}
            src="https://www.youtube.com/embed/LdYPlNzNEaA?si=Ifrkd0GN768j8tBA"
            size={{ ww: 1024, w: 300, hh: 600, h: 169 }}
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
              <strong>{t("s4")}</strong> :<strong>{t("s5")}</strong>.
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
          <Btn to="/tarifs" txt="Tarifs & Réservation" />
        </div>

        <section style={{ marginBottom: "30px" }}>
          <Video
            src="https://www.youtube.com/embed/nmiKv-jv3Lw?si=VhxpiQEGnhtUDrqu"
            breakpoint={1023}
            size={{ ww: 1024, w: 300, hh: 600, h: 160 }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
