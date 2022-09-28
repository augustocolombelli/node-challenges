function somaValores(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    return soma;
  }
module.exports = somaValores;