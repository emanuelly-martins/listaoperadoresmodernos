// 6. Misturando os conceitos
// 17. Faça o código mostrar "Cidade não informada" sem gerar erro.

const usuario = {};

const cidade = usuario?.cidade ?? 'Cidade não informada';
console.log(cidade);
// Cidade não informada
