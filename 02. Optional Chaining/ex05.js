// 2. Optional Chaining (?.)
// 5. Use ?. para acessar o e-mail do diretor.

const escola = {
    diretor: {
        contato: {
            email: 'diretor@escola.com',
        },
    },
};

console.log(escola.diretor?.contato?.email);
// diretor@escola.com
