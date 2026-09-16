"use client";
import "../style.css";
import "@/app/transitions/show-hideHorizontal.css";

import Chart from "../../components/chart";

export default function RegisterTool() {
        let tool: number = 0; //puxar do banco dps

        return (
                <>
                        <title>Cadastro de Ferramentas</title>
                        <div className="registerTool">
                                <h1>Cadastro de Ferramentas</h1>
                                <Chart
                                        props={{
                                                title: `${tool}`,
                                                subtitle: "Ferramentas cadastradas",
                                                secondaryTitle: "",
                                                secondarySubtitle: "",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <h2>Cadastrar nova ferramenta</h2>
                                        <form id="toolForm">
                                                <div className="formContainer shown">
                                                        <div className="inputContainer">
                                                                <label htmlFor="toolName">
                                                                        Nome da
                                                                        ferramenta
                                                                </label>
                                                                <input
                                                                        placeholder="Ex: Chave de fenda"
                                                                        type="text"
                                                                        name="toolName"
                                                                        id="toolName"
                                                                />
                                                        </div>

                                                        <div className="inputContainer">
                                                                <label htmlFor="patrimonialCode">
                                                                        Código
                                                                        patrimonial
                                                                </label>
                                                                <input
                                                                        placeholder="Ex: furadeira-001"
                                                                        type="text"
                                                                        name="patrimonialCode"
                                                                        id="patrimonialCode"
                                                                />
                                                        </div>

                                                        <div className="inputContainer">
                                                                <label htmlFor="category">
                                                                        Categoria
                                                                </label>
                                                                <select
                                                                        name="category"
                                                                        id="category">
                                                                        <option value="0">
                                                                                Selecione
                                                                                uma
                                                                                categoria
                                                                        </option>
                                                                        <option value="1">
                                                                                Elétrica
                                                                        </option>
                                                                        <option value="2">
                                                                                Manual
                                                                        </option>
                                                                        <option value="3">
                                                                                Hidráulica
                                                                        </option>
                                                                </select>
                                                        </div>

                                                        <div className="inputContainer">
                                                                <label htmlFor="localization">
                                                                        Localização
                                                                </label>
                                                                <input
                                                                        placeholder="Ex: Prateleira 1, Gaveta 2"
                                                                        type="text"
                                                                        name="localization"
                                                                        id="localization"
                                                                />
                                                        </div>
                                                </div>
                                        </form>
                                        <div className="submitContainer">
                                                <button
                                                        form="toolForm"
                                                        type="reset"
                                                        className="resetButton">
                                                        Limpar
                                                </button>

                                                <button
                                                        form="toolForm"
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
