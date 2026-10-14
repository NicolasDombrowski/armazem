"use client";

import "./editField.css"

import XIcon from "@/app/assets/icons/x-lg.svg"
import PencilIcon from "@/app/assets/icons/pencil-fill.svg"

import { useState, useRef } from "react";

type props = {
        label: string,
        value: string,
        form: string,
        fieldId?: string
}

export default function EditField(props: props) {

        const [editing, setEditing] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);

        function handleEditButtonClick() {
                if (editing && inputRef.current) {
                        inputRef.current.value = props.value;
                }

                setEditing(!editing);

        }
        
        return (
                <div className="editField">
                        <label className="editFieldLabel">{props.label}</label>

                        <div className="editFieldInner">
                                <div className="editFieldField">
                                        <input
                                                ref={inputRef}
                                                id={props.fieldId}
                                                className={`editFieldInput  ${editing ? 'shown' : 'hidden'}`}
                                                form={props.form}
                                                defaultValue={props.value}
                                        />

                                        <span className={`editFieldSpan ${editing ? 'hidden' : 'shown'}`}>
                                                {props.value}
                                        </span>
                                </div>

                                <button
                                        type="button"
                                        className={`editFieldButton ${editing ? 'editFieldButtonCancel' : 'editFieldButtonEdit'}`}
                                        onClick={handleEditButtonClick}
                                >

                                        <XIcon
                                                className={`editFieldButtonIcon ${editing ? 'shownIcon' : 'hiddenIcon'}`}
                                                width={32}
                                                height={32}
                                                viewBox={"0 0 16 16"} />

                                        <PencilIcon
                                                className={`editFieldButtonIcon ${editing ? 'hiddenIcon' : 'shownIcon'}`}
                                                width={24}
                                                height={24}
                                                viewBox={"0 0 16 16"} />

                                </button>
                        </div>
                </div>
        );
}