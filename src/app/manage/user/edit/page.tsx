"use client";

import EditField from "@/app/components/editField";
import Button from "@/app/components/button";
import Modal from "@/app/components/modal";
import { updateEmployeeAction } from "@/app/actions/employeeAction";

export default function ExpandablelistItem() {

        return (
                <>
                        <form id="userForm" action={updateEmployeeAction}>
                                <div className="formContainer">

                                        <div className="inputContainer">
                                                <label htmlFor="name">
                                                        Nome completo do usuário
                                                </label>
                                                <input
                                                        required
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Ex: João Silva"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="mail">
                                                        E-mail do usuário
                                                </label>
                                                <input
                                                        required
                                                        type="text"
                                                        name="mail"
                                                        id="mail"
                                                        placeholder="Ex: JoãoSilva@gmail.com"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="phone">
                                                        Número de telefone do usuário
                                                </label>
                                                <input
                                                        required
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Ex: 554299999999"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="department">
                                                        Departamento
                                                </label>
                                                <select
                                                        required
                                                        name="department"
                                                        id="department">
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
                                                <label htmlFor="accessProfile">
                                                        Perfil de acesso
                                                </label>
                                                <select
                                                        required
                                                        name="accessProfile"
                                                        id="acessProfile">
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

                        <div className="bottomButtonContainer">
                                <Button
                                        value="Cancelar"
                                        buttonType="reset"
                                        form={"userForm"}
                                />

                                <Button
                                        value="Confirmar"
                                        buttonType="submit"
                                        form={"userForm"}
                                />
                        </div>
                </>
        );
}