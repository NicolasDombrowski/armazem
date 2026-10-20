"use client";
import { useEffect, useState } from "react";
import "../style.css";

import Chart from "@/app/components/chart";
import List from "@/app/components/list";
import Button from "@/app/components/button";

import RegisterUser from "./new/page";

import { listHeader } from "@/app/components/expandedListItem";
import updateEmployeeAction from "@/app/actions/employeeAction";

export default function ManageUser() {

        interface User {
                name: string;
                id: number;
                phone: number;
                email: string;
                department: string;
                acessProfile: string;
        }

        const [users, setUsers] = useState<User[]>([]);
        const [userNumber, setUserNumber] = useState(0);
        const [registerOpen, setRegisterOpen] = useState<boolean>(false)

        useEffect(() => {
                async function loadUsers() {
                        const response = await fetch('/api/employees');
                        if (response.ok) {
                                const employeeList: User[] = await response.json();
                                setUsers(employeeList);
                                setUserNumber(employeeList.length)
                        }

                }

                loadUsers();
        }, []);



        const header: listHeader[] = [
                { headerColumnName: "id", headerColumnSize: 10 },
                { headerColumnName: "nome", headerColumnSize: 35 },
                { headerColumnName: "departamento", headerColumnSize: 27.5 },
                { headerColumnName: "perfil de acesso", headerColumnSize: 27.5 }
        ];

        return (
                <>
                        <title>Usuários</title>
                        <div className="manage">
                                <h1>Gerenciar Usuários</h1>
                                <Chart
                                        props={{
                                                title: `${userNumber}`,
                                                subtitle: "Usuários cadastrados",
                                                secondaryTitle: "",
                                                secondarySubtitle: "",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <div className="mainContainer">
                                                <List
                                                        header={header}
                                                        listItems={users}
                                                        windowTitle="Editar Usuário"
                                                        formAction={updateEmployeeAction}>
                                                </List>
                                        </div>

                                        <div className="bottomButtonContainer">
                                                <Button
                                                        buttonType="custom"
                                                        color="blue"
                                                        value="Registrar usuário"
                                                        onclick={()=>{setRegisterOpen(true)}}
                                                />
                                        </div>

                                </div>
                        </div>
                        <div className={`register registerUser ${registerOpen ? "shown" : "hidden"}`}>
                                <RegisterUser 
                                registerOpen={registerOpen}
                                setRegisterOpen={setRegisterOpen}/>
                        </div>
                </>
        );
}
