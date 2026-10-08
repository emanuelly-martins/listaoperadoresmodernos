// 6. Misturando os conceitos
// 18. Sem executar, diga as duas saídas e explique a diferença.

const aluno = {
    nota: 0,
};

console.log(aluno.nota || 10); // 10
console.log(aluno.nota ?? 10); // 0
