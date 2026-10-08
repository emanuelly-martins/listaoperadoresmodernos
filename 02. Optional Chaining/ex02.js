// 2. Optional Chaining (?.)
// 2. Tente acessar a rua sem causar erro caso endereco não exista.

const usuario = {
    nome: 'Ana',
};

console.log('Rua de Ana:', usuario.endereco?.rua);
// Rua de Ana: undefined
