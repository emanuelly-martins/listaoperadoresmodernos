// 6. Misturando os conceitos
// 20. Complete usando ?. e ?? para exibir o telefone ou "Telefone não informado".

const pedido = {
    cliente: {
        nome: 'Pedro',
    },
};

const telefone = pedido.cliente?.telefone ?? 'Telefone não informado';
console.log(telefone);
// Telefone não informado
