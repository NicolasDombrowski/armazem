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
                                        <div className="radioContainer">
                                                <label className="radioButton">
                                                        <input
                                                                checked={
                                                                        currentChart ===
                                                                        "left"
                                                                }
                                                                type="radio"
                                                                name="UserAction"
                                                                value="newUser"
                                                                onChange={() =>
                                                                        setChart(
                                                                                "left",
                                                                        )
                                                                }
                                                        />

                                                        <span>
                                                                Cadastrar
                                                                usuário
                                                        </span>
                                                </label>

                                                <label className="radioButton">
                                                        <input
                                                                type="radio"
                                                                name="UserAction"
                                                                value="restockUser"
                                                                checked={
                                                                        currentChart ===
                                                                        "right"
                                                                }
                                                                onChange={() =>
                                                                        setChart(
                                                                                "right",
                                                                        )
                                                                }
                                                        />
                                                        <span>
                                                                Editar usuário
                                                        </span>
                                                </label>
                                        </div>

                                        <ChartSwitch
                                                chartCurrent={currentChart}
                                                chartLeftContent={
                                                        <RegisterUser />
                                                }
                                                chartRightContent={<EditUser />}
                                        />
                                        <div className="submitContainer">
                                                <button
                                                        form={
                                                                currentChart ===
                                                                "left"
                                                                        ? "leftUserForm"
                                                                        : "rightUserForm"
                                                        }
                                                        type="reset"
                                                        className="resetButton">
                                                        Limpar
                                                </button>

                                                <button
                                                        form={
                                                                currentChart ===
                                                                "left"
                                                                        ? "leftUserForm"
                                                                        : "rightUserForm"
                                                        }
                                                        type="submit"
                                                        className="submitButton">
                                                        Cadastrar
                                                </button>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
