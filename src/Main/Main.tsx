import React from "react";
import s from "./Main.module.css"
import sContainer from "./../Common/Styles/Container.module.css"

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )

};

export default Main