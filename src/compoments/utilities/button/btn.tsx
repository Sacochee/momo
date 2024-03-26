import Links from "../links/links"
import styles from "./btn.module.css"

type Btn = {
    to : string,
    txt : string,
    outside ?: boolean

}

export default function Btn({to, txt, outside} : Btn) {
  if(outside){
    return(
      <a href={to} className={styles.btn} target="_blank" rel="nofollow">
        <div style={{ margin: "0 10px" }}>{txt}</div>
        <span className={styles.fl}>
        <Fleche />
        </span>
        
      </a>
    )
  }else{
    return (
    <Links href={to as any} className={styles.btn}>
        <div style={{ margin: "0 10px" }}>{txt}</div>
        <div className={styles.fl}>
        <Fleche />
        </div>
    </Links>
  )
  }
  
}


function Fleche() {
    return (
      <div className={styles.fleche}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </div>
    );
  }
  