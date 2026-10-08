// 2. Optional Chaining (?.)
// 1. Mostre a cidade usando Optional Chaining.

const aluno = {
    nome: 'Carlos',
    endereco: {
    cidade: 'São Paulo',
    },
};

console.log("Cidade de Carlos:", aluno.endereco?.cidade);
// Cidade de Carlos: São Paulo
