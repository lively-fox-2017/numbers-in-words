function numberToWords(number) {
  // Your code here
  var angka = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh'];
  var belas = ['sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  var satuan = ['belas','puluh','ratus','ribu'];

  if(number <= 10){
    return angka[number - 1];
  }
  else if(number > 10 && number < 19 ){
    return belas[(number % 10)-1];
  }
  else if (number > 19 && number <= 99){
    return angka[Math.floor((number/10)-1)] + ' puluh ' + numberToWords(number % 10);
  }
  else if (number > 99 && number < 1000){
    return angka[Math.floor((number / 100)-1)] + ' ratus ' + numberToWords(number % 100);
  }

}



// Driver code
console.log(numberToWords(199));

module.exports = {
  numberToWords: numberToWords
}
