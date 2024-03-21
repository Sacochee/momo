"use client"
import { useAtom } from "jotai";
import style from "./style.module.css"
import { _payMethode, _txtPay,_errorPay, paid } from "@/app/[locale]/(compl)/states";
import { useEffect } from "react";


export default function Pay() {
  const [payMethode, setPayMethode]= useAtom(_payMethode)
  const [txtPay , setTxtPay] = useAtom(_txtPay)
  const [errorPay] = useAtom(_errorPay)
  
  return (
    <section className={style.pay}>
            <h2 className={style.pay_h2}>Moyen de Paiment</h2>

            <select
              className={`${style.pay_select} ${errorPay ? style.inputError : undefined}`}
              onChange={(e) => setPayMethode(e.target.value as paid)}
            >
              <option value={"null"} className={style.option}>--</option>
              <option value="cb" className={style.option}>Carte bancaire</option>
              <option value="others" className={style.option}>Autre</option>
            </select>
            {errorPay ? (
              <div  id="erreur" className={style.error}>Attention ce champs est obligatoire</div>
            ) : undefined}
            {payMethode == "others" ? (
              <div>
                <div className={style.txt}>
                  Moyen de paiement convenu  avec l'équipe
                </div>
                <input
                  type="text"
                  value={txtPay ? txtPay : ""}
                  onChange={(e) => setTxtPay(e.target.value)}
                  className={`${style.inputTxt} ${errorPay ? style.inputError : undefined}`}
                />
              </div>
            ) : undefined}
          </section>
  )
}
