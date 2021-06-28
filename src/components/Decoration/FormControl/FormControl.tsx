import React from "react";
import S from "./FormControl.module.css"

//@ts-ignore
const FormControl = props => {
    const {input, meta, children, ...restProps} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={`${S.formControl} ${(hasError ? S.error : "")}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
//@ts-ignore
export const ValidateTextarea = props => {
    const {input, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={S.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}
//@ts-ignore
export const ValidateInput = props => {
    const {input, ...restProps} = props
    return (
        <FormControl {...props}>
            <input className={S.input} {...input} {...restProps}/>
        </FormControl>
    )
}