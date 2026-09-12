"use client";
import "../style.css";

export default function RegisterItem() {
        const itemCategory = ["fixadores", "lubrificantes", "rolamentos"]; //puxar do banco dps
        return (
                <>
                        <h2>Adicionar item</h2>
                        <form id="leftItemForm">
                                <div className="formContainer">
                                        <div className="inputContainer">
                                                <label htmlFor="itemCode">
                                                        Código do item
                                                </label>
                                                <input
                                                        type="text"
                                                        name="itemCode"
                                                        id="itemCode"
                                                        placeholder="Ex: PAR-M10-30"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="itemDescription">
                                                        Descrição do item
                                                </label>
                                                <input
                                                        type="text"
                                                        name="itemDescription"
                                                        id="itemDescription"
                                                        placeholder="Ex: Parafuso M10 x 30"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="itemQuantity">
                                                        Quantidade recebida
                                                </label>
                                                <input
                                                        type="number"
                                                        name="itemQuantity"
                                                        id="itemQuantity"
                                                        placeholder="Ex: 150"
                                                        min="0"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="itemCategory">
                                                        Categoria
                                                </label>
                                                <select
                                                        name="itemCategory"
                                                        id="itemCategory">
                                                        <option
                                                                defaultChecked
                                                                value="0">
                                                                Selecione uma
                                                                categoria
                                                        </option>
                                                        {itemCategory.map(
                                                                (
                                                                        category,
                                                                        index,
                                                                ) => (
                                                                        <option
                                                                                key={
                                                                                        category +
                                                                                        index
                                                                                }
                                                                                value={
                                                                                        category
                                                                                }>
                                                                                {
                                                                                        category
                                                                                }
                                                                        </option>
                                                                ),
                                                        )}
                                                </select>
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="itemCritical">
                                                        Estoque mínimo
                                                </label>
                                                <input
                                                        type="number"
                                                        name="itemCritical"
                                                        id="itemCritical"
                                                        placeholder="Ex: 20"
                                                        min="0"
                                                />
                                        </div>

                                        <div className="inputContainer">
                                                <label htmlFor="itemLocalization">
                                                        Localização
                                                </label>
                                                <input
                                                        placeholder="Ex: Prateleira 1, Gaveta 2"
                                                        type="text"
                                                        name="itemLocalization"
                                                        id="itemLocalization"
                                                />
                                        </div>
                                </div>
                        </form>
                </>
        );
}
