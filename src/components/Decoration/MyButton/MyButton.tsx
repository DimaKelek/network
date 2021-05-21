import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import S from "./MyButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
    disabled?: boolean
    title?: string
    onClick?: () => void
}

export const MyButton: React.FC<MyButtonPropsType> = ({title, disabled, children, onClick, ...restProps}) => {
    const onclickCallback = () => {
        onClick && onClick()
    }
    return (
        <div className={S.button_box}>
            <button
                className={S.button}
                onClick={onclickCallback}
                disabled={disabled}

                {...restProps}
            >
                {children ? children : title}
            </button>
        </div>
    );
}