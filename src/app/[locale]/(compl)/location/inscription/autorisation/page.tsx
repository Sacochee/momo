"use client";
import HeaderForm from "@/compoments/inscription/header/header";
import style from "./page.module.css";
import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { Date, Mat, PaieMethode, participants } from "../../../locationAtoms";
import { redirect, useRouter } from "@/navigation";
import LoadingScreen from "@/compoments/utilities/links/LoadingScreen";

export default function Page() {
  const [particip,spa] = useAtom(participants);
  const [mat, sm] = useAtom(Mat);
  const [pay, sp] = useAtom(PaieMethode);
  const [date,sd] = useAtom(Date);

  if (
    particip == undefined ||
    (mat.body == undefined && mat.planche == undefined && mat.wet == undefined) ||
    pay == undefined ||
    (date.date == undefined && date.heure == undefined)
  ) {
    //redirect({ pathname: "/app/error", query: { type: "NoPay", from : "loc" } });
  } else {
    const main = useRef<HTMLDivElement>(null);
    const [error, setError] = useState(false);
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const valider = () => {
      setError(false);
      let err = false;
      let elem: HTMLInputElement | undefined = undefined;
      const div = main.current!;
      div.querySelectorAll("input").forEach((item) => {
        if (item.checked == false) {
          err = true;
          item.focus();
          const style = item.parentElement?.style!;
          style.color = "red";
          item.style.borderColor = "red";
          elem = item;
        } else {
          const style = item.parentElement?.style!;
          style.color = "rgb(10,10,10)";
          item.style.borderColor = "rgb(10,10,10)";
        }
      });

      if (elem != undefined) {
        const e = elem as HTMLInputElement;
        e.focus();
      }

      if (err) {
        setError(true);
      } else {
        setLoading(true)
        if(pay.type == "autre"){
          router.push({pathname:"/app/contact", query:{type:"loc"}})
        }else{
          router.push({pathname:"/app/sucess", query:{pay:"false"}})
        }
        
      }
    };

    const reset = ()=>{
      spa(undefined)
      sm({planche : undefined, body : undefined, wet :undefined})
      sp(undefined)
      sd({date : undefined, heure : undefined})
    }

    const setCheck = (e : HTMLDivElement)=>{
      const box = e.querySelector("input") as HTMLInputElement;
      if(box.checked)
        box.checked = false
      else
        box.checked = true  
    }

    return (
      <div>
        <HeaderForm />
        <main className={style.main} ref={main}>
          <h2>Autorisations</h2>
          <section>
            <article>
              <div className={style.article}>
                <h3>Autorisation + 18 ans</h3>
                <p>
                  Je certifie que les participants majeurs sont médicalement
                  aptes à la pratique sportive et qu'ils savent nager. En
                  conséquence, je dégage COCO SURF de toute responsabilité en
                  cas d’accident survenant à l'un des participants, ou provoqué
                  par suite d'une inaptitude physique ou médicale ou ma
                  méconnaissance du milieu. Je déclare avoir pris connaissance
                  des « conditions générales de vente » disponible dans le
                  véhicule de l’école et sur le site web :
                  www.cocosurf-charentemaritime.com
                </p>
              </div>
              <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                <input type="checkbox" />
                <span>
                  Je certifie que les adultes du groupe ont pris connaissance et
                  valident ces informations
                </span>
              </div>
            </article>
            <article>
              <div className={style.article}>
                <h3>Autorisation Parentale (-18 ans)</h3>
                <p>
                  J'autorise mon enfant / mes enfants à suivre les activités
                  décrites sur ce bulletin. Je certifie qu’il/elle est
                  médicalement apte à la pratique sportive et qu’il/elle sait
                  nager. En conséquence, je dégage COCO SURF de toute
                  responsabilité en cas d’accident lui survenant, ou provoqué
                  par suite de son inaptitude médicale ou ma méconnaissance du
                  milieu. Je déclare avoir pris connaissance des « conditions
                  générales de vente » disponible dans le véhicule de l’école et
                  sur le site web : www.cocosurf-charentemaritime.com
                </p>
              </div>
              <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                <input type="checkbox" />
                <span>
                  Si des enfants sont compris dans le bulletin j'autorise mon
                  enfant / mes enfants à louer du matériel
                </span>
              </div>
            </article>
          </section>
          <h2>Consignes de sécurités</h2>
          <section>
            <article>
              <div className={style.article}>
                <h3>Les interdits :</h3>
                <p>
                  En cas de casse ou de dégradation du matériel, une somme
                  correspondant à la réparation sera demandées. Pour éviter
                  cela, mais également pour votre propre sécurité, il est
                  formellement interdit de :
                </p>
              </div>
              <div>
                <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                  <input type="checkbox" />
                  <span>
                    Trainer les planches sur le sable ou dans le chemin (porter
                    à deux ou se servir de la poigée)
                  </span>
                </div>
                <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                  <input type="checkbox" />
                  <span>
                    Laisser une planche chauffer au soleil (merci de la
                    retourner ailerons vers le haut)
                  </span>
                </div>
                <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                  <input type="checkbox" />
                  <span>
                    Surfer proche des autres (5 mètres d'écart minimum)
                  </span>
                </div>
                <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                  <input type="checkbox" />
                  <span>Surfer une vague de bord très creuse (shorebreak)</span>
                </div>
              </div>
            </article>
            <article>
              <div className={style.article}>
                <h3>Les conseils :</h3>
              </div>
              <div>
                <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                  <input type="checkbox" />
                  <span>
                    N'hésitez pas à venir voir les moniteurs pour demander
                    conseil sur le choix de la zone de surf
                  </span>
                </div>
              </div>
              <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                <input type="checkbox" />
                <span>
                  Restez surfer dans les mousses si vous êtes débutants ou si
                  les vagues sont trop fortes au large
                </span>
              </div>
              <div className={style.box} onClick={(e)=>setCheck(e.currentTarget)}>
                <input type="checkbox" />
                <span>
                  Gardez de l'eau à la taille maximum si les vagues dépassent 80
                  cm
                </span>
              </div>
            </article>
          </section>
          {error && (
            <div style={{ color: "red" }}>
              Vous devez accepter toutes les conditions
            </div>
          )}
          <button onClick={valider}>{loading ? <LoadingScreen/> : "valider"}</button>
        </main>
      </div>
    );
  }
}
