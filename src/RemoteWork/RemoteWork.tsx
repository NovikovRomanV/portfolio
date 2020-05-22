import React from "react";
import s from "./RemoteWork.module.css";
import sContainer from "../Common/Styles/Container.module.css";
import sLink from "./../Common/Styles/Link.module.css"
function RemoteWork() {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${sContainer.container} ${s.remoteWork}`}>
                <h2>I will consider options for remote work</h2>
                <a className={sLink.link} href="#">Hire me</a>
            </div>
        </div>
    )

}

export default RemoteWork