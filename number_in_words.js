var angka = [
  [0, ''],
  [1, 'satu'],
  [2, 'dua'],
  [3, 'tiga'],
  [4, 'empat'],
  [5, 'lima'],
  [6, 'enam'],
  [7, 'tujuh'],
  [8, 'delapan'],
  [9, 'sembilan']

];
var nominal = ['', '', 'puluh', 'ratus', 'ribu', 'juta'];
var khusus = ['', '', '', 'seratus', 'seribu'];

function numberToWords(number) {
  //   let pecah = number.toString().split('');
  // let datas=[];
  let hasil = '';
  for (var a = 1; a < angka.length; a++) {
    while (number >= 10000) {
      pecah = number.toString().split('');
      console.log(pecah);
      if(pecah.length===5){
        hasils = pecah.slice(0,2).join('');
        hasils = pecah.slice(2,pecah.length).join('');
      }
     console.log(hasils);
      number = parseInt(hasils);
      console.log(hasils);
    }
    while (number >= 2000) {
      pecah = number.toString().split('');
      console.log(pecah);
      hasil += angka[pecah[0]][1] + ' ' + nominal[pecah.length] + ' ';
      pisah = pecah.slice(1, pecah.length);
      number = parseInt(pisah.join(''));
    }
    while (number >= 1000) {
      pecah = number.toString().split('');
      console.log(pecah);
      hasil += khusus[pecah.length] + ' ';
      pisah = pecah.slice(1, pecah.length);
      number = parseInt(pisah.join(''));
    }
    while (number >= 200) {
      pecah = number.toString().split('');
      console.log(pecah);
      hasil += angka[pecah[0]][1] + ' ' + nominal[pecah.length] + ' ';
      pisah = pecah.slice(1, pecah.length);
      number = parseInt(pisah.join(''));
    }
    while (number >= 100) {
      pecah = number.toString().split('');
      console.log(pecah);
      hasil += khusus[pecah.length] + ' ';
      pisah = pecah.slice(1, pecah.length);
      number = parseInt(pisah.join(''));
      console.log(number);
    }
    while (number >= 20) {
      pecah = number.toString().split('');
      console.log(pecah);
      hasil += angka[pecah[0]][1] + ' ' + nominal[pecah.length] + ' ';
      number = pecah.slice(1, pecah.length);
    }
    while (number >= 11) {
      pecah = number.toString().split('');
      hasil += angka[pecah[1]][1] + ' belas';
      console.log(pecah);
      number -= number;
    }
    while (number >= 10) {
      hasil += 'sepuluh';
      number -= number;
    }
    while (number >= 1) {
      console.log(angka[number][1]);
      hasil += angka[number][1];
      number -= number;
    }
  }
  return hasil;
}

// Driver code
console.log(numberToWords(19989));
// console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
};