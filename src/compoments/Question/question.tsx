"use client";
import style from "./style.module.css";
import {  ReactNode, useEffect, useRef, useState } from "react";

export default function Question({
  question,
  children,
}: {
  question: string;
  children?: ReactNode;
}) {
  const [bool, setBool] = useState(true);
  const ref = useRef<null | HTMLDivElement>(null);

  const clic = () => {
    setBool(bool ? false : true);
    if (ref.current) {
      (ref.current as HTMLDivElement).classList.toggle(style.active);
      console.log("d");
    }
  };

  useEffect(() => {
    setBool(false);
  }, []);

  return (
    <div className={style.q} onClick={clic}>
      <div className={style.div}>
        <h2>{question}</h2>
        <div className={style.plus} ref={ref}>
          <span></span>
          <span></span>
        </div>
      </div>
      {bool && <div className={style.children}>{children}</div>}
    </div>
  );
}
