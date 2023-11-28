import Btn from "@/compoments/comps/btn";
import SliderFull from "@/compoments/comps/sliderFull/sliderFull";
import Footer from "@/compoments/footer/footer";
import Header from "@/compoments/header/header";

export default function Page() {
  return (
    <>
    <Header/>
    
    <main>
     
      <h1>Réservez vos cours de surf dès maintant</h1>
      <h2>Dans un cours de Surf vous avez :</h2>
      <p>
        La bonne Humeur, l’encadrement par un moniteur Diplômé d’Etat, ainsi que
        l’ensemble du matériel sont inclus dans la prestation.
      </p>
      <h2>
        pour réserver : 
      </h2>
      <ol>
        <li>
        Contacter l’école afin de choisir au mieux les horaires de cours et de vérifier les disponibilités
        </li>
        <li>
        Remplir le bulletin d’inscription en ligne, en cliquant ci-dessous
        </li>
      </ol>
      <Btn txt="Inscription" to="/inscription"/>
    </main>
    <Footer/>
    </>
  );
}
