function calculaMenor(listaFaturamentoAnual) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;
  for (const faturamento of listaFaturamentoAnual) {
    if (faturamento > 0) {
      if (faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
      }
      if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
      }
      somaFaturamento += faturamento;
      diasComFaturamento++;
    }
  }
  let mediaFaturamento = somaFaturamento / diasComFaturamento;

  let diasAcimaDaMediaFaturamento = 0;

  for (const faturamento of listaFaturamentoAnual) {
    if (faturamento > mediaFaturamento) {
      diasAcimaDaMediaFaturamento++;
    }
  }
  return { menorFaturamento, maiorFaturamento, diasAcimaDaMediaFaturamento };
}
