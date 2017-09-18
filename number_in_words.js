function numberToWords(number) {
  // Your code here
  var daftarKata = ['puluh','ratus','ribu','juta','milliar','triliun', 'belas'];
  var daftarAngka = ['se', 'dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  var hasil = "";
  var strNumber = number.toString().split('');
  while(strNumber.length>0){
    if(strNumber.join('') === '1'){
      hasil += 'satu'
      strNumber.shift();
    }
    switch(strNumber.length){
      case 1:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        strNumber.shift();
        break;
      case 2:
        if(strNumber[0] === '1'){
          hasil += daftarAngka[parseInt(strNumber[1] - 1)];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[6] + " ";
          strNumber.shift();
          strNumber.shift();
        }
        else{
          hasil += daftarAngka[parseInt(strNumber[0]) - 1];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[0] + " ";
          strNumber.shift();
        }
        break;
      case 3:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[1] + " ";
        strNumber.shift();
        break;
    }
  }
  return hasil;
}

// Driver code
console.log(numberToWords(212));
//
// module.exports = {
//   numberToWords: numberToWords
// }
