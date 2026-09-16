"useclient";
import "./droppingList.css";

import { useState } from "react";

import EditField from "./editField";

export interface listHeader {
        headerColumnName: string;
        headerColumnSize: string;
}

export default function DroppingList({
        props,
}: {
        props: { header: listHeader[]; listItems: any[] };
}) {

        const [expanded, setExpanded] = useState<number[]>([]);

        return (
                <>
                        <div className="listItem listItemHeader">
                                {props.header.map((mappedHeader, index) => (
                                        <div
                                                style={{
                                                        width: mappedHeader.headerColumnSize,
                                                }}>
                                                {mappedHeader.headerColumnName}
                                        </div>
                                ))}
                        </div>

                        {props.listItems.map((mappedItem, itemIndex) => (
                                <>
                                        <div
                                                className={`listItem ${itemIndex % 2 === 0 ? "listItemEven" : ""}`}>
                                                {props.header.map(
                                                        (
                                                                mappedHeader,
                                                                headerIndex,
                                                        ) => (
                                                                <div
                                                                        style={{
                                                                                width: mappedHeader.headerColumnSize,
                                                                        }}
                                                                        className="listItemInner"
                                                                        key={`${mappedHeader}${headerIndex}`}>
                                                                        {String(
                                                                                Object.values(
                                                                                        mappedItem,
                                                                                )[
                                                                                        headerIndex
                                                                                ]
                                                                        )}
                                                                </div>
                                                        ),
                                                )}
                                        </div>
                                        <div className={`listItemExpanded ${expanded.includes(itemIndex) ? "expanded" : ""}`}>
                                                
                                                {props.header.map(
                                                        (
                                                                mappedHeader,
                                                                headerIndex,
                                                        ) => (
                                                                <EditField
                                                                        props={{
                                                                                label: mappedHeader.headerColumnName,
                                                                                value: Object.values(
                                                                                        mappedItem,
                                                                                )[
                                                                                        headerIndex
                                                                                ],
                                                                                form: "",
                                                                                key: "",
                                                                        }}
                                                                />
                                                        ),
                                                )}
                                        </div>
                                </>
                        ))}
                </>
        );
}
