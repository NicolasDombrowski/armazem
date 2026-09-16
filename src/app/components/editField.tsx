"use client";

import { useState } from "react";

export default function EditField({
        props,
}: {
        props: { label: any; value: any; form: any; key: any | null };
}) {
        const [currentlyEditing, setCurrentlyEditing] = useState(false);

        return (
                <div key={props.key} className="editField">
                        <label>{props.label}</label>
                        <div className="editFieldInner">
                                <div className="editFieldField">
                                        <span className="editFieldSpan">
                                                {props.value}
                                        </span>
                                        <input
                                                className="editFieldInput"
                                                form={props.form}></input>
                                </div>
                                <button className="editFieldButton"></button>
                        </div>
                </div>
        );
}
