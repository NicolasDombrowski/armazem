"use client";

import "./editField.css"

import XIcon from "@/app/assets/icons/x-lg.svg"
import CheckIcon from "@/app/assets/icons/check-lg.svg"

import { useState } from "react";

interface EditFieldProps {
        label: string;
        value: string;
        form: string;
        fieldId?: string;
}

export default function EditField({
        label,
        value,
        form,
        fieldId
}: EditFieldProps) {

        const [editing, setEditing] = useState(false);

        return (
                <div className="editFieldLabel">
                        <label className="edit">{label}</label>

                        <div className="editFieldInner">
                                <div className="editFieldField">
                                        <input
                                                id={fieldId}
                                                className={`editFieldInput  ${editing ? 'shown' : 'hidden'}`}
                                                form={form}
                                                defaultValue={value}
                                        />

                                        <span className={`editFieldSpan ${editing ? 'hidden' : 'shown'}`}>
                                                {value}
                                        </span>
                                </div>

                                <button
                                        type="button"
                                        className="editFieldButton"
                                        onClick={() => setEditing(!editing)}
                                >

                                        <XIcon
                                                className={`editFieldButtonIcon ${editing ? 'shownIcon' : 'hiddenIcon'}`}
                                                width={32}
                                                height={32}
                                                viewBox={"0 0 18 18"} />

                                        <CheckIcon
                                                className={`editFieldButtonIcon ${editing ? 'hiddenIcon' : 'shownIcon'}`}
                                                width={32}
                                                height={32}
                                                viewBox={"0 0 18 18"} />

                                </button>
                        </div>
                </div>
        );
}