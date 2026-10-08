// 8. Fechamento
// Em uma frase, explique a diferença entre || e ??.

// Exemplo de execução disponível no exercício 6.18:
const aluno = {
    nota: 0,
};

console.log(aluno.nota || 10); // 10
console.log(aluno.nota ?? 10); // 0

// ||     →  Retorna o valor 10 se a váriavel for qualquer valor considerado falsy (0, “”, false, null ou undefined)

// ??   →  Retorna o valor 10 somente se a váriavel for null ou undefined. O ?? respeita valores como 0 e “” como sendo truthy
