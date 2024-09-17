interface Produto {
  id: number;
  nome: string;
  preco: number;
}

let produtos: Produto[] = [];

function cadastrarProduto(produto: Produto) {
  produtos.push(produto);
}

function listarProdutos(): Produto[] {
  return produtos;
}

function excluirProduto(id: number) {
  produtos = produtos.filter(produto => produto.id !== id);
}

cadastrarProduto({ id: 1, nome: 'Produto A', preco: 10 });
cadastrarProduto({ id: 2, nome: 'Produto B', preco: 20 });
excluirProduto(1);
console.log(listarProdutos());
