import style from "./styleBar.module.css"

export default function Bar({tape } : {tape : 1 | 2 | 3}) {
  if(tape == 1){
    return(
        <div className={style.main}>
            <span className={style.noir}></span>
            <span className={style.white}></span>
            <span className={style.white}></span>
        </div>
    )
    
  }
  else if(tape == 2){
    return(
        <div className={style.main}>
            <span className={style.noir}> </span>
            <span className={style.noir}> </span>
            <span className={style.white}> </span>
        </div>
    )   
    
  }else{
    return(
        <div className={style.main}>
            <span className={style.noir}></span>
            <span className={style.noir}></span>
            <span className={style.noir}></span>
        </div>
    )
    
  }
}


