import React from "react";
import s from "./Works.module.css"
import Work from "./Work/Work";
import sContainer from "../Common/Styles/Container.module.css";

function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title="The best of works" description="Bla bla bla best bla bla bla good bla bla"/>
                    <Work title="The best of works" description="Bla bla bla best bla bla bla good bla bla"/>
                </div>
            </div>
        </div>
    )

}

export default Works