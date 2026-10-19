"use client";

import { useState } from "react";

import EditField from "./editField";
import Button from "./button";

import "./list.css";

export interface listHeader {
    headerColumnName: string;
     headerColumnSize: number;
}

interface ExpandablelistItemProps {
    listItem: object;
    header: listHeader[];
    index: number;
    windowTitle: string;
    formAction: ;
    isOpen: boolean;
    onClose: () => void;
}

export default function ExpandablelistItem({
    listItem,
    header,
    index,
    windowTitle,
    formAction,
    isOpen,
    onClose,
}: ExpandablelistItemProps) {
    const [resetKey, setResetKey] = useState(0);

    const formId = `listItemExpandedForm${index}`;
    const itemEntries = Object.entries(listItem);

    return (
        <form
            action={formUrl}
            method={formMethod}
            id={formId}
            onReset={() =>
                setResetKey((prev) => prev + 1)
            }
        >
            <div
                className={`expandedListItemContainer ${isOpen
                    ? "listItemExpandedOpen"
                    : "listItemExpandedClosed"
                    }`}
            >
                <div
                    id={`expandedListItem${index}`}
                    className="listItemExpanded"
                >
                    <div className="expandedListItemUpperContainer">
                        <h2 className="windowTitle">
                            {windowTitle}
                        </h2>

                        <Button
                            onclick={onClose}
                            buttonType="x"
                            closeOnEsc={true}
                        />
                    </div>

                    <div className="expandedListItemMiddleContainer">
                        {itemEntries.map(
                            ([key, value], fieldIndex) => (
                                <div
                                    key={`${index}_${key}`}
                                >
                                    <EditField
                                        key={`${key}-${resetKey}`}
                                        label={
                                            header[fieldIndex]
                                                ?.headerColumnName ??
                                            key
                                        }
                                        value={String(value)}
                                        form={formId}
                                        fieldId={`${formId}Field${key}`}
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div className="expandedListItemLowerButtonContainer">
                        <Button
                            value="Cancelar"
                            buttonType="reset"
                            form={formId}
                        />

                        <Button
                            value="Confirmar"
                            buttonType="submit"
                            form={formId}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}