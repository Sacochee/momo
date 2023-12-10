import style from "./style.module.css"

export default function SkulAcident() {
  return (
    <div className={style.skull}>
        <div style={{fontSize:"20px"}}>Fiche Accident</div>
        <div className={style.skull_line}></div>
        <div className={style.skull_line}></div>
        <div className={style.skull_line}></div>
    </div>
  )
}
