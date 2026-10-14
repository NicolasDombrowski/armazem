"use client";
import "../style.css";

import Chart from "@/app/components/chart";
import RegisterItem from "./register";
import List from "@/app/components/list";

import items from "./teste";


import { listHeader } from "@/app/components/list";


export default function ManageItem() {
        let item: number = 0; //puxar do banco dps
        let criticalItem: number = 0; //puxar do banco dps

        const header: listHeader[] = [
                { headerColumnName: "id", headerColumnSize: 10 },
                { headerColumnName: "nome", headerColumnSize: 27.5 },
                { headerColumnName: "codigo", headerColumnSize: 20 },
                { headerColumnName: "quantidade", headerColumnSize: 15 },
                { headerColumnName: "localização", headerColumnSize: 27.5 },
        ];

        return (
                <>
                        <title>Itens</title>
                        <div className="registerItem">
                                <h1>Gerenciar itens</h1>
                                <Chart
                                        props={{
                                                title: `${item}`,
                                                subtitle: "Itens cadastrados",
                                                secondaryTitle: `${criticalItem}`,
                                                secondarySubtitle:
                                                        "itens críticos",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <div className="mainContainer">
                                                <List header={header} listItems={items} windowTitle="Editar Item" />
                                        </div>
                                        
                                        <div className="bottomButtonContainer">
                                                <button className="registerButton">
                                                        Registrar Item
                                                </button>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
