"use client";

import { Dispatch, SetStateAction, useState } from "react";

import EditField from "./editField";
import Button from "./button";

import "./list.css";

export interface editWindowColumns {
        expandedListColumnName: string;
        expandedListColumnSize: number;
        expandedListColumnType: string;
        expandedListColumnOptions: string[];
}

interface EditWindowProps {
        currentlyOpen: number | null;
        setCurrentlyOpen: Dispatch<SetStateAction<number | null>>;
        Items: object[];
        windowTitle: string;
        formAction: (formData: FormData) => Promise<void>;
        onClose: () => void;
}

export default function ExpandablelistItem(props: EditWindowProps) {
        const [resetKey, setResetKey] = useState(0);

        return (
                <form action={props.formAction} key={''}
                        onReset={() => setResetKey(prev => prev + 1)}>
                        {props.Items.map((Item, index) => (
                        <div className={`expandedListItemContainer ${props.currentlyOpen === index ? "listItemExpandedOpen" : "listItemExpandedClosed"}`}>
                                <div key={`expandedListItem${index}`} id={`expandedListItem${index}`} className="listItemExpanded">
                                        <div className="expandedListItemUpperContainer">
                                                <h2 className="windowTitle">{props.windowTitle}</h2>
                                                <Button
                                                        onclick={() => (props.setCurrentlyOpen(null))}
                                                        buttonType="x"
                                                        closeOnEsc={true}
                                                />
                                        </div>

                                        <div className="expandedListItemMiddleContainer">
                                                {Object.entries(listItem).map(([key, value], headerIndex) => (
                                                        <div key={`listItemExpandedFieldWrapper${index}_${key}`}>
                                                                <EditField
                                                                        key={`${key}-${resetKey}`}
                                                                        label={}
                                                                        value={String(value)}
                                                                        form={`listItemExpandedForm${index}`}
                                                                        fieldId={`listItemExpandedForm${index}Field${key}`}
                                                                        fieldName={key}
                                                                        fieldType={ }
                                                                />
                                                        </div>
                                                ))}
                                        </div>

                                        <div className="expandedListItemLowerButtonContainer">
                                                <Button
                                                        value="Cancelar"
                                                        buttonType="reset"
                                                        form={`listItemExpandedForm${index}`}
                                                />

                                                <Button
                                                        value="Confirmar"
                                                        buttonType="submit"
                                                        form={`listItemExpandedForm${index}`}
                                                />
                                        </div>
                                </div>

                        </div>
                                

                        ))
                        }

                </form>
        );
}