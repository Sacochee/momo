import { Link } from "@/navigation";
import Style from "./header.module.css";
import Image from "next/image";

export default function HeaderForm() {
  return (
    <header className={Style.header}>
      <nav className={Style.nav}>
        <Link href={"/"} className={Style.btn}>
          <Fleche />
          <span>
            Revenir au site
          </span>
          
        </Link>
        <div className={Style.box}>
          <Link locale="fr" href={"/inscription"} className={Style.lang}>
            <Image
              src={"/Icons/fr.png"}
              width={16}
              height={11}
              alt="logo du drapeaux Francais (version francaise)"
              priority={true}
            />
          </Link>
          <Link locale="en" href={"/inscription"} className={Style.lang}>
            <Image
              src={"/Icons/en.png"}
              width={16}
              height={11}
              alt="logo du drapeaux Anglais (version anglaise)"
              priority={true}
            />
          </Link>
          <Link locale="de" href={"/inscription"} className={Style.lang}>
            <Image
              src={"/Icons/de.png"}
              width={16}
              height={11}
              alt="logo du drapeaux allemand (version allemande)"
              priority={true}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Fleche(){
  return(
    <div className={Style.div}>
      <span className={Style.span}></span>
      <span className={Style.span}></span>
    </div>
  )
}