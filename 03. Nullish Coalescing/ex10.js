// 3. Nullish Coalescing (??)
// 10. Complete usando o operador adequado.

const usuario = {
  apelido: undefined
};

const nomeExibido = usuario.apelido ?? "Visitante";
console.log(nomeExibido);
// Visitante
