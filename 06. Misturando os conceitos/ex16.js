// 6. Misturando os conceitos
// 16. Complete os espaços para que o resultado seja Maria.

const usuario = {
    perfil: {
        nome: 'Maria',
    },
};

const nome = usuario.perfil?.nome ?? 'Sem nome';
console.log(nome);
// Maria
