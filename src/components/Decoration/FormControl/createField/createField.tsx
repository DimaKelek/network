import {ValidateInput, ValidateTextarea} from "../FormControl";
import S from "./CreateField.module.css";
import {Field} from "redux-form";
import React from "react";

export const createField = (name: string, component: Function | string, placeholder?: string,
                            validate?: Function[], type?: string, text?: string) => {

    const style = () => {
        if(component === ValidateInput) {
            return `${S.input}`
        } else if(type === "checkbox") {
            return `${S.checkbox}`
        } else if(component === ValidateTextarea) {
            return `${S.textBox}`
        }
    }
    return (
        <div className={style()}>
            <Field placeholder={placeholder} name={name}
                   component={component} validate={validate || null}
                   type={type || ""}
            /> {text}
        </div>
    )
}