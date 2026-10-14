'use client'

import './button.css'

type props = {
    buttonType: "submit" | "reset" | "custom",
    value: string,
    form?: string,
    onclick?: () => void,
    color?: "red" | "green" | "blue"
}

export default function Button(props: props) {
    return (
        <button
            className={`${props.buttonType == "custom" ? props.color : props.buttonType}Button Button`}
            onClick={props.buttonType == "custom" ? props.onclick : undefined}
            type={props.buttonType == "custom" ? "button" : props.buttonType}
            form={props.buttonType == "custom" ? undefined : props.form}
        >
            {props.value}
        </button>
    )
}