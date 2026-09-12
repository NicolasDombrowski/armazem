"use client";
import "../style.css";

export default function RegisterUser() {
        const userDepartment = [
                "almoxarifado",
                "mecânica",
                "supervisão",
                "produção",
        ]; //puxar do banco depois
        const userAcessProfile = [
                "operacional",
                "administrador",
                "supervisão",
                "produção",
        ]; //puxar do banco depois

        return (
                <>
                        <h2>Adicionar usuário</h2>
                        <form id="leftUserForm">
                                <div className="formContainer">
                                        <div className="inputContainer">
                                                <label htmlFor="userName">
                                                        Nome completo do usuário
                                                </label>
                                                <input
                                                        type="text"
                                                        name="userName"
                                                        id="userName"
                                                        placeholder="Ex: João Silva"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="userEmail">
                                                        E-mail do usuário
                                                </label>
                                                <input
                                                        type="text"
                                                        name="userEmail"
                                                        id="userEmail"
                                                        placeholder="Ex: JoãoSilva@gmail.com"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="userPhone">
                                                        Número de telefone do usuário
                                                </label>
                                                <input
                                                        type="text"
                                                        name="userPhone"
                                                        id="userPhone"
                                                        placeholder="Ex: 554299999999"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="userId">
                                                        ID do usuário
                                                </label>
                                                <input
                                                        type="number"
                                                        name="userId"
                                                        id="userId"
                                                        placeholder="Preenchimento automático"
                                                        disabled
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="userDepartment">
                                                        Departamento
                                                </label>
                                                <select
                                                        name="userDepartment"
                                                        id="userDepartment">
                                                        <option
                                                                defaultChecked
                                                                value="0">
                                                                Selecione um
                                                                departamento
                                                        </option>
                                                        {userDepartment.map(
                                                                (
                                                                        department,
                                                                        index,
                                                                ) => (
                                                                        <option
                                                                                key={
                                                                                        department +
                                                                                        index
                                                                                }
                                                                                value={
                                                                                        department
                                                                                }>
                                                                                {
                                                                                        department
                                                                                }
                                                                        </option>
                                                                ),
                                                        )}
                                                </select>
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="userAcessProfile">
                                                        Perfil de acesso
                                                </label>
                                                <select
                                                        name="userAcessProfile"
                                                        id="userAcessProfile">
                                                        <option
                                                                defaultChecked
                                                                value="0">
                                                                Selecione um
                                                                perfil de acesso
                                                        </option>
                                                        {userAcessProfile.map(
                                                                (
                                                                        AcessProfile,
                                                                        index,
                                                                ) => (
                                                                        <option
                                                                                key={
                                                                                        AcessProfile +
                                                                                        index
                                                                                }
                                                                                value={
                                                                                        AcessProfile
                                                                                }>
                                                                                {
                                                                                        AcessProfile
                                                                                }
                                                                        </option>
                                                                ),
                                                        )}
                                                </select>
                                        </div>
                                </div>
                        </form>
                </>
        );
}
