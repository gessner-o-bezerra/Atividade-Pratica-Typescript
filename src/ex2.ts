interface NotaComPeso {
  nota: number;
  peso: number;
}

function calcularMediaPonderada(notas: NotaComPeso[]): number {
  const totalPeso = notas.reduce((acc, cur) => acc + cur.peso, 0);
  const media = notas.reduce((acc, cur) => acc + cur.nota * cur.peso, 0) / totalPeso;
  return media;
}

console.log(calcularMediaPonderada([{ nota: 7, peso: 2 }, { nota: 5, peso: 3 }]));
