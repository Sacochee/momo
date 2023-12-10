"use client";
import { useState } from "react";
import ImageThreeBrP from "./imagesTrois";
import style from "./swap.module.css";
import Image from "next/image";

type Data = {
  name: string;
  width: number;
  height: number;
  alt: string;
};

export default function Swap({ data }: { data: Data[] }) {
  const max = data.length;
  const [i, setI] = useState(0);
  const change = (n: -1 | 1) => {
    if (i + n < max && i + n > 0) {
      setI(i + n);
    } else if (i + n < 0) {
      setI(max - 1);
    } else {
      setI(0);
    }
  };
  const [droite, setDroite] = useState("White");
  const [gauche, setGauche] = useState("White");
  return (
    <section className={style.content}>
      <div className={style.absolute}>
        <div
          onClick={() => change(+1)}
          className={style.btn}
          onMouseEnter={() => setGauche("Black")}
          onMouseLeave={() => setGauche("White")}
        >
          <Image
            src={`/Icons/select${gauche}.png`}
            width={20}
            height={20}
            alt="fleche qui pointe vers la gauche (arrière)"
          />
        </div>{" "}
        <div
          onClick={() => change(-1)}
          className={style.btn}
          onMouseEnter={() => setDroite("Black")}
          onMouseLeave={() => setDroite("White")}
        >
          <Image
            src={`/Icons/select${droite}.png`}
            width={20}
            height={20}
            alt="fleche qui pointe vers la droite (suivant)"
          />
        </div>
      </div>

      <ImageThreeBrP
        src={`/images/${data[i].name}`}
        brp1={1023}
        brp2={600}
        size={{
          www: 1100,
          ww: 600,
          w: 300,
          hhh: (1100 * data[i].height) / data[i].width,
          hh: (600 * data[i].height) / data[i].width,
          h: (300 * data[i].height) / data[i].width,
        }}
        alt={data[i].alt}
      />
    </section>
  );
}
