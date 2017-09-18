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
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
