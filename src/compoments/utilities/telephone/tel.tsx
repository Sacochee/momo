"use client"
import Image from "next/image";
import style from "./style.module.css";

export default function Tel() {
  return (
    <a href="tel:+33628051411">
      <div className={style.tel}>
        <Image
          src={"/contact/tel.png"}
          width={150}
          height={150}
          alt="Logo d un téléphone stylisé coco surf"
          loading="lazy"
        />
        <span
          style={{ textDecorationColor: "black", textDecoration: "underline" }}
        >
          Tel : +33 (0)6 28 05 14 11
        </span>
      </div>
    </a>
  );
}
