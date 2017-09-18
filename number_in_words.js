function numberToWords(number) {
  // Your code here
  var daftarAngka = ['','satu','dua','tiga','empat','lima','enam','tujuh', 'delapan','sembilan','sepuluh','sebelas'];
  if(number<=11){
    return daftarAngka[number];
  }
  if(number<=19){
    return daftarAngka[number] + " belas " + numberToWords(number-10);
  }
  if(number<=99){
    return daftarAngka[Math.floor(number/10)] + " puluh " + numberToWords(number%10);
  }
  if(number<=199){
    return "seratus " + numberToWords(number-100);
  }
  if(number<=999){
    return daftarAngka[Math.floor(number/100)] + " ratus " + numberToWords(number % 100);
  }
  if(number<=1999){
    return "seribu " + numberToWords(number-1000);
  }
  if(number<=999999){
    return numberToWords(Math.floor(number/1000)) + " ribu " + numberToWords(number % 1000);
  }
  if(number<=999999999){
    return numberToWords(Math.floor(number/1000000)) + " juta " + numberToWords(number % 1000000);
  }
  if(number<=999999999999){
    return numberToWords(Math.floor(number/1000000000)) + " milyar " + numberToWords(number % 1000000000);
  }
  if(number<=999999999999999){
    return numberToWords(Math.floor(number/1000000000000)) + " triliun " + numberToWords(number % 1000000000000);
  }
}

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(20));
console.log(numberToWords(100));
console.log(numberToWords(211));
console.log(numberToWords(1000));
console.log(numberToWords(11000));
console.log(numberToWords(111000));
console.log(numberToWords(1111000));
console.log(numberToWords(1001));
console.log(numberToWords(5001));
console.log(numberToWords(51000));
console.log(numberToWords(1000000));
console.log(numberToWords(1000000000000));
console.log(numberToWords(1234567897524));
console.log(numberToWords(1111111111));
console.log(numberToWords(1111111111111));

module.exports = {
  numberToWords: numberToWords
}
