"use client";

import "./list.css"

import { Fragment, useState } from "react";

import EditField from "./editField";
import Button from "./button";

export interface listHeader {
        headerColumnName: string;
        headerColumnSize: number;
}

export default function List({ header, listItems, windowTitle, formAction }: { header: listHeader[]; listItems: object[]; windowTitle: string; formAction: (FormData: FormData) => Promise<void> }) {

        const [currentlyOpen, setCurrentlyOpen] = useState<null | number>(null);        
        const [resetKey, setResetKey] = useState(0);



        return (
                <>
                        <div className="listItem listItemHeader">
                                {header.map((mappedHeader, index) => (
                                        <div
                                                key={`listItemInner${index}`}
                                                style={{
                                                        width:
                                                                mappedHeader.headerColumnSize +
                                                                "%",
                                                }}>
                                                {mappedHeader.headerColumnName}
                                        </div>
                                ))}
                        </div>
                        {listItems.map((listItem, index) => (
                                <Fragment key={`listItemContainer${index}`}>
                                        <div className={`listItem ${index % 2 === 0 ? "listItemEven" : ""}`} onClick={() => (
                                                currentlyOpen == index ? setCurrentlyOpen(null) : setCurrentlyOpen(index)
                                        )}>
                                                {
                                                        header.map((mappedHeader, headerIndex) => (
                                                                <div key={`listItemCell${index}_${headerIndex}`} style={{
                                                                        width: mappedHeader.headerColumnSize +
                                                                                "%"
                                                                }}>
                                                                        {String(Object.values(listItem)[headerIndex])}
                                                                </div>
                                                        ))}
                                        </div>
                                </Fragment>
                        ))
                        }
                </>
        );
}
