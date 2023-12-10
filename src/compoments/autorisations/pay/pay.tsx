"use client"
import style from "./style.module.css"

export default function Pay({
    payMethode,
    setPayMethode,
    errorPay,
    txtPay,
    setTxtPay,
}:
{
    payMethode : string| undefined,
    setPayMethode : Function;
    errorPay : boolean,
    txtPay : string | undefined;
    setTxtPay: Function
}
) {
  return (
    <section className={style.pay}>
            <h2 className={style.pay_h2}>Moyen de Paiment</h2>

            <select
              className={style.pay_select}
              onChange={(e) => setPayMethode(e.target.value)}
            >
              <option value={""}>--</option>
              <option value={"cb"}>Carte bancaires</option>
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
