import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import S from "./ReactCheckbox.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ReactCheckboxPropsType = DefaultInputPropsType & {
    checked?: boolean
    setChecked?: (e: boolean) => void
}

export const ReactCheckbox: React.FC<ReactCheckboxPropsType> = props => {
    const {onChange, children, setChecked, checked, ...restProps} = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        setChecked && setChecked(e.currentTarget.checked)
    }
    const labelCheckbox = `${S.check} ${S.option}`
    return (
        <label className={labelCheckbox}>
            <input
                checked={checked}
                onChange={onChangeCallback}
                type={"checkbox"}
                className={S.checkInput}
                {...restProps}
            />
            <span className={S.checkbox}/>
            {children && <span className={S.labelText}>{children}</span>}
        </label>
    )
}