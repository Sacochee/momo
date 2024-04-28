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
          Nom et prénom de la personne effectuant la réservation
            <input
              type="text"
              className={style.input}
              placeholder="Morgan Le Moniteur"
              required
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={style.case}>
            Téléphone
            <div>
              <input
                type="text"
                required
                className={style.input}
                placeholder="Ex :06 20 36 20 36"
                value={tel ? tel : ""}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className={style.case}>
            Email
            <input
              type="email"
              className={style.input}
              placeholder="votre email"
              required
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
