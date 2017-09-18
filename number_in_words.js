function numberToWords(number) {
  // Your code here
  var a = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  var b = ['ribu', 'juta', 'milyar', 'triliun'];
  var numberStr = number.toString().split('');
  var tampung = '';

  if(number < 10){
    // satuan
    tampung += a[number];
  }

  if(number === 10){
    // sepuluh & sebelah
    tampung += 'sepuluh';
  }

  if(number === 11){
    tampung += 'sebelas';
  }

  if(number > 11 && number < 20){
    // belasan
    tampung += a[numberStr[1]] + ' belas';
  }

  if(number >= 20 && number < 100){
    // puluhan
    tampung += a[numberStr[0]] + ' puluh ' + a[numberStr[1]];
  }

  if(number >= 100 && number < 1000){
    // ratusan
    tampung += a[numberStr[0]] + ' ratus ' + a[numberStr[1]] + ' puluh ' + a[numberStr[2]];
  }

  if(number >= 1000 && number < 1000000){
    // ribuan
    tampung += a[numberStr[0]] + ' ratus ' + a[numberStr[1]] + ' puluh ' + a[numberStr[2]];
  }

  return tampung;
}

// Driver code
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
