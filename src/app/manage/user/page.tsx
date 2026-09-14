"use client";
import "../style.css";
import "@/app/transitions/show-hide.css";

import Chart from "@/app/components/chart";
import ChartSwitch from "@/app/components/chartSwitch";
import RegisterUser from "./register";
import EditUser from "./edit";

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
        const UserTeste = {
                name: "jao",
                id: 231,
                phone: 999999999,
                email: "jao@mail",
                department: "almoxarifado",
                acessProfile: "operacional",
        };
        const UserTeste2 = {
                name: "jason",
                id: 232,
                phone: 88888888,
                email: "jason@mail",
                department: "mecanica",
                acessProfile: "supervisor",
        };
        const users: User[] = [UserTeste, UserTeste2]; //puxar dps da database
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
                                                        <div className="listItem listItemHeader">
                                                                <div className="listItemInner listItemInnerHeader">
                                                                        <div style={{gridColumn:1}}>ID</div>
                                                                        <div style={{gridColumn:2}}>Nome</div>
                                                                        <div style={{gridColumn:3}}>Departamento</div>
                                                                        <div style={{gridColumn:4}}>Perfil de acesso</div></div>
                                                                </div>
                                                {users.map((user, index) => (  

                                                        <div className={`listItem ${index % 2 == 0? 'listItemEven' : ''}`}>
                                                                <div key={`listItem${index}`}className="listItemInner">
                                                                        <div style={{gridColumn:1}}>{user.id}</div>
                                                                        <div style={{gridColumn:2}}>{user.name}</div>
                                                                        <div style={{gridColumn:3}}>{user.department}</div>
                                                                        <div style={{gridColumn:4}}>{user.acessProfile}</div>
                                                                </div>
                                                                <div className="listItemDrop"></div>
                                                        </div>
                                                ))}
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
