"use client";
import Image from "next/image";
import { MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks";
import style from "./header.module.css";
import { useTranslations } from "next-intl";
import { useRouter, usePathname} from "@/navigation";
import Links from "../utilities/links/links";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const change = (route: string) => router.replace(path, { locale: route });
  return (
    <header style={{ zIndex: "4" }}>
      <div className={style.lang}>
        <div onClick={() => change("fr")} className={style.drp}>
          <Image
            src={"/Icons/fr.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Francais (version francaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("en")} className={style.drp}>
          <Image
            src={"/Icons/en.png"}
            width={16}
            height={11}
            alt="logo du drapeaux Anglais (version anglaise)"
            priority={true}
          />
        </div>
        <div onClick={() => change("de")} className={style.drp}>
          <Image
            src={"/Icons/de.png"}
            width={16}
            height={11}
            alt="logo du drapeaux allemand (version allemande)"
            priority={true}
          />
        </div>
      </div>
      {useMediaQuery(1024) ? <Laptop /> : <Mobile />}
    </header>
  );
}

function Mobile() {
  const router = useRouter();
  const [etat, setEtat] = useState(false);
  return (
    <nav className={style.cont}>
      <div className={style.center}>
        <Burger state={etat} setState={setEtat} />
        <Image
          src={"/Icons/logo.png"}
          width={50}
          height={50}
          alt="logo de cocosurf l ecole de surf"
          onClick={() => router.push("/")}
          style={{ zIndex: 1, backgroundColor: "white", borderRadius: "50%" }}
        />
      </div>
      {etat ? <Nav /> : undefined}
    </nav>
  );
}

function Burger({ state, setState }: { state: boolean; setState: any }) {
  const lines = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    state ? change : change;
  });
  const change = () => {
    setState(state ? false : true);
    lines.current.classList.toggle(style.active);
  };
  return (
    <div className={style.burger} onClick={change} ref={lines}>
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  );
}

function Nav() {
  const router = useRouter();
  const [cour, setCour] = useState(false);
  const [petit, setPetit] = useState(false);
  const t = useTranslations("nav");
  return (
    <ul className={style.nav}>
      <li className={style.item}>
        <Links href={"/"}>{t("home")}</Links>
      </li>
      <li className={style.item} onClick={() => setCour(cour ? false : true)}>
        {t("cours")}
        <Image
          src={"/Icons/arrow.png"}
          width={10}
          height={10}
          alt="logo d une fleche d un menu deroutlant"
          className={cour ? style.arrow : undefined}
        />
      </li>
      {cour ? (
        <ul className={style.subClass}>
          <li className={style.subItem}>
            <Links href={"/presentationDesCours"}>{t("c1")}</Links>
          </li>
          <li className={style.subItem}>
            <Links href={"/tarifsEtReservations"}>{t("c2")}</Links>
          </li>
          <li className={style.subItem}>
            <Links href={"/plageEtEquipe"}>{t("c3")}</Links>
          </li>
        </ul>
      ) : undefined}
      <li className={style.item}>
        <Links href={"/location"}>{t("loc")}</Links>
      </li>
      <li
        className={style.item}
        onClick={() => {
          setPetit(petit ? false : true);
        }}
      >
        {t("petit")}
        <Image
          src={"/Icons/arrow.png"}
          width={10}
          height={10}
          alt="logo d une fleche d un menu deroutlant"
          className={petit ? style.arrow : undefined}
        />
      </li>
      {petit ? (
        <ul className={style.subClass}>
          <li className={style.subItem}>
            <Links href={"/carteCadeaux"}>{t("p1")}</Links>
          </li>
          <li className={style.subItem}>
            <Links href={"/bretagne"}>{t("p2")}</Links>
          </li>
          <li className={style.subItem}>
            <Links href={"/logement"}>{t("p3")}</Links>
          </li>
        </ul>
      ) : undefined}
      <li className={style.item}>
        <Links href={"/photos"}>{t("photo")}</Links>
      </li>
      <li className={style.item}>
        <Links href={"/contact"}>{t("contact")}</Links>
      </li>
    </ul>
  );
}
function Laptop() {
  const t = useTranslations("nav");
  const [cours, setCours] = useState(false),
    [petit, setPetit] = useState(false);
  const router = useRouter();
  return (
    <ul className={style.nav_l}>
      <li className={style.li_l}>
        <Links href={"/"}>
          <Image
            src={"/Icons/logo.png"}
            width={105}
            height={105}
            alt="Logo de cocosurf"
          />
        </Links>
      </li>
      <li className={style.li_l}>
        <Links href={"/"}>{t("home")}</Links>
      </li>
      <li
        className={style.li_l}
        onMouseEnter={() => setCours(true)}
        onMouseLeave={() => setCours(false)}
      >
        {t("cours")}
        {cours ? (
          <div className={style.trans}>
            <ul className={style.subpart}>
              <li className={style.li_l_sub}>
                <Links href={"/presentationDesCours"}>{t("c1")}</Links>
              </li>
              <li className={style.li_l_sub}>
                <Links href={"/tarifsEtReservations"}>{t("c2")}</Links>
              </li>
              <li className={style.li_l_sub}>
                <Links href={"/plageEtEquipe"}>{t("c3")}</Links>
              </li>
            </ul>
          </div>
        ) : undefined}
      </li>
      <li className={style.li_l}>
        <Links href={"/location"}>{t("loc")}</Links>
      </li>
      <li
        className={style.li_l}
        onMouseEnter={() => setPetit(true)}
        onMouseLeave={() => setPetit(false)}
      >
        {t("petit")}
        {petit ? (
          <div className={style.trans}>
            <ul className={style.subpart}>
              <li className={style.li_l_sub}>
                <Links href={"/carteCadeaux"}>{t("p1")}</Links>
              </li>
              <li className={style.li_l_sub}>
                <Links href={"/bretagne"}>{t("p2")}</Links>
              </li>
              <li className={style.li_l_sub}>
                <Links href={"/logement"}>{t("p3")}</Links>
              </li>
            </ul>
          </div>
        ) : undefined}
      </li>
      <li className={style.li_l}>
        <Links href={"/photos"}>{t("photo")}</Links>
      </li>
      <li className={style.li_l}>
        <Links href={"/contact"}>{t("contact")}</Links>
      </li>
    </ul>
  );
}
