import React from "react";
import s from "./Work.module.css"
import sLink from "./../../Common/Styles/Link.module.css"

type PropsType = {
    title: string
    description: string
}

function Work(props: PropsType) {
    return (
        <div className={s.work}>
            <div className={s.iconBlock}>
                <div className={s.icon}></div>
                <a className={sLink.link} href="#">watch</a>
            </div>
            <div className={s.titleBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    )
}

export default Work