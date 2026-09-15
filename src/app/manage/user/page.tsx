"use client";
import "../style.css";
import "@/app/transitions/show-hide.css";

import Chart from "@/app/components/chart";
import ChartSwitch from "@/app/components/chartSwitch";
import RegisterUser from "./register";
import EditUser from "./edit";
import EditField from "@/app/components/editField";

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
        /*const UserTeste = {
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
        const users: User[] = [UserTeste, UserTeste2]; //puxar dps da database*/
        
        
        



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

const UserTeste3 = {
        name: "maria",
        id: 233,
        phone: 977777777,
        email: "maria@mail",
        department: "financeiro",
        acessProfile: "administrativo",
};

const UserTeste4 = {
        name: "carlos",
        id: 234,
        phone: 966666666,
        email: "carlos@mail",
        department: "producao",
        acessProfile: "operacional",
};

const UserTeste5 = {
        name: "ana",
        id: 235,
        phone: 955555555,
        email: "ana@mail",
        department: "recursos humanos",
        acessProfile: "supervisor",
};

const UserTeste6 = {
        name: "pedro",
        id: 236,
        phone: 944444444,
        email: "pedro@mail",
        department: "mecanica",
        acessProfile: "operacional",
};

const UserTeste7 = {
        name: "lucas",
        id: 237,
        phone: 933333333,
        email: "lucas@mail",
        department: "almoxarifado",
        acessProfile: "administrativo",
};

const UserTeste8 = {
        name: "juliana",
        id: 238,
        phone: 922222222,
        email: "juliana@mail",
        department: "financeiro",
        acessProfile: "supervisor",
};

const UserTeste9 = {
        name: "rafael",
        id: 239,
        phone: 911111111,
        email: "rafael@mail",
        department: "producao",
        acessProfile: "operacional",
};

const UserTeste10 = {
        name: "fernanda",
        id: 240,
        phone: 900000000,
        email: "fernanda@mail",
        department: "recursos humanos",
        acessProfile: "administrativo",
};

const UserTeste11 = {
        name: "gabriel",
        id: 241,
        phone: 988888888,
        email: "gabriel@mail",
        department: "almoxarifado",
        acessProfile: "operacional",
};

const UserTeste12 = {
        name: "beatriz",
        id: 242,
        phone: 977777777,
        email: "beatriz@mail",
        department: "mecanica",
        acessProfile: "supervisor",
};

const UserTeste13 = {
        name: "thiago",
        id: 243,
        phone: 966666666,
        email: "thiago@mail",
        department: "financeiro",
        acessProfile: "administrativo",
};

const UserTeste14 = {
        name: "camila",
        id: 244,
        phone: 955555555,
        email: "camila@mail",
        department: "producao",
        acessProfile: "operacional",
};

const UserTeste15 = {
        name: "eduardo",
        id: 245,
        phone: 944444444,
        email: "eduardo@mail",
        department: "recursos humanos",
        acessProfile: "supervisor",
};

const users: User[] = [
        UserTeste,
        UserTeste2,
        UserTeste3,
        UserTeste4,
        UserTeste5,
        UserTeste6,
        UserTeste7,
        UserTeste8,
        UserTeste9,
        UserTeste10,
        UserTeste11,
        UserTeste12,
        UserTeste13,
        UserTeste14,
        UserTeste15,
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
