function numeroNegativo(a) {
    var numeroMenorQueZero = false;

    if(a < 0){
        numeroMenorQueZero = true;     
    }

    return numeroMenorQueZero;
  }
module.exports = numeroNegativo;