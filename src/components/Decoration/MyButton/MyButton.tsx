import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import S from "./MyButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type MyButtonPropsType = DefaultButtonPropsType & {
    disabled?: boolean
    title?: string
    onClick?: () => void
}

export const MyButton: React.FC<MyButtonPropsType> = props => {
    const {title, disabled, children, onClick, className, ...restProps} = props

    const onclickCallback = () => {
        onClick && onClick()
    }
    const style = `${S.button} ${className}`
    return (
        <>
            <button
                className={style}
                onClick={onclickCallback}
                disabled={disabled}
                {...restProps}
            >
                {children ? children : title}
            </button>
        </>
    );
}