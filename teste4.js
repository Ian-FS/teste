const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor);

Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
    console.log(`Percentual de representação de ${estado}: ${(valor / totalFaturamento * 100).toFixed(2)}%`);
});
