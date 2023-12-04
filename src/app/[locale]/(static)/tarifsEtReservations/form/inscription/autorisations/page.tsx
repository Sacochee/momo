"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import style from "./style.module.css"

export default function page() {
  const [d, setD] = useState(sessionStorage.getItem("Data"));
  if (d != null) {
    const data = JSON.parse(d);
    console.log(data);
    const [errorCgv, setErrorCgv] = useState(false),
      [errorAnul, setErrorAnul] = useState(false),
      [errorMaj, setErrorMaj] = useState(false),
      [errorMin, setErrorMin] = useState(false),
      [errorNom, setErrorNom] = useState(false),
      [errorPrenom, setErrorPrenom] = useState(false),
      [errorTel, setErrorTel] = useState(false),
      [errorPay, setErrorPay] = useState(false),
      [payMethode, setPayMethode] = useState(false)
    const cgv = useRef<HTMLInputElement>(null),
      anul = useRef<HTMLInputElement>(null),
      maj = useRef<HTMLInputElement>(null),
      min = useRef<HTMLInputElement>(null),
      pay = useRef<HTMLSelectElement>(null),
      nom = useRef<HTMLInputElement>(null),
      prenom = useRef<HTMLInputElement>(null),
      tel = useRef<HTMLInputElement>(null);

    const changePay = () =>{
      if(pay.current?.value == "others")
        setPayMethode(true)
      else  
        setPayMethode(false)
    }

    const majeur = () => {
      let bool = false;
      data.surfers.forEach((item: any) => {
        if (item.age >= 18) {
          bool = true;
        }
      });
      return bool;
    };
    const mineur = () => {
      let bool = false;
      data.surfers.forEach((item: any) => {
        if (item.age < 18) {
          bool = true;
        }
      });
      return bool;
    };

    const nextState = () => {
      setErrorAnul(false);
      setErrorCgv(false);
      setErrorMaj(false);
      setErrorMin(false);
      setErrorNom(false);
      setErrorPay(false);
      setErrorPrenom(false);
      setErrorTel(false);
      let err = false;
      if (anul.current?.checked != true) {
        setErrorAnul(true);
        err = true;
      }
      if (cgv.current?.checked != true) {
        setErrorCgv(true);
        err = true;
      }
      if (min.current?.checked != true && mineur() == true) {
        setErrorMin(true);
        err = true;
      }
      if (maj.current?.checked != true && majeur() == true) {
        setErrorMaj(true);
        err = true;
      }
      if (pay.current?.value == undefined) {
        setErrorPay(true);
        err = true;
      }
      if (nom.current?.value == "") {
        console.log(nom.current?.value);
        setErrorNom(true);
        err = true;
      }
      if (prenom.current?.value == "") {
        setErrorPrenom(true);
        err = true;
      }
      if (tel.current?.value == "") {
        setErrorTel(true);
        err = true;
      }
      console.log(prenom.current?.value)
      if (err == false) {
        console.log(pay.current?.value);
        if (pay.current?.value == "cb") {
          console.log("here");
          console.log(data.time);
          const json = {
            time: data.time,
            date: data.date,
            payMethode: "cb",
            surfers: data.surfers,
            accidentFiche: {
              nom: nom.current?.value,
              prenom: prenom.current?.value,
              tel: tel.current?.value,
            },
          };
          createSess(json);
          
        } else {
        }
      } else {
        console.log("elese");
      }
    };
    return (
      <>
        <HeaderForm />
        <main className={style.main}>
          <h1>Vous y etes Presque !</h1>
          <section className={style.accident}>
            <h2 className={style.accident_h2}>Fiche accident</h2>
            <p className={style.accident_p}>Personne a contacter en cas d accident</p>
            <div className={style.accident_input}>
              
              <p className={style.label_input}>
                Nom
              </p>
           
              
              <input type="text" placeholder="Ex : LePompier" ref={nom} className={style.input}/>
              <div style={errorNom ? undefined : {visibility:"hidden"}} className={style.errorName}>Attention ce champs est obligatoire</div>

              <p className={style.label_input}>
              Prenom
              </p>
              <input
                type="text"
                placeholder="Ex : Sam"
                ref={prenom}
                className={style.input}
              />
              <div style={errorPrenom ? undefined : {visibility:"hidden"}} className={style.errorName}>Attention ce champs est obligatoire</div>

              <p className={style.label_input}>
                Numéro de téléphone
              </p>
            
              <input type="text" placeholder="ex : 06 20 71 98 64" ref={tel}  className={style.input}/>
              <div style={errorTel ?  undefined :{visibility:"hidden"}} className={style.errorName}>Attention ce champs est obligatoire</div>

            </div>
          </section>
          <section className={style.pay}>
            <h2 className={style.pay_h2}>Moyen de Paiment</h2>

            <select ref={pay} className={style.pay_select} onChange={changePay}>
              <option value={"cb"}>Carte bancaires</option>
              <option value="others">Autres</option>
            </select>
            {payMethode ? (
              <div>
                <input type="text" />
              </div>
            ) : undefined}
          </section>
          <section>
            <h2>Autorisations</h2>
            <ul>
              <li>
                <p>conditions général de ventes</p>
                {errorCgv ? (
                  <div>Attention ceci est obligatoire</div>
                ) : undefined}
                <input type="checkbox" ref={cgv} />
              </li>
              <li>
                <p>conditions d anulations</p>
                {errorAnul ? (
                  <div>Attention ceci est obligatoire</div>
                ) : undefined}
                <input type="checkbox" ref={anul} />
              </li>
              {mineur() ? (
                <li>
                  <p>autorisation parentale</p>
                  {errorMin ? (
                    <div>Attention ceci est obligatoire</div>
                  ) : undefined}
                  <input type="checkbox" ref={min} />
                </li>
              ) : undefined}
              {majeur() ? (
                <li>
                  <p>autorisation +18</p>
                  {errorMaj ? (
                    <div>Attention ceci est obligatoire</div>
                  ) : undefined}
                  <input type="checkbox" ref={maj} />
                </li>
              ) : undefined}
            </ul>
          </section>
          <button onClick={nextState}>Valider</button>
        </main>
        <Footer />
      </>
    );
  } else {
    return <div>Error</div>;
  }
}

async function createSess(json: any) {
  const st = loadStripe(
    "pk_test_51OIuhCIYV55vLMC7QFKsjsUqCABzRVPIipLD650KVJQHOyx0iquQBsgIh7xosXQFD3rHCxBXHtgZ7mknlUr7nwat00IQSoWRfo"
  );
  const stripe = await st;
  const checkout = await axios.post(
    "http://localhost:8080/stripe/checkout",
    { data: JSON.stringify(json) },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(checkout)
  const result = await stripe?.redirectToCheckout({
    sessionId: checkout.data.id,
  });
  if (result?.error) {
    console.log(result.error);
  }
}

//
