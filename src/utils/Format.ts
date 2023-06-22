function convertirAMoneda(valor:number) {
  let formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  });
  return formatter.format(valor);
}
export default convertirAMoneda
