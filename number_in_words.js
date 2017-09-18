"use strict"

function numberToWords(number) {
  // Your code here
  let nominal = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh',
                 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas',
                 'delapan belas', 'sembilan belas'];

  let tampung = '';


  for(let i = number.toString().length; i > 0; i--){
    let toNumb = number.toString();
    let digit = nominal[Number(toNumb[0])];

    if(number.toString().length === 4){
      if (digit === 1) {
         tampung += 'seribu';
      } else {
         tampung += digit + ' ribu ';
      }
      number -= Number(toNumb[0])*1000;
    } else if(number.toString().length === 3){
      if (digit === 1) {
         tampung += 'seratus';
      } else {
         tampung += digit + ' ratus ';
      }
      number -= Number(toNumb[0])*100;
    } else if(number.toString().length === 2 && number >= 20){
      tampung += digit + ' puluh ';
      number -= Number(toNumb[0])*10;
    } else if(number.toString().length <= 2 && number <= 20) {
      tampung += nominal[number];
      number = 0;
    }
  }
  return tampung;

  }
// Driver code
// Driver code
// console.log(numberInWord(100000));
console.log(numberToWords(19));
console.log(numberToWords(5001));
console.log(numberToWords(10));
console.log(numberToWords(10000)); //belum masuk


module.exports = {
  numberToWords: numberToWords
}
