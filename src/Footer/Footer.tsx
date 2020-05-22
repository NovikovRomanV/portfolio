import React from "react";
import s from "./Footer.module.css"
import sContainer from "../Common/Styles/Container.module.css";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Ivan Ivanov</h2>
                <div className={s.socialNetwork}>
                    <a className={s.link} href="#">vk</a>
                    <a className={s.link} href="#">telegram</a>
                    <a className={s.link} href="#">viber</a>
                    <a className={s.link} href="#">instogram</a>
                </div>
                <p className={s.reserved}>© 2019 All rights reserved</p>
            </div>
        </div>
    )

}

export default Footer