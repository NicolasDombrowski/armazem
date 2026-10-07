"use client";

import "./editField.css"

import XIcon from "@/app/assets/icons/x-lg.svg"
import PencilIcon from "@/app/assets/icons/pencil-fill.svg"

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
                <div className="editField">
                        <label className="editFieldLabel">{label}</label>

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
                                        className={`editFieldButton ${editing ? 'editFieldButtonCancel' : 'editFieldButtonEdit'}`}
                                        onClick={() => setEditing(!editing)}
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