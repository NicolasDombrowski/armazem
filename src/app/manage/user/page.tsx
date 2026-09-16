"use client";
import "../style.css";

import Chart from "@/app/components/chart";
import DroppingList from "@/app/components/droppingList";

import { listHeader } from "@/app/components/droppingList";



import users from "./teste";




import { useState } from "react";

export default function ManageUser() {
        let user: number = 0; //puxar do banco dps
        const [currentChart, setChart] = useState<"left" | "right">("left");

        interface User {
                name: string;
                id: number;
                phone: number;
                email: string;
                department: string;
                acessProfile: string;
        }
        /*
        const users: User[] = []; //puxar dps da database*/



        const header: listHeader[] = [
                { headerColumnName: "id", headerColumnSize: "10%" },
                { headerColumnName: "nome", headerColumnSize: "35%" },
                { headerColumnName: "departamento", headerColumnSize: "27.5%" },
                { headerColumnName: "perfil de acesso", headerColumnSize: "27.5%" },
        ];

        return (
                <>
                        <title>Usuários</title>
                        <div className="registerUser">
                                <h1>Gerenciar Usuários</h1>
                                <Chart
                                        props={{
                                                title: `${user}`,
                                                subtitle: "Usuários cadastrados",
                                                secondaryTitle: "",
                                                secondarySubtitle: "",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <div className="mainContainer">
                                                <DroppingList
                                                        props={{
                                                                header: header,
                                                                listItems: users,
                                                        }}
                                                />
                                        </div>

                                        <div className="bottomButtonContainer">
                                                <button className="registerButton">
                                                        Registrar usuário
                                                </button>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
