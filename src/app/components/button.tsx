'use client'

import './button.css'
import XIcon from "@/app/assets/icons/x-lg.svg"

import { useEffect } from 'react'


type props = {
    buttonType: "submit" | "reset" | "x" | "custom",
    value?: string,
    form?: string,
    onclick?: () => void,
    color?: "red" | "green" | "blue"
    closeOnEsc?: boolean;
}



export default function Button(props: props) {

    useEffect(() => {
        if (!props.closeOnEsc) return;

        const f = (e: KeyboardEvent) => {
            if (e.key === "Escape") props.onclick?.();
        };
        document.addEventListener("keydown", f);
        return () => document.removeEventListener("keydown", f);
    }, [props.closeOnEsc, props.onclick]);



    return (
        <button
            className={`${props.buttonType == "custom" ? props.color : props.buttonType}Button Button`}
            onClick={props.buttonType == "custom" || props.buttonType == "x" ? props.onclick : undefined}
            type={props.buttonType === "custom" || props.buttonType === "x" ? "button" : props.buttonType}
            form={props.buttonType == "custom" ? undefined : props.form}
        >
            {props.buttonType === "x" ? null : props.value}

            {props.buttonType === "x" ?
                (<XIcon
                    width={32}
                    height={32}
                    viewBox={"0 0 16 16"} />) : null}

        </button>
    )
}