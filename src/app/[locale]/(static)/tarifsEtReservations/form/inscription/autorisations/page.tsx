"use client";
import Footer from "@/compoments/footer/footer";
import HeaderForm from "@/compoments/inscription/header/header";
import { use, useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

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
      [errorPay, setErrorPay] = useState(false);
    const cgv = useRef<HTMLInputElement>(null),
      anul = useRef<HTMLInputElement>(null),
      maj = useRef<HTMLInputElement>(null),
      min = useRef<HTMLInputElement>(null),
      pay = useRef<HTMLSelectElement>(null),
      nom = useRef<HTMLInputElement>(null),
      prenom = useRef<HTMLInputElement>(null),
      tel = useRef<HTMLInputElement>(null);

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
      if (nom.current?.value == undefined) {
        console.log(nom.current?.value);
        setErrorNom(true);
        err = true;
      }
      if (prenom.current?.value == undefined) {
        setErrorPrenom(true);
        err = true;
      }
      if (tel.current?.value == undefined) {
        setErrorTel(true);
        err = true;
      }
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
        <main>
          <h1>Vous y etes Presque !</h1>
          <section>
            <h2>Fiche accident</h2>
            <p>Personne a contacter en cas d accident</p>
            <div>
              {errorNom ? (
                <div>Attention ce champs est obligatoire</div>
              ) : undefined}
              <input type="text" placeholder="nom de la personne" ref={nom} />
              {errorPrenom ? (
                <div>Attention ce champs est obligatoire</div>
              ) : undefined}
              <input
                type="text"
                placeholder="prenom de la personne"
                ref={prenom}
              />
              {errorTel ? (
                <div>Attention ce champs est obligatoire</div>
              ) : undefined}
              <input type="text" placeholder="ex : 06 20 71 98 64" ref={tel} />
            </div>
          </section>
          <section>
            <h2>moyen de Paiment</h2>

            <select ref={pay}>
              <option value={"cb"}>Carte bancaires</option>
              <option value="others">autres</option>
            </select>
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
