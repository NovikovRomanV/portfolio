import React from "react";
import s from "./Contacts.module.css"
import sLink from "./../Common/Styles/Link.module.css"
import sContainer from "../Common/Styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contacts}`}>
                <h2>Contacts</h2>
                <form className={s.form} action="URL">
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <a className={sLink.link} href="#">Send</a>
            </div>
        </div>
    )
}

export default Contacts