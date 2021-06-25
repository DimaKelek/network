import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import S from "./SuperInput.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    errorClassName?: string
}

export const SuperInput: React.FC<SuperInputPropsType> = (props) => {
    const {type, onChange, onChangeText, onKeyPress, onEnter,
        error, className, errorClassName, ...restProps} = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalInputClassName = `${error ? S.errorInput : S.mainStyle} ${className}`
    const finalErrorClassName = `${S.error} ${errorClassName || ''}`
    return (
        <>
            <input
                type="text"
                className={finalInputClassName}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}

                {...restProps}
            />
            {error && <div className={finalErrorClassName}>{error}</div>}
        </>
    )
}