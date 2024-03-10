"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import Bar from "@/compoments/utilities/barProgress/bar";
import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import { redirect, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ind, setInd] = useState("+33");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [fetch, setFetch] = useState(false);
  const params = useSearchParams();
  const type = params.get("type");

  const named = (n: string) => {
    const regex = /[^a-zA-Z]/;
    if (n.search(regex) != -1) return name;
    else if (n == " ") return name;
    else return n;
  };

  const indset = (n: string) => {
    const regex = /[^0-9+]/;
    if (n.search(regex) != -1) return ind;
    else if (n == " ") return ind;
    else return n;
  };

  const settel = (n: string) => {
    const regex = /[^0-9]/;
    if (n.search(regex) != -1) return tel;
    else if (n == " ") return tel;
    else return n;
  };

  const fetchData = () => {
    setFetch(true);
    if(type == "cour"){

    }else{

    }
    //post
    router.push({ pathname: "/app/sucess", query: { pay: false } });
  };
  if(type != null){
    return (
    <>
      <main className={style.main}>
        <div className={style.head}>
          <h1>Dernière Etape 3/3</h1>
          <Bar tape={3} />
        </div>

        <Image
          src={"/cours/planche2.png"}
          width={86}
          height={100}
          alt="planche de surf stylisé cocosurf"
          quality={100}
          style={{
            marginBottom: "50px",
          }}
        />

        <form
          className={style.form}
          onSubmit={(e) => {
            fetchData();
            e.preventDefault();
          }}
        >
          <div className={style.case}>
            Nom et Prénom de la réservation
            <input
              type="text"
              className={style.input}
              placeholder="Morgan LeMoniteur"
              required
              value={name ? name : ""}
              onChange={(e) => setName(named(e.target.value))}
            />
          </div>
          <div className={style.case}>
            Téléphone
            <div>
              <input
                type="text"
                required
                className={style.ind}
                value={ind}
                onChange={(e) => setInd(indset(e.target.value))}
              />
              <input
                type="text"
                required
                className={style.tel}
                placeholder="Ex :06 20 36 20 36"
                value={tel ? tel : ""}
                onChange={(e) => setTel(settel(e.target.value))}
              />
            </div>
          </div>
          <div className={style.case}>
            Email
            <input
              type="email"
              className={style.input}
              placeholder="Ex : MorganMoniteur@cocosurf.com"
            />
          </div>

          <button className={style.btn}>
            {fetch ? "Chargment ...." : "Valider l'inscription"}
          </button>
        </form>
      </main>
    </>
  );
  }else{
    redirect({pathname : "/app/error", query : {type : "noPay"}})
  }
  
}
