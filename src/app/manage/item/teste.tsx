export interface Item {
    id: number;
    nome: string;
    codigo: string;
    quantidade: number;
    itemLocalization: string;
    categoria: string;
    itemCritical: number;
}

const ItemTeste = {
    id: 301,
    nome: "Parafuso M10 x 30",
    codigo: "PAR-M10-30",
    quantidade: 150,
    itemLocalization: "Prateleira 1, Gaveta 2",
    categoria: "Fixadores",
    itemCritical: 20,
};

const ItemTeste2 = {
    id: 302,
    nome: "Porca sextavada M10",
    codigo: "POR-M10",
    quantidade: 300,
    itemLocalization: "Prateleira 1, Gaveta 3",
    categoria: "Fixadores",
    itemCritical: 50,
};

const ItemTeste3 = {
    id: 303,
    nome: "Arruela lisa M10",
    codigo: "ARR-M10",
    quantidade: 500,
    itemLocalization: "Prateleira 1, Gaveta 4",
    categoria: "Fixadores",
    itemCritical: 100,
};

const ItemTeste4 = {
    id: 304,
    nome: "Rolamento rígido 6204",
    codigo: "ROL-6204",
    quantidade: 24,
    itemLocalization: "Prateleira 2, Gaveta 1",
    categoria: "Rolamentos",
    itemCritical: 5,
};

const ItemTeste5 = {
    id: 305,
    nome: "Correia industrial A32",
    codigo: "COR-A32",
    quantidade: 18,
    itemLocalization: "Prateleira 2, Gaveta 2",
    categoria: "Correias",
    itemCritical: 6,
};

const ItemTeste6 = {
    id: 306,
    nome: "Óleo lubrificante industrial",
    codigo: "LUB-001",
    quantidade: 40,
    itemLocalization: "Armário 1, Compartimento 1",
    categoria: "Lubrificantes",
    itemCritical: 10,
};

const ItemTeste7 = {
    id: 307,
    nome: "Luva nitrílica tamanho M",
    codigo: "LUV-NIT-M",
    quantidade: 80,
    itemLocalization: "Armário 2, Prateleira 1",
    categoria: "EPIs",
    itemCritical: 20,
};

const ItemTeste8 = {
    id: 308,
    nome: "Óculos de proteção incolor",
    codigo: "OCU-SEG-01",
    quantidade: 35,
    itemLocalization: "Armário 2, Prateleira 2",
    categoria: "EPIs",
    itemCritical: 10,
};

const ItemTeste9 = {
    id: 309,
    nome: "Cabo elétrico 2,5 mm² preto",
    codigo: "CAB-2.5-PT",
    quantidade: 200,
    itemLocalization: "Prateleira 3, Gaveta 1",
    categoria: "Elétrica",
    itemCritical: 50,
};

const ItemTeste10 = {
    id: 310,
    nome: "Disjuntor monopolar 20 A",
    codigo: "DISJ-20A",
    quantidade: 15,
    itemLocalization: "Prateleira 3, Gaveta 2",
    categoria: "Elétrica",
    itemCritical: 5,
};

const ItemTeste11 = {
    id: 311,
    nome: "Broca para metal 8 mm",
    codigo: "FUR-8MM",
    quantidade: 12,
    itemLocalization: "Painel de ferramentas, Posição 8",
    categoria: "Ferramentas",
    itemCritical: 4,
};

const ItemTeste12 = {
    id: 312,
    nome: "Chave combinada 13 mm",
    codigo: "CHV-13MM",
    quantidade: 8,
    itemLocalization: "Painel de ferramentas, Posição 13",
    categoria: "Ferramentas",
    itemCritical: 2,
};

const ItemTeste13 = {
    id: 313,
    nome: "Anel de vedação O-ring 25 mm",
    codigo: "VED-OR-25",
    quantidade: 60,
    itemLocalization: "Prateleira 4, Gaveta 1",
    categoria: "Vedação",
    itemCritical: 15,
};

const ItemTeste14 = {
    id: 314,
    nome: "Mangueira pneumática 8 mm",
    codigo: "MAN-PU-08",
    quantidade: 45,
    itemLocalization: "Prateleira 4, Gaveta 2",
    categoria: "Pneumática",
    itemCritical: 10,
};

const ItemTeste15 = {
    id: 315,
    nome: "Filtro de ar industrial",
    codigo: "FIL-AR-01",
    quantidade: 3,
    itemLocalization: "Prateleira 5, Gaveta 1",
    categoria: "Filtros",
    itemCritical: 5,
};

const items: Item[] = [
    ItemTeste,
    ItemTeste2,
    ItemTeste3,
    ItemTeste4,
    ItemTeste5,
    ItemTeste6,
    ItemTeste7,
    ItemTeste8,
    ItemTeste9,
    ItemTeste10,
    ItemTeste11,
    ItemTeste12,
    ItemTeste13,
    ItemTeste14,
    ItemTeste15,
];

export default items;