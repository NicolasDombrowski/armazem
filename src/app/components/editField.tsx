"use client";

import { useState } from "react";

export default function EditField(
        label: any,
        value: any,
        form: any,
        key: any | null,
) {
        const [currentlyEditing, setCurrentlyEditing] = useState(false);

        return (
                <div key={key} className="editField">
                        <label>{label}</label>
                        <div className="editFieldInner">
                                <div className="editFieldField">
                                        <span className="editFieldSpan">{value}</span>
                                        <input className="editFieldInput" form={form}></input>
                                </div>
                                <button className="editFieldButton">
                                        
                                </button>
                        </div>
                </div>
        );
}
