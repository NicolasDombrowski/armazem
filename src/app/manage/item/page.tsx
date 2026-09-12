"use client";
import "../style.css";
import "@/app/transitions/show-hide.css";

import Chart from "@/app/components/chart";
import ChartSwitch from "@/app/components/chartSwitch";
import RegisterItem from "./register";
import EditItem from "./edit";

import { useState } from "react";

export default function ManageItem() {
        let item: number = 0; //puxar do banco dps
        let criticalItem: number = 0; //puxar do banco dps
        const [currentChart, setChart] = useState<"left" | "right">("left");

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
                                        <div className="radioContainer">
                                                <label className="radioButton">
                                                        <input
                                                                checked={
                                                                        currentChart ===
                                                                        "left"
                                                                }
                                                                type="radio"
                                                                name="itemAction"
                                                                value="newItem"
                                                                onChange={() =>
                                                                        setChart(
                                                                                "left",
                                                                        )
                                                                }
                                                        />

                                                        <span>
                                                                Cadastrar novo
                                                                item
                                                        </span>
                                                </label>

                                                <label className="radioButton">
                                                        <input
                                                                type="radio"
                                                                name="itemAction"
                                                                value="restockItem"
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
                                                                Reabastecer item
                                                        </span>
                                                </label>
                                        </div>

                                        <ChartSwitch
                                                chartCurrent={currentChart}
                                                chartLeftContent={
                                                        <RegisterItem />
                                                }
                                                chartRightContent={<EditItem />}
                                        />
                                        <div className="submitContainer">
                                                <button
                                                        form={
                                                                currentChart ===
                                                                "left"
                                                                        ? "leftItemForm"
                                                                        : "rightItemForm"
                                                        }
                                                        type="reset"
                                                        className="resetButton">
                                                        Limpar
                                                </button>

                                                <button
                                                        form={
                                                                currentChart ===
                                                                "left"
                                                                        ? "leftItemForm"
                                                                        : "rightItemForm"
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
