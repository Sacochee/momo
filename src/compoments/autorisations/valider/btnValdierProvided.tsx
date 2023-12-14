"use client"
import { useAtom } from "jotai";
import {
  _surfers,
  _accidentFiche,
  _errorCondtions,
  _conditions,
  _NameNoPhoto,
  _payMethode,
  _txtPay,
  _errorPay,
  _accidentError,
} from "@/app/[locale]/(compl)/states";
import ButtonValiderFormCours from "./btnValider";

export default function BtnValiderProvider() {
  const [data] = useAtom(_surfers);
  const [accidentFiche] = useAtom(_accidentFiche);
  const [error, setErrorB] = useAtom(_accidentError);
  const [pay] = useAtom(_payMethode);
  const [txt] = useAtom(_txtPay);
  const [, setErr] = useAtom(_errorPay);
  const [conditons] = useAtom(_conditions);
  const [err, setError] = useAtom(_errorCondtions);
  const [name] = useAtom(_NameNoPhoto);

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
    
    setErrorB({
      errorNom : accidentFiche.nom == undefined ,
      errorPremon: accidentFiche.prenom == undefined,
      errorTel : accidentFiche.tel == undefined
    })
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
    setError({
      cgv : conditons.cgv ? false : true, 
      anul : conditons.anul ? false : true, 
      min : (conditons.min == mineur()) ? false : true,
      maj: (conditons.maj == majeur()) ? false : true,
      photo : verifPhoto()
    })
    if(conditons.cgv == true && conditons.anul == true && conditons.min == mineur() && conditons.maj == majeur() && verifPhoto() == false)
      return true
    else
      return false
    
  }
  const verifPhoto = () =>{
    if(conditons.photo == false){
      if(name == undefined)return true
      else return false
    }else return false
  }
  return(
    <ButtonValiderFormCours AuthIsOK={AuthIsOK} acidentIsOK={acidentIsOK} payIsOK={payIsOK}/>
  )
}
