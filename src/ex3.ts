interface Carteira {
  saldo: number;
  entradas: number[];
  saidas: number[];
}

function criarCarteira(): Carteira {
  return { saldo: 0, entradas: [], saidas: [] };
}

function adicionarEntrada(carteira: Carteira, valor: number) {
  carteira.saldo += valor;
  carteira.entradas.push(valor);
}

function adicionarSaida(carteira: Carteira, valor: number) {
  if (valor > carteira.saldo) {
    console.error('Saldo insuficiente');
  } else {
    carteira.saldo -= valor;
    carteira.saidas.push(valor);
  }
}

const minhaCarteira = criarCarteira();
adicionarEntrada(minhaCarteira, 100);
adicionarSaida(minhaCarteira, 50);
console.log(minhaCarteira);
