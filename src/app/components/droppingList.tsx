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

        const [expanded, setExpanded] = useState<number>();

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
                                        <div    onClick={() => setExpanded(itemIndex)}
                                                className={`listItem ${itemIndex % 2 === 0 ? "listItemEven" : ""} ${expanded == itemIndex ? "expandedHeader" : ""}`}>
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
                                        <div className={`listItemExpandable ${expanded == itemIndex ? "expanded" : "retracted"}`}>
                                                
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
