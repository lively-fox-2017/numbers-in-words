function numberToWords(number) {
  // Your code here
  var angka = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
  var belas = ['sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

  if (number <= 10){
    return angka[number - 1];
  }
  else if (number > 10 && number <= 19){
    return belas[(number % 10) - 1];
  }
  else if (number > 19 && number <= 99){
    return angka[Math.floor((number / 10) - 1)] + ' puluh ' + numberToWords(number % 10);
  }
  else if (number >= 100 && number < 200){
    return 'seratus ' + numberToWords(number % 100);
  }
  else if (number >= 200 && number <= 999){
    return angka[Math.floor((number / 100) - 1)] + ' ratus ' + numberToWords(number % 100);
  }
  else if (number >= 1000 && number < 2000){
    return 'seribu ' + numberToWords(number % 1000);
  }
  else if (number >= 2000 && number <= 9999){
    return angka[Math.floor((number / 1000) - 1)] + ' ribu ' + numberToWords(number % 1000);
  }
  else if (number > 10000 && number <= 99999){
    return angka[Math.floor((number / 10000) - 1)] + ' puluh ' + numberToWords(number % 10000);
  }
  else if (number > 100000 && number <= 999999){
    return angka[Math.floor((number / 100000) - 1)] + ' ratus ' + numberToWords(number % 100000);
  }
  else if (number >= 1000000 && number < 2000000){
    return 'sejuta ' + numberToWords(number % 1000);
  }
  else if (number > 2000000 && number <= 9999999){
    return angka[Math.floor((number / 1000000) - 1)] + ' juta ' + numberToWords(number % 1000000);
  }
  else if (number > 10000000 && number <= 99999999){
    return angka[Math.floor((number / 10000000) - 1)] + ' puluh ' + numberToWords(number % 10000000);
  }
  else if (number > 100000000 && number <= 999999999){
    return angka[Math.floor((number / 100000000) - 1)] + ' ratus ' + numberToWords(number % 100000000);
  }
  else if (number > 1000000000 && number <= 9999999999){
    return angka[Math.floor((number / 1000000000) - 1)] + ' milyar ' + numberToWords(number % 1000000000);
  }
  else if (number > 10000000000 && number <= 99999999999){
    return angka[Math.floor((number / 10000000000) - 1)] + ' puluh ' + numberToWords(number % 10000000000);
  }
  else if (number > 100000000000 && number <= 999999999999){
    return angka[Math.floor((number / 100000000000) - 1)] + ' ratus ' + numberToWords(number % 100000000000);
  }
  else if (number > 1000000000000 && number <= 9999999999999){
    return angka[Math.floor((number / 1000000000000) - 1)] + ' triliun ' + numberToWords(number % 1000000000000);
  }
  else if (number > 10000000000000 && number <= 99999999999999){
    return angka[Math.floor((number / 10000000000000) - 1)] + ' puluh ' + numberToWords(number % 10000000000000);
  }
  else if (number > 100000000000000 && number <= 999999999999999){
    return angka[Math.floor((number / 100000000000000) - 1)] + ' ratus ' + numberToWords(number % 100000000000000);
  }

}

// Driver code
console.log(numberToWords(999999749753333));
console.log(numberToWords(9999749753333));
console.log(numberToWords(521749753333));
console.log(numberToWords(21749753333));
console.log(numberToWords(1749753333));
console.log(numberToWords(749753333));
console.log(numberToWords(49753333));
console.log(numberToWords(9753333));
console.log(numberToWords(1000333));
console.log(numberToWords(753333));
console.log(numberToWords(53333));
console.log(numberToWords(3333));
console.log(numberToWords(1999));
console.log(numberToWords(999));
console.log(numberToWords(756));
console.log(numberToWords(126));
console.log(numberToWords(21));
console.log(numberToWords(19));
console.log(numberToWords(10));

module.exports = {
  numberToWords: numberToWords
};
