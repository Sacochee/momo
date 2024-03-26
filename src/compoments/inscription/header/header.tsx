"use client"
import Links from "@/compoments/utilities/links/links";
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import Style from "./header.module.css";
import Image from "next/image";


export default function HeaderForm() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  let pathTOBack ;

  if(path.startsWith("/location")){
    if(path == "/location/inscription")
      pathTOBack = "/location"
    else 
      pathTOBack = "/location/inscription"
  }
  else if (path.startsWith("/tarifsEtReservations")){
    if(path === "/tarifsEtReservations/inscription")
      pathTOBack  = "/tarifsEtReservations"
    else 
      pathTOBack  = "/tarifsEtReservations/inscription"
  }
  else {
    if(type == "loc" || type == "false")
      pathTOBack = "/location"
    else 
      pathTOBack = "/tarifsEtReservations"
  }


  const change = (route: string) => router.replace(path, { locale: route });
  return (
    <header className={Style.header}>
      <nav className={Style.nav}>
        <Links href={pathTOBack} className={Style.btn}>
          <Fleche />
          <span>
            Revenir au site
          </span>
          
        </Links>
        <div className={Style.box}>
          <div onClick={()=>change('fr')} className={Style.lang}>
            <Image
              src={"/Icons/fr.png"}
              width={16}
              height={11}
              alt="logo du drapeaux Francais (version francaise)"
              priority={true}
            />
          </div>
          <div onClick={()=>change('en')} className={Style.lang}>
            <Image
              src={"/Icons/en.png"}
              width={16}
              height={11}
              alt="logo du drapeaux Anglais (version anglaise)"
              priority={true}
            />
          </div>
          <div onClick={()=>change('de')} className={Style.lang}>
            <Image
              src={"/Icons/de.png"}
              width={16}
              height={11}
              alt="logo du drapeaux allemand (version allemande)"
              priority={true}
            />
          </div>
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