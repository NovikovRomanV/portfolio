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
                    <Skill title="HTML" description="The best of the best, the best of the best, the best of the best"/>
                    <Skill title="CSS" description="The best of the best, the best of the best, the best of the best, the best of the best, the best of the best"/>
                    <Skill title="JS" description="The best of the best, the best of the best"/>
                </div>
            </div>
        </div>

    )

}

export default Skills