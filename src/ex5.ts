interface User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
}

function mostrarInformacoesUsuario(user: User) {
  const salario = user.salario ? `R$ ${user.salario}` : 'N/A';
  console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, salário ${salario}`);
}

mostrarInformacoesUsuario({ nome: 'Daphne', idade: 23, ocupacao: 'Analista de TI', salario: 1000 });
mostrarInformacoesUsuario({ nome: 'Daphne', idade: 23, ocupacao: 'Analista de TI' });
