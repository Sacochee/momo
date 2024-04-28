"use client";
import { useEffect, useState } from "react";
import style from "./video.module.css";

export default function Video({s, bool} : {s : [string, string, string], bool: boolean}) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [src, setSrc] = useState(s[0]);
    
  useEffect(() => {
    if (screen.width > 640) {
      if (screen.width > 1280) {
        setSrc(s[1]);
      }
      setLoaded(true);
    }
  });

  return (
    <div className={style.div}>
      {loaded ? (
        <video
          autoPlay = {bool}
          className={style.video}
          tabIndex={0}
          controls
          controlsList={"nodownload"}
          src={`/video/${src}.mp4`}
        ></video>
      ) : (
        <video
          autoPlay = {bool}
          className={style.video}
          tabIndex={1}
          controls
          controlsList={"nodownload"}
          src={`/video/${s[2]}.mp4`}
        ></video>
      )}
    </div>
  );
}

