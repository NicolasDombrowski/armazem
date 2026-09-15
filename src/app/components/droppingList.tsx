"useclient";

import { useState } from "react";

interface listHeader {
        headerColumnName: string;
        headerColumnSize: number;
}

export default function DroppingList(header: listHeader[], listItems: any[]) {
        return (
                <>
                        {header.map((mappedHeader, index) => (
                                <div className="listItem listItemHeader">
                                        <div
                                                style={{
                                                        gridColumn: index,
                                                        width:
                                                                mappedHeader.headerColumnSize +
                                                                "%",
                                                }}>
                                                {mappedHeader.headerColumnName}
                                        </div>
                                </div>
                        ))}

                        {listItems.map((listItem, index) => (
                                <div className={`listItem ${index % 2 === 0 ? "even" : ""}`}>
                                        
                                </div>
                        ))}
                </>
        );
}
