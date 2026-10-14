export interface Tool {
    id: number;
    nome: string;
    codigo: string;
    categoria: string;
    localizacao: string;
}

const ToolTeste = {
    id: 401,
    nome: "Chave de fenda",
    codigo: "CHV-FEN-001",
    categoria: "Manual",
    localizacao: "Prateleira 1, Gaveta 1",
};

const ToolTeste2 = {
    id: 402,
    nome: "Furadeira elétrica",
    codigo: "FUR-ELE-001",
    categoria: "Elétrica",
    localizacao: "Armário 1, Prateleira 1",
};

const ToolTeste3 = {
    id: 403,
    nome: "Alicate universal",
    codigo: "ALC-UNI-001",
    categoria: "Manual",
    localizacao: "Prateleira 1, Gaveta 2",
};

const ToolTeste4 = {
    id: 404,
    nome: "Chave inglesa",
    codigo: "CHV-ING-001",
    categoria: "Manual",
    localizacao: "Prateleira 1, Gaveta 3",
};

const ToolTeste5 = {
    id: 405,
    nome: "Parafusadeira",
    codigo: "PAR-ELE-001",
    categoria: "Elétrica",
    localizacao: "Armário 1, Prateleira 2",
};

const ToolTeste6 = {
    id: 406,
    nome: "Chave grifo",
    codigo: "CHV-GRI-001",
    categoria: "Hidráulica",
    localizacao: "Prateleira 2, Gaveta 1",
};

const ToolTeste7 = {
    id: 407,
    nome: "Serra circular",
    codigo: "SER-CIR-001",
    categoria: "Elétrica",
    localizacao: "Armário 2, Prateleira 1",
};

const ToolTeste8 = {
    id: 408,
    nome: "Martelo de unha",
    codigo: "MAR-UNH-001",
    categoria: "Manual",
    localizacao: "Prateleira 1, Gaveta 4",
};

const ToolTeste9 = {
    id: 409,
    nome: "Chave Allen",
    codigo: "CHV-ALL-001",
    categoria: "Manual",
    localizacao: "Prateleira 2, Gaveta 2",
};

const ToolTeste10 = {
    id: 410,
    nome: "Esmerilhadeira",
    codigo: "ESM-ELE-001",
    categoria: "Elétrica",
    localizacao: "Armário 2, Prateleira 2",
};

const ToolTeste11 = {
    id: 411,
    nome: "Alicate de pressão",
    codigo: "ALC-PRE-001",
    categoria: "Manual",
    localizacao: "Prateleira 2, Gaveta 3",
};

const ToolTeste12 = {
    id: 412,
    nome: "Chave de grifo grande",
    codigo: "CHV-GRI-002",
    categoria: "Hidráulica",
    localizacao: "Prateleira 3, Gaveta 1",
};

const ToolTeste13 = {
    id: 413,
    nome: "Multímetro digital",
    codigo: "MUL-DIG-001",
    categoria: "Elétrica",
    localizacao: "Armário 3, Prateleira 1",
};

const ToolTeste14 = {
    id: 414,
    nome: "Arco de serra",
    codigo: "ARC-SER-001",
    categoria: "Manual",
    localizacao: "Prateleira 3, Gaveta 2",
};

const ToolTeste15 = {
    id: 415,
    nome: "Chave para tubos",
    codigo: "CHV-TUB-001",
    categoria: "Hidráulica",
    localizacao: "Prateleira 3, Gaveta 3",
};

const tools: Tool[] = [
    ToolTeste,
    ToolTeste2,
    ToolTeste3,
    ToolTeste4,
    ToolTeste5,
    ToolTeste6,
    ToolTeste7,
    ToolTeste8,
    ToolTeste9,
    ToolTeste10,
    ToolTeste11,
    ToolTeste12,
    ToolTeste13,
    ToolTeste14,
    ToolTeste15,
];

export default tools;