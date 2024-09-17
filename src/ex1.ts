interface MediaResult {
  media: number;
  aprovado: boolean;
}

function calcularMedia(nota1: number, nota2: number): MediaResult {
  const media = (nota1 + nota2) / 2;
  return {
    media,
    aprovado: media >= 6,
  };
}

console.log(calcularMedia(7, 5));
