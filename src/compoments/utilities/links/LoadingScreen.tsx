import Image from "next/image"
import style from "./links.module.css"

export default function LoadingScreen() {
  return (
    <div className={style.div}>
        <div className={style.box}>
          <Image 
          src={"/Icons/logoNice.png"}
          width={100}
          height={100}
          alt="logo"
          priority={true}
          loading="eager"
          />
        </div>
        <p>
            Chargement de la page &nbsp;
            <span className={style.s}>.</span>
            <span className={style.s}>.</span>
            <span className={style.s}>.</span>
        </p>
      </div>
  )
}
