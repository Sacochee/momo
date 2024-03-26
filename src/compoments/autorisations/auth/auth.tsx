import { MutableRefObject, useState } from "react";
import style from "./style.module.css";
import { _surfers } from "@/app/[locale]/(compl)/states";
import { tree } from "next/dist/build/templates/app-page";

export default function Auth({
  majeur,
  mineur,
}: {
  majeur: Function;
  mineur: Function;
}) {
  const [photo, setPhoto] = useState<undefined | boolean>();
  const setCheck = (e: HTMLDivElement | HTMLInputElement) => {
    if (!(e instanceof HTMLDivElement)) {
      e.checked = !e.checked;
    } else {
      const input = e.querySelector("input") as HTMLInputElement;
      if (input.checked == false) input.checked = true;
      else input.checked = false;
    }
  };

  const clear = (e: HTMLDivElement | HTMLInputElement) => {
    if (e instanceof HTMLInputElement) {
      const box = e.parentElement?.parentElement?.getElementsByClassName(
        style.checkContainer
      ) as HTMLCollectionOf<HTMLDivElement>;
      if (box) {
        for (let i = 0; i < box.length; i++) {
          box[i].style.color = "black";
          const input = box[i].querySelector("input") as HTMLInputElement;
          if (input) input.style.borderColor = "black";
        }
      }
      const b = e.parentElement?.parentElement?.getElementsByClassName(
        style.erreur
      )[0] as HTMLDivElement;
      if (b) b.style.display = "none";
    } else {
      const box = e.parentElement?.getElementsByClassName(
        style.checkContainer
      ) as HTMLCollectionOf<HTMLDivElement>;
      if (box) {
        for (let i = 0; i < box.length; i++) {
          box[i].style.color = "black";
          const input = box[i].querySelector("input") as HTMLInputElement;
          if (input) input.style.borderColor = "black";
        }
      }
      const b = e.parentElement?.parentElement?.getElementsByClassName(
        style.erreur
      )[0] as HTMLDivElement;
      if (b) b.style.display = "none";
    }
  };

  return (
    <section className={style.section} id="conditions">
      <h2 className={style.h2}>Autorisations</h2>
      <div className={style.underline}></div>
      <ul className={style.ul}>
        <li className={style.li} style={{ position: "relative" }}>
          <h3>Conditions d'annulation</h3>

          <div>
            <p>
              En cas d’annulation causé par de mauvaises
              conditions de surf (absence de vagues, conditions
              impraticables), les cours qui ne pourront pas être effectués
              seront, en accord avec les stagiaires : remplacés par une activité
              de substitution (technique surf, bodyboard, jeux aquatiques, etc)
              OU reportés à une date ultérieure OU annulés et feront l’objet
              d’un avoir ou remboursement.
              <br />
              <br />
              En cas d'annulation ou absence du fait du client : plus de 10
              jours avant le début du stage : remboursement complet // entre 10
              et 5 jours précédent la date de début de stage : encaissement des
              arrhes éventuels // 5 jours avant le début du stage ou durant
              celui-ci : l’intégralité de la prestation sera facturée, pas de
              remboursement (sauf présentation d’un certificat médical)
            </p>
          </div>
          <div id="erreur" className={style.erreur} style={{ display: "none" }}>
            Attention ceci est obligatoire
          </div>
          <div
            className={style.checkContainer}
            onClick={(e) => {
              setCheck(e.currentTarget);
              clear(e.currentTarget);
            }}
          >
            <input
              type="checkbox"
              className={style.checkbox}
              onClick={(e) => {
                setCheck(e.currentTarget);
                clear(e.currentTarget);
              }}
            />
            <span>J'accepte les C.A.</span>
          </div>
        </li>
        <li className={style.li}>
          <h3>Droit à l'image</h3>
          <div>
            <p>
              En souscrivant aux prestations organisées par l’école de surf COCO
              SURF, vous autorisez cette dernière à utiliser les photos et films
              de votre image réalisés pendant votre stage, pour la production de
              tout document publicitaire et ce sans contre partie financière.
            </p>
            <div
              id="erreur"
              className={style.erreur}
              style={{ display: "none" }}
            >
              Attention ceci est obligatoire
            </div>
            <div
              className={style.checkContainer}
              onClick={(e) => {
                setPhoto(true);
                clear(e.currentTarget);
              }}
            >
              <input
                type="checkbox"
                className={style.checkbox}
                name="image"
                value={"true"}
                checked={photo == true ? photo : false}
                onChange={() => setPhoto(true)}
              />
              <span>J’accepte le droit à l’image</span>
            </div>
            <div
              className={style.checkContainer}
              onClick={(e) => {
                setPhoto(false);
                clear(e.currentTarget);
              }}
            >
              <input
                type="checkbox"
                className={style.checkbox}
                name="image"
                value={"false"}
                checked={photo == false ? !photo : false}
                onChange={() => setPhoto(false)}
              />
              <span>Je refuse le droit à l'image </span>
            </div>
          </div>
        </li>

        {mineur() ? (
          <li className={style.li}>
            <h3>Autorisation -18</h3>
            <div>
              <p>
                J'autorise mon enfant / mes enfants à suivre les activités
                décrites sur ce bulletin. Je certifie qu’il(s) est / sont
                médicalement apte à la pratique sportive et qu’il(s) sait /
                savent nager. En conséquence, je dégage COCO SURF de toute
                responsabilité en cas d’accident survenant, ou provoqué par
                suite de leur(s) inaptitudes médicale ou non respect des
                consignes du moniteur.
              </p>

              <div
                id="erreur"
                className={style.erreur}
                style={{ display: "none" }}
              >
                Attention ceci est obligatoire
              </div>

              <div
                className={style.checkContainer}
                onClick={(e) => {
                  setCheck(e.currentTarget);
                  clear(e.currentTarget);
                }}
              >
                <input
                  type="checkbox"
                  className={style.checkbox}
                  onClick={(e) => {
                    setCheck(e.currentTarget);
                    clear(e.currentTarget);
                  }}
                  style={{ width: "30px" }}
                />
                <span style={{ wordWrap: "break-word" }}>
                  Je certifie avoir pris connaissance de ces informations
                </span>
              </div>
            </div>
          </li>
        ) : undefined}
        {majeur() ? (
          <li className={style.li}>
            <h3>Autorisation +18</h3>
            <div>
              <p>
                Je certifie que les participants majeurs sont médicalement aptes
                à la pratique sportive et qu'ils savent nager. En conséquence,
                je dégage COCO SURF de toute responsabilité en cas d’accident
                survenant à l'un des participants, ou provoqué par suite d'une
                inaptitude physique ou médicale ou non respect des consignes du
                moniteur.{" "}
              </p>

              <div
                id="erreur"
                className={style.erreur}
                style={{ display: "none" }}
              >
                Attention ceci est obligatoire
              </div>

              <div
                className={style.checkContainer}
                onClick={(e) => {
                  setCheck(e.currentTarget);
                  clear(e.currentTarget);
                }}
              >
                <input
                  type="checkbox"
                  className={style.checkbox}
                  onClick={(e) => {
                    setCheck(e.currentTarget);
                    clear(e.currentTarget);
                  }}
                  style={{ width: "30px" }}
                />
                <span>
                  Je certifie avoir pris connaissance de ces informations
                </span>
              </div>
            </div>
          </li>
        ) : undefined}
      </ul>
    </section>
  );
}
