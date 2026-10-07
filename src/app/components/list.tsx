"use client";

import "./list.css"

import XIcon from "@/app/assets/icons/x-lg.svg"

import { Fragment, useState } from "react";
import { useEffect } from "react";

import EditField from "./editField";

export interface listHeader {
        headerColumnName: string;
        headerColumnSize: number;
}

export default function List({ header, listItems, windowTitle }: { header: listHeader[]; listItems: any[]; windowTitle: string }) {

        const [currentlyOpen, setCurrentlyOpen] = useState<null | number>(null);


        useEffect(() => {
                const f = (e: KeyboardEvent) => e.key === "Escape" && setCurrentlyOpen(null);
                document.addEventListener("keydown", f);
                return () => document.removeEventListener("keydown", f);
        }, []);


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
                                        <form key={`listItemExpandedForm${index}_${index}`} id={`listItemExpandedForm${index}`}>
                                                <div className={`expandedListItemContainer ${currentlyOpen === index ? "listItemExpandedOpen" : "listItemExpandedClosed"}`}>
                                                        <div key={`expandedListItem${index}`} id={`expandedListItem${index}`} className={`listItemExpanded`}>
                                                                <div className="expandedListItemUpperContainer">
                                                                        <h2 className="windowTitle">{windowTitle}</h2>
                                                                        <button className={"expandedListItemButton expandedListItemButtonClose"} onClick={() => (setCurrentlyOpen(null))}>
                                                                                <XIcon
                                                                                        width={32}
                                                                                        height={32}
                                                                                        viewBox={"0 0 16 16"} />
                                                                        </button>
                                                                </div>

                                                                {Object.entries(listItem).map(([key, value], headerIndex) => (
                                                                        <div key={`listItemExpandedFieldWrapper${index}_${key}`}>
                                                                                <EditField
                                                                                        label={header[headerIndex]?.headerColumnName ?? key}
                                                                                        value={String(value)}
                                                                                        form={`listItemExpandedForm${index}`}
                                                                                        fieldId={`listItemExpandedForm${index}Field${key}`}
                                                                                />
                                                                        </div>

                                                                ))}
                                                        </div>

                                                </div>
                                        </form>
                                </Fragment>
                        ))
                        }
                </>
        );
}
