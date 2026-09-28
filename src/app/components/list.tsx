"useclient";

import "./list.css"

import { useState } from "react";

export interface listHeader {
        headerColumnName: string;
        headerColumnSize: number;
}

export default function List(header: listHeader[], listItems: any[]) {
        return (
                <>
                        <div className="listItem listItemHeader">
                                {header.map((mappedHeader, index) => (
                                        <div
                                                key={index}
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
                                <div key={index} className={`listItem ${index % 2 === 0 ? "listItemEven" : ""}`}>
                                        {header.map((mappedHeader, headerIndex) => (
                                                <div key={headerIndex} style={{
                                                        width: mappedHeader.headerColumnSize +
                                                                "%"
                                                }}>
                                                        {String(Object.values(listItem)[headerIndex])}
                                                </div>
                                        ))}
                                </div>
                        ))}
                </>
        );
}
