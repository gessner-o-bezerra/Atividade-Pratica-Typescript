interface Diretor {
  nome: string;
  idade: number;
  salario?: number;
  comissaoNivel: number;
}

function mostrarInformacoesDiretor(diretor: Diretor) {
  const salario = diretor.salario ? `R$ ${diretor.salario}` : 'N/A';
  console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.comissaoNivel}, salário ${salario}`);
}

mostrarInformacoesDiretor({ nome: 'Daphne', idade: 23, comissaoNivel: 5, salario: 1000 });
mostrarInformacoesDiretor({ nome: 'Daphne', idade: 23, comissaoNivel: 5 });
