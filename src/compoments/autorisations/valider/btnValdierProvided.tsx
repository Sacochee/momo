"use client";
import { useAtom } from "jotai";
import {
  _surfers,
  _accidentFiche,
  _payMethode,
  _txtPay,
  _errorPay,
  _accidentError,
} from "@/app/[locale]/(compl)/states";
import ButtonValiderFormCours from "./btnValider";
import ClassNameOf from "@/compoments/autorisations/auth/style.module.css";

export default function BtnValiderProvider() {
  const [data] = useAtom(_surfers);
  const [accidentFiche] = useAtom(_accidentFiche);
  const [error, setErrorB] = useAtom(_accidentError);
  const [pay] = useAtom(_payMethode);
  const [txt] = useAtom(_txtPay);
  const [, setErr] = useAtom(_errorPay);

  const mineur = () => {
    let bool = false;
    data.forEach((item: any) => {
      if (item.age < 18) {
        bool = true;
      }
    });
    return bool;
  };

  const majeur = () => {
    let bool = false;
    data.forEach((item: any) => {
      if (item.age >= 18) {
        bool = true;
      }
    });
    return bool;
  };

  function acidentIsOK() {
    console.log(accidentFiche.tel == undefined)
    setErrorB({
      errorNom: accidentFiche.nom == undefined,
      errorPremon: accidentFiche.prenom == undefined,
      errorTel: accidentFiche.tel == undefined,
    });
    if (
      error.errorNom == false &&
      error.errorPremon == false &&
      error.errorTel == false
    ) {
      return true;
    } else {
      return false;
    }
  }

  function payIsOK() {
    if (pay == "null") {
      setErr(true);
      return false;
    } else if (pay == "others") {
      if (txt == undefined) {
        setErr(true);
        return false;
      } else {
        setErr(false);
        return true;
      }
    } else {
      setErr(false);
      return true;
    }
  }

  function AuthIsOK() {
    let err = false;
    let inputs: HTMLInputElement[] = [];
    let photo: HTMLInputElement[] = [];
    const div = document.getElementById("conditions") as HTMLDivElement;
    div.querySelectorAll("input").forEach((item) => {
      if (item.name == "image") photo = [...photo, item];
      else inputs = [...inputs, item];
    });

    inputs.forEach((item) => {
      if (item.checked == true) {
        const i = item.parentElement?.parentElement?.getElementsByClassName(
          ClassNameOf.erreur
        )[0] as HTMLDivElement | undefined;
        if (i!= undefined) {i.style.display = "none";}
        const span = item.parentElement as HTMLDivElement
        if(span) span.style.color = "black"
        item.style.border = "1px solid black"
      }else {
        const i = item.parentElement?.parentElement?.getElementsByClassName(
          ClassNameOf.erreur
        )[0] as HTMLDivElement | undefined;
        console.log(i)
        if (i != undefined) {i.style.display = "initial";}
        const span = item.parentElement as HTMLDivElement
        if(span) span.style.color = "red"
        item.style.border = "1px solid red"
        err = true
      }
    });

    if(photo[0].checked == true || photo[1].checked == true){
      const i = photo[0].parentElement?.parentElement?.getElementsByClassName(
        ClassNameOf.erreur
      )[0] as HTMLDivElement | undefined;
      console.log(i)
      if (i != undefined) {i.style.display = "none";}
      const span = photo[0].parentElement as HTMLDivElement
      if(span) span.style.color = "black"
      const spann = photo[1].parentElement as HTMLDivElement
      if(spann) spann.style.color = "black"
      photo[0].style.border = "1px solid black"
      photo[1].style.border = "1px solid black"
    }else{
      const i = photo[0].parentElement?.parentElement?.getElementsByClassName(
        ClassNameOf.erreur
      )[0] as HTMLDivElement | undefined;
      console.log(i)
      if (i != undefined) {i.style.display = "initial";}
      const span = photo[0].parentElement as HTMLDivElement
      if(span) span.style.color = "red"
      const spann = photo[1].parentElement as HTMLDivElement
      if(spann) spann.style.color = "red"
      photo[0].style.border = "1px solid red"
      photo[1].style.border = "1px solid red"
      err = true
    }

    return !err
  }
  return (
    <ButtonValiderFormCours
      AuthIsOK={AuthIsOK}
      acidentIsOK={acidentIsOK}
      payIsOK={payIsOK}
    />
  );
}
