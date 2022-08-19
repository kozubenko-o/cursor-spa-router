import React from "react";
import style from "./main.module.scss"
import cursorLogo from "../../access/img/cursor_background.jpg"

function Main()  {
        return (
            <div className={style.container}>
                <span className={style.textLeft}>HW</span>
                <span className={style.textRight}>#25</span>
                <img className={style.img} src={cursorLogo} />
            </div>
        );
}
export default Main;