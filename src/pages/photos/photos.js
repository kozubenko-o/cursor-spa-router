import React from "react";
import style from "./photos.module.scss"
import dataPhoto from "../../database/photos/photos.json"
import Photo from "./photo";

function Photos() {
    return (
        <div className={style.mainDiv}>
            {dataPhoto.map((p, i) => {
            return (
                <div key={i}>
                    <Photo url={p.url}/>
                </div>
                );
                })
            }
        </div>);
}

export default Photos;