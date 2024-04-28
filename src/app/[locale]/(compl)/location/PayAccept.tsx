"use client";
import Image from "next/image";
import style from "./page.module.css";
import Faq from "@/compoments/Question/Faq";
import Question from "@/compoments/Question/question";
import { useTranslations } from "use-intl";


export function Case({
  name, temps, prix, img,
}: {
  name: string;
  temps: string;
  prix: string;
  img: DataImage;
}) {
  return (
    <li>
      <div className={style.center}>
        <Image
          src={img.src}
          width={img.w}
          height={img.h}
          alt={img.alt}
          loading="lazy" />
      </div>
      <div className={style.li}>
        <div className={style.str}>{name}</div>
        <div>{temps}</div>
        <div className={style.str}>{prix}</div>
      </div>
    </li>
  );
}
export function FAQ() {
  const t = useTranslations("FaqLoc");

  return (
    <Faq>
      <Question question={t("1.q")}>
        <div>{t("1.p1")}</div>
        <br />

        <div>{t("1.p2")}</div>
        <br />
        <div>{t("1.p3")}</div>
        <br />
        <br />
        <table className={style.tabl}>
          <tbody>
            <tr>
              <td>{t("1.tabl.c1")}</td>
              <td>{t("1.tabl.l1")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c2")}</td>
              <td>{t("1.tabl.l2")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c3")}</td>
              <td>{t("1.tabl.l3")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c4")}</td>
              <td>{t("1.tabl.l4")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c5")}</td>
              <td>{t("1.tabl.l5")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c6")}</td>
              <td>{t("1.tabl.l6")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c7")}</td>
              <td>{t("1.tabl.l7")}</td>
            </tr>
            <tr>
              <td>{t("1.tabl.c8")}</td>
              <td>{t("1.tabl.l8")}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div>{t("1.p4")}</div>
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
        <ul>
          <li>{t("3.li1")}</li>
          <li>{t("3.li2")}</li>
          <li>{t("3.li3")}</li>
        </ul>
      </Question>
      <Question question={t("4.q")}>
        <div>{t("4.p1")}</div>
        <div>{t("4.p2")}</div>
      </Question>
      <Question question={t("5.q")}>
        <div>{t("5.p1")}</div>
      </Question>
      <Question question={t("6.q")}>
        <div>{t("6.p1")}</div>
        <div>{t("6.p2")}</div>
        <div>{t("6.p3")}</div>
      </Question>
      <Question question={t("7.q")}>
        <div>{t("7.p1")}</div>
        <div>{t("7.p2")}</div>
      </Question>
      <Question question={t("8.q")}>
        <div>{t("8.p1")}</div>
      </Question>
      <Question question={t("9.q")}>
        <div>{t("9.p1")}</div>
        <div>{t("9.p2")}</div>
        <br />
        <table className={style.tabl}>
          <thead>
            <tr>
              <td>{t("9.tabl.a1")}</td>
              <td>{t("9.tabl.m1")}</td>
              <td>{t("9.tabl.r1")}</td>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <tr>
              <td>{t("9.tabl.a2")}</td>
              <td className={style.win}>{t("9.tabl.m2")}</td>
              <td className={style.loose}>{t("9.tabl.r2")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a3")}</td>
              <td className={style.win}>{t("9.tabl.m3")}</td>
              <td className={style.loose}>{t("9.tabl.r3")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a4")}</td>
              <td className={style.win}>{t("9.tabl.m4")}</td>
              <td className={style.loose}>{t("9.tabl.r4")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a5")}</td>
              <td className={style.loose}>{t("9.tabl.m5")}</td>
              <td className={style.win}>{t("9.tabl.r5")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a6")}</td>
              <td className={style.win}>{t("9.tabl.m6")}</td>
              <td className={style.loose}>{t("9.tabl.r6")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a7")}</td>
              <td className={style.loose}>{t("9.tabl.m7")}</td>
              <td className={style.win}>{t("9.tabl.r7")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a8")}</td>
              <td className={style.win}>{t("9.tabl.m8")}</td>
              <td className={style.loose}>{t("9.tabl.r8")}</td>
            </tr>
            <tr>
              <td>{t("9.tabl.a9")}</td>
              <td className={style.win}>{t("9.tabl.m9")}</td>
              <td className={style.loose}>{t("9.tabl.r9")}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>{t("9.tabl.a10")}</td>
              <th>{t("9.tabl.r")}</th>
            </tr>
          </tfoot>
        </table>
        <br />
        <br />
        <div>{t("9.p3")}</div>
        <br />
        <div>{t("9.p4")}</div>
        <br />
        <div>{t("9.p5")}</div>
      </Question>
    </Faq>
  );
}




export function PayAccept() {
  return (
    <div className={style.center}>
      <div className={style.pay}>
        <Image
          src={"/payMethode/cb.png"}
          width={59}
          height={33}
          alt="Logo d une carte bancaire"
          quality={100} />
        <Image
          src={"/payMethode/espece.png"}
          width={59}
          height={34}
          alt="Logo d un billet"
          quality={100} />
        <Image
          src={"/payMethode/CQ.png"}
          width={58}
          height={46}
          alt="Logo d un chèque"
          quality={100} />
        <Image
          src={"/payMethode/ancv.png"}
          width={57}
          height={43}
          alt="Logo d un chèque vacance"
          quality={100} />
      </div>
    </div>
  );
}

export type DataImage = {
  src: string;
  w: number;
  h: number;
  alt: string;
};
export const planche: DataImage = {
  src: "/loc/planche-de-surf.png",
  w: 22,
  h: 59,
  alt: "Logo d une planche de surf",
};
export const body: DataImage = {
  src: "/loc/body.png",
  w: 33,
  h: 55,
  alt: "Logo d une planche de surf",
};
export const wet: DataImage = {
  src: "/loc/combie.png",
  w: 24,
  h: 50,
  alt: "Logo d une planche de surf",
};

