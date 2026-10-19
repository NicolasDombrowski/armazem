"use client";
import "../style.css";

import Chart from "@/app/components/chart";
import RegisterItem from "./new/page";
import List from "@/app/components/list";


import { listHeader } from "@/app/components/list";


export default function RegisterTool() {
        const tool: number = 0; //puxar do banco dps

        const header: listHeader[] = [
                { headerColumnName: "id", headerColumnSize: 10 },
                { headerColumnName: "nome", headerColumnSize: 27.5 },
                { headerColumnName: "codigo", headerColumnSize: 20 },
                { headerColumnName: "categoria", headerColumnSize: 15 },
                { headerColumnName: "localização", headerColumnSize: 27.5 },
        ];

        return (
                <>
                        <title>Ferramentas</title>
                        <div className="manageTool">
                                <h1>Gerenciar Ferramentas</h1>
                                <Chart
                                        props={{
                                                title: `${tool}`,
                                                subtitle: "Ferramentas cadastrados",
                                                secondaryTitle: "",
                                                secondarySubtitle: ""
                                        }}
                                />
                                <div className="secondaryChart">
                                        <div className="mainContainer">
                                                <List header={header} listItems={[]} windowTitle="Editar Ferramenta" />
                                        </div>

                                        <div className="bottomButtonContainer">
                                                <button className="registerButton">
                                                        Registrar Ferramenta
                                                </button>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
