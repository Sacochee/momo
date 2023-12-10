import SkullAuth from "./skull";
import style from "./style.module.css"

export default function Auth({
    errorCgv,
    cgv,
    setCgv,
    errorAnul,
    anul,
    setAnul,
    mineur,
    majeur,
    errorMin,
    setMin,
    min,
    errorMaj,
    maj,
    setMaj
} : {
    errorCgv : boolean,
    cgv : string | undefined,
    setCgv : Function,
    errorAnul : boolean,
    anul : string| undefined,
    setAnul : Function,
    mineur : Function,
    min: string | undefined,
    setMin : Function,
    majeur : Function,
    errorMin : boolean,
    errorMaj : boolean,
    maj: string | undefined,
    setMaj : Function
}) {
  return (
    <section>
            <h2>Autorisations</h2>
            <ul>
              <li>
                <p>conditions général de ventes</p>
                {errorCgv ? (
                  <div>Attention ceci est obligatoire</div>
                ) : undefined}
                <input
                  type="checkbox"
                  checked={cgv ? true : false}
                  onChange={(e) => {
                    setCgv(e.target.checked ? "asd" : undefined);
                  }}
                />
                <span>J'accepte les conditions de ventes générals</span>
              </li>
              <li>
                <p>conditions d anulations</p>
                {errorAnul ? (
                  <div>Attention ceci est obligatoire</div>
                ) : undefined}
                <input
                  type="checkbox"
                  checked={anul ? true : false}
                  onChange={(e) =>
                    setAnul(e.target.checked ? "asd" : undefined)
                  }
                />
                <span>J'accepte les condition d anulations</span>
              </li>
              {mineur() ? (
                <li>
                  <p>autorisation parentale</p>
                  {errorMin ? (
                    <div>Attention ceci est obligatoire</div>
                  ) : undefined}
                  <input
                    type="checkbox"
                    checked={min ? true : false}
                    onChange={(e) =>
                      setMin(e.target.checked ? "asd" : undefined)
                    }
                  />
                  <span>J autorise mon enfant a participé a ce cours</span>
                </li>
              ) : undefined}
              {majeur() ? (
                <li>
                  <p>autorisation +18</p>
                  {errorMaj ? (
                    <div>Attention ceci est obligatoire</div>
                  ) : undefined}
                  <input
                    type="checkbox"
                    checked={maj ? true : undefined}
                    onChange={(e) =>
                      setMaj(e.target.checked ? "asd" : undefined)
                    }
                  />
                  <span>Jaccepte la décharge +18</span>
                </li>
              ) : undefined}
            </ul>
          </section>
  )
}
