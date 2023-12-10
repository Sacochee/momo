import style from "./style.module.css"

export default function SkullAuth() {
  return (
    <div className={style.skull}>
        <div style={{fontSize:"20px"}}>Autorisations</div>
        <div className={style.skull_line}></div>
        <div className={style.skull_line}></div>
        <div className={style.skull_line}></div>
        <div className={style.skull_line}></div>
    </div>
  )
}
