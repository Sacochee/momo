import { getTranslations } from "next-intl/server";
import { meta } from "../../layout";
import ImageThreeBrP from "@/compoments/videos/imagesTrois";
import style from "./style.module.css";
import Swap from "@/compoments/videos/swap";
import data from "../../../../../public/images/images.json";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Video from "@/compoments/videos/video";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";

export async function generateMetadata({ params: { locale } }: meta) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("photos"),
    description: t("photosDesc"),
  };
}

export default function Page() {
  const t = useTranslations("photos");
  return (
    <>
    <Header/>
    <main className={style.main}>
      <h1 className={style.h1}>
        <div style={{ paddingRight: "10px" }}>{t("h1")}</div>

        <ImageThreeBrP
          src="/Icons/cocogif.gif"
          alt="gif d un palmier avec le logo coco surf"
          brp1={1023}
          brp2={600}
          size={{ w: 100, h: 100, ww: 146, hh: 146, www: 182, hhh: 182 }}
        />
      </h1>
      <Swap data={data as any} />
      <a
        target="_blank"
        href="https://www.facebook.com/COCOSURF.ecoledesurf/"
        className={style.logo}
      >
        {t("facebook")}
        <Image
          src={"/contact/facebook.png"}
          width={150}
          height={150}
          alt="logo facebook "
        />
      </a>
      <div className={style.contentVideo}>
        <Video
          src="https://www.youtube.com/embed/Y1qXCih7SYM?si=0wQqqmwvfxrvY7UQ"
          breakpoint={800}
          size={{ ww: 600, hh: 337, w: 300, h: 168 }}
        />
        <div className={style.video}>
          <Video
            src="https://www.youtube.com/embed/2HKtgZ73vUc?si=_f-x45Qw5TTKgK9S"
            breakpoint={800}
            size={{ w: 210, h: 118, ww: 374, hh: 210 }}
          />
          <Video
            src="https://www.youtube.com/embed/nmiKv-jv3Lw?si=vcjhXQOLCNW-wwLn"
            breakpoint={800}
            size={{ w: 210, h: 118, ww: 374, hh: 210 }}
          />
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCpHW4IR4nAFnul7Ux1q1yOA"
        className={style.logo}
      >
        {t("youtube")}
        <Image
          src={"/contact/youtube.png"}
          width={150}
          height={150}
          alt="logo Youtube"
        />
      </a>
    </main>
    <Footer/>
    </>
  );
}
