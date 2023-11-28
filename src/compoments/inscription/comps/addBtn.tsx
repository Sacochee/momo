import style from "./style.module.css"


export default function AddBtn() {
  return (
    <div className={style.container}>
        <p className={style.txt}>
        Ajouter un participant
        </p>
        <div className={style.add}>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </div>
    </div>
  )
}
