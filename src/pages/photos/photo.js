import React from "react";
import style from "./photos.module.scss"

function Photo(props) {
    return (
      <img className={style.onePhoto} src={props.url} />
    );
}

export default Photo;