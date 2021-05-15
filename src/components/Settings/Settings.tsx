import React from "react";
import S from "./Sattings.module.css"
import {NeonButton} from "../Decoration/NeonButton/Neon";

type SettingsPropsType = {

}

export function Settings(props: SettingsPropsType) {
    return (
        <div className={S.settings}>
            <NeonButton title="Settings"/>
        </div>
    );
}