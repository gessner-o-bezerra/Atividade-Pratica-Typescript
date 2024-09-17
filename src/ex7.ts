type UserOuDiretor = User | Diretor;

function mostrarInformacoes(lista: UserOuDiretor[]) {
  lista.forEach(item => {
    if ('comissaoNivel' in item) {
      mostrarInformacoesDiretor(item);
    } else {
      mostrarInformacoesUsuario(item);
    }
  });
}

const listaPessoas: UserOuDiretor[] = [
  { nome: 'Daphne', idade: 23, ocupacao: 'Analista de TI', salario: 1000 },
  { nome: 'Carlos', idade: 45, comissaoNivel: 3 },
];

mostrarInformacoes(listaPessoas);
