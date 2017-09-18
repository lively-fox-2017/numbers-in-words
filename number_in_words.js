function numberToWords(number) {
  // Your code here
  var a = {
    '0' : '',
    '1' : 'satu',
    '2' : 'dua',
    '3' : 'tiga',
    '4' : 'empat',
    '5' : 'lima',
    '6' : 'enam',
    '7' : 'tujuh',
    '8' : 'delapan',
    '9' : 'sembilan',
    '10' : 'sepuluh',
    '11' : 'sebelas'
  }
  var tampung = 0;

  if(number >= 0 && number <=11){
    return a[number.toString()]
  }

  if(number > 11 && number < 20){
    tampung = number%10;
    return a[tampung.toString()] + ' belas';
  }

  if(number >= 20 && number < 100){
    var angka = Math.floor(number/10);
    return a[angka] + ' puluh ' + numberToWords(number%10);
  }

  if(number >= 100 && number < 200){
    var angka = Math.floor(number/100);
    return 'seratus ' + numberToWords(number%100);
  }

  if(number >= 200 && number < 1000){
    var angka = Math.floor(number/100);
    return a[angka] + ' ratus ' + numberToWords(number%100);
  }

  if(number >= 1000 && number < 2000){
    var angka = Math.floor(number/1000);
    return 'seribu ' + numberToWords(number%1000);
  }
  if(number >= 2000 && number < 1000000){
    var angka = Math.floor(number/1000);
    return numberToWords(angka) + ' ribu ' + numberToWords(number%1000);
  }

  if(number >= 1000000 && number < 1000000000){
    var angka = Math.floor(number/1000000);
    return numberToWords(angka) + ' juta ' + numberToWords(number%1000000);
  }

  if(number >= 1000000000 && number < 1000000000000){
    var angka = Math.floor(number/1000000000);
    return numberToWords(angka) + ' miliar ' + numberToWords(number%1000000000);
  }

  if(number >= 1000000000000 && number < 1000000000000000){
    var angka = Math.floor(number/1000000000000);
    return numberToWords(angka) + ' triliun ' + numberToWords(number%1000000000000);
  }
}

// Driver code
console.log(numberToWords(111111111111111));

module.exports = {
  numberToWords: numberToWords
}
