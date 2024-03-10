"use client";
import {
  _NameNoPhoto,
  _accidentError,
  _accidentFiche,
  _conditions,
  _date,
  _errorCondtions,
  _errorPay,
  _payMethode,
  _surfers,
  _time,
  _txtPay,
} from "@/app/[locale]/(compl)/states";
import { useAtom } from "jotai";
import { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "@/navigation";
import LoadingScreen from "@/compoments/utilities/links/LoadingScreen";

export default function ButtonValiderFormCours({
  acidentIsOK,
  payIsOK,
  AuthIsOK,
}: {
  acidentIsOK: Function;
  payIsOK: Function;
  AuthIsOK: Function;
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [surfer] = useAtom(_surfers);
  const [date] = useAtom(_date);
  const [time] = useAtom(_time);
  const [payMethode] = useAtom(_payMethode);
  const [txt] = useAtom(_txtPay);
  const [accident] = useAtom(_accidentFiche);
  const [name] = useAtom(_NameNoPhoto);

  const formSend = () => {
    if (acidentIsOK() == true && payIsOK() == true && AuthIsOK() == true) {
      setLoading(true);
      if (payMethode == "cb") {
        // cb
        const obj = {
          date: date,
          time: time,
          surfer: surfer,
          accident: accident,
          nameNoPhoto: name,
        };
        console.log("send cb pohot ok");
        console.log(obj);
        router.push({pathname : "/app/sucess"})
      } else {
        // no Cb
        
        const obj = {
          date: date,
          time: time,
          surfer: surfer,
          accident: accident,
          payMethode: txt,
          nameNoPhoto: name,
        };
        console.log("send with no photo && with no stripe");
        console.log(obj);
        router.push({pathname : "/app/contact", query: {type : "cour"}});
      }
    } else {
      const e = document.getElementById("erreur");
      e?.scrollIntoView();
    }
  };

  return (
    <button onClick={formSend} className={style.btn}>
      {loading ? <LoadingScreen/> : "Valider"}
    </button>
  );
}

