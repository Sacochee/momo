"use client";
import HeaderForm from "@/compoments/inscription/header/header";
import Bar from "@/compoments/utilities/barProgress/bar";
import Image from "next/image";
import style from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import Participant from "@/compoments/location/popup/participants/participant";
import { useAtom } from "jotai";
import { Date, Mat, PaieMethode, participants } from "../../locationAtoms";
import Planche from "@/compoments/location/popup/planche/planche";
import Wet from "@/compoments/location/popup/wetswuit/Wet";
import Body from "@/compoments/location/popup/body/body";
import Recap from "@/compoments/location/recap/recap";
import Paie from "@/compoments/location/paie/Paie";
import { useRouter } from "@/navigation";
import LoadingScreen from "@/compoments/utilities/links/LoadingScreen";

export default function Page() {
  const router = useRouter();
  //qaund ?
  const [date, setDate] = useAtom(Date);
  //qui ?
  const [nb, setNb] = useState<number>();
  const [part, setPart] = useState(false);
  const [partici, setPartici] = useAtom(participants);
  const [a, setA] = useState(false);
  // quoi ?
  const section = useRef(null);
  const [planche, setPlanche] = useState(false);
  const [wet, setWet] = useState(false);
  const [body, setBody] = useState(false);
  const [mat, setMat] = useAtom(Mat);
  const [paie, setPaie] = useAtom(PaieMethode);
  const pay = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      date.date != undefined &&
      date.heure != undefined &&
      partici != undefined &&
      partici.length == nb
    ) {
      const element = section.current! as HTMLDivElement;
      element.style.display = "flex";
    } else {
      const element = section.current! as HTMLDivElement;
      element.style.display = "none";
    }
  }, [nb, date, partici, a]);

  useEffect(() => {
    if (
      mat.body != undefined ||
      mat.planche != undefined ||
      mat.wet != undefined
    ) {
      const div = pay.current! as HTMLDivElement;
      div.style.display = "flex";
    } else {
      const div = pay.current! as HTMLDivElement;
      div.style.display = "none";
    }
  }, [mat]);

  const main = useRef(null);

  const activePopUp = () => {
    const el = main.current! as HTMLDivElement;
    el.style.display = "none";
  };

  const desactivePopUp = () => {
    const el = main.current! as HTMLDivElement;
    el.style.display = "initial";
  };

  const valider = () => {
    setError(false);
    if (
      partici != undefined &&
      (mat.body != undefined ||
        mat.planche != undefined ||
        mat.wet != undefined) &&
      paie != undefined
    ) {
      if (paie.type == "autre") {
        if (paie.autre != undefined) {
          setLoading(true);
          router.push("/location/inscription/autorisation");
        } else setError(true);
      } else {
        router.push("/location/inscription/autorisation");
        setLoading(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.wrapper}>
      {part && (
        <Participant
          nb={nb!}
          setState={() => {
            desactivePopUp();
            setPart(false);
          }}
          setA={setA}
        />
      )}
      {planche && (
        <Planche
          off={() => {
            setPlanche(false);
            desactivePopUp();
          }}
        />
      )}
      {wet && (
        <Wet
          off={() => {
            setWet(false);
            desactivePopUp();
          }}
        />
      )}
      {body && (
        <Body
          off={() => {
            setBody(false);
            desactivePopUp();
          }}
        />
      )}
      <div ref={main}>
        <HeaderForm />
        <main className={style.main}>
          <div className={style.head}>
            <span style={{ marginBottom: "15px" }}>
              Bulletin de location
              <br />
              Etape 1/3
            </span>

            <Bar tape={1} />
          </div>
          <div className={style.tape}>
            <div className={style.center}>
              <h2>Quand ?</h2>
              <div className={style.center} style={{ marginBottom: "20px" }}>
                Date de location
                <input
                  type="date"
                  className={style.input}
                  style={{ marginTop: "10px" }}
                  value={date.date ? date.date : ""}
                  onChange={(e) => {
                    setDate({ ...date, date: e.target.value });
                  }}
                />
              </div>
              <div className={style.center} style={{ marginBottom: "20px" }}>
                Heure convenue avec l'école
                <input
                  type="time"
                  className={style.input}
                  style={{ marginTop: "10px" }}
                  value={date.heure ? date.heure : ""}
                  onChange={(e) => {
                    setDate({ ...date, heure: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className={style.center}>
              <h2>Qui ?</h2>
              <div className={style.qui}>
                Nombre de participants
                <input
                  type="number"
                  min={1}
                  className={style.inputNb}
                  value={nb ? nb : ""}
                  onChange={(e) => {
                    setNb(Number.parseInt(e.target.value));
                  }}
                />
                <button
                  disabled={
                    nb == undefined ||
                    nb == 0 ||
                    Number.isNaN(nb)
                   
                      ? true
                      : false
                  }
                  className={style.btn}
                  onClick={() => {
                    setPart(true);
                    activePopUp();
                  }}
                >
                  { partici?.length == nb ? "Modifier" : "Suivant"}
                </button>
              </div>
            </div>
          </div>

          <section className={`${style.center} ${style.section}`} ref={section}>
            <h2>Quoi ?</h2>
            <Matos
              setPlanche={() => {
                setPlanche(true);
                activePopUp();
              }}
              setWet={() => {
                setWet(true);
                activePopUp();
              }}
              setBody={() => {
                setBody(true);
                activePopUp();
              }}
            />
            <div ref={pay} className={style.pay}>
              <Recap />
              <Paie err={error}/>
              {error && (
                <div style={{ color: "red" }}>Erreur, vérifier vos saisies</div>
              )}
              <button className={style.btn} onClick={valider}>
                {loading && <LoadingScreen />}
                Valider
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function Matos({
  setPlanche,
  setWet,
  setBody,
}: {
  setPlanche: () => void;
  setWet: () => void;
  setBody: () => void;
}) {
  const [mat, setMat] = useAtom(Mat);
  const [countPlanche, setCountPlanche] = useState(0);
  const [countWet, setCountWet] = useState(0);
  const [countBody, setCountBody] = useState(0);

  useEffect(() => {
    let p = 0;
    let w = 0;
    let b = 0;

    mat.planche?.forEach((item) => (p += item.quantite));
    mat.wet?.forEach((item) => (w += item.quantite));
    mat.body?.forEach((item) => (b += item.quantite));
    setCountPlanche(p);
    setCountBody(b);
    setCountWet(w);
  }, [mat]);

  return (
    <div className={style.center}>
      <div className={style.chose}>
        <div className={style.imageContainer}>
          <Image
            src={"/loc/planche-de-surf.png"}
            width={22}
            height={57}
            alt="Planche de surf stylisé cocosurf"
          />
        </div>

        <div className={style.txt}>
          Planche de surf + leash
          <div className={style.desc}>
            
            <span>quantité: {countPlanche}</span>
          </div>
        </div>
        <button className={style.bouton} onClick={() => setPlanche()}>
          <Croix />
        </button>
      </div>
      <div className={style.chose}>
        <div className={style.imageContainer}>
          <Image
            src={"/loc/combie.png"}
            width={24}
            height={50}
            alt="déssin de Combinaison"
          />
        </div>
        <div className={style.txt}>
          Combinaison intégrale
          <br />
          ou shorty
          <div className={style.desc}>
            <span>quantité: {countWet}</span>
          </div>
        </div>
        <button className={style.bouton} onClick={() => setWet()}>
          <Croix />
        </button>
      </div>
      <div className={style.chose}>
        <div className={style.imageContainer}>
          <Image
            src={"/loc/body.png"}
            width={33}
            height={55}
            alt="déssin d une planche de Bodyboard"
          />
        </div>

        <div className={style.txt}>
          Bodyboard + leash
          <div className={style.desc}>
            <span>quantité: {countBody} </span>
          </div>
        </div>
        <button className={style.bouton} onClick={() => setBody()}>
          <Croix />
        </button>
      </div>
    </div>
  );
}

function Croix() {
  return (
    <div className={style.croix}>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  );
}
