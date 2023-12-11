"use client"
import { useAtom } from "jotai";
import style from "./style.module.css"
import { _payMethode, _txtPay,_errorPay, paid } from "@/app/[locale]/(compl)/states";


export default function Pay() {
  const [payMethode, setPayMethode]= useAtom(_payMethode)
  const [txtPay , setTxtPay] = useAtom(_txtPay)
  const [errorPay] = useAtom(_errorPay)
  return (
    <section className={style.pay}>
            <h2 className={style.pay_h2}>Moyen de Paiment</h2>

            <select
              className={style.pay_select}
              onChange={(e) => setPayMethode(e.target.value as paid)}
            >
              <option value={undefined}>--</option>
              <option value="cb">Carte bancaires</option>
              <option value="others">Autres</option>
            </select>
            {errorPay ? (
              <div>Attention ce champs est obligatoire</div>
            ) : undefined}
            {payMethode == "others" ? (
              <div>
                <input
                  type="text"
                  value={txtPay ? txtPay : ""}
                  onChange={(e) => setTxtPay(e.target.value)}
                />
              </div>
            ) : undefined}
          </section>
  )
}
