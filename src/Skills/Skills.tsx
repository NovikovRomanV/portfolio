import React from "react";
import s from "./Skills.module.css"
import sContainer from "./../Common/Styles/Container.module.css"
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title="HTML" description="Бест оф зе бест, бест оф зе бест, бест оф зе бест"/>
                    <Skill title="CSS" description="Бест оф зе бест, бест оф зе бест, бест оф зе бест, бест оф зе бест, бест оф зе бест"/>
                    <Skill title="JS" description="Бест оф зе бест, бест оф зе бест"/>
                </div>
            </div>
        </div>

    )

}

export default Skills