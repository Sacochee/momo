import style from "./loading.module.css"

export default function Loading() {
  return (
    <div className={style.div}>
        <p>
          La page est en cours de chargement
        </p>
        <p>
          Patientez ....
        </p>
    </div>
  )
}
