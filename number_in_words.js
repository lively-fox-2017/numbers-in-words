function numberToWords(number) {
  let angkaHuruf = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];//library angka dalam huruf
  let numSplit = String(number).split(''); // merubah inputan number menjadi array

    if(number <= 11){ //jika number inputan kurang dari / sama dengan 11, return array angkaHuruf yg indeksnya sama dengan inputan
      return angkaHuruf[number];
    }else if(number <= 19){ // jika number inputan kurang dari / sama dengan 19, return array angkaHuruf indeks ke (hasil convert to array inputan indeks ke 1) + belas
      return angkaHuruf[numSplit[1]] + ' belas';
    }else if(number <= 99){ // jika number inputan kurang dari / sama dengan 99,
      return angkaHuruf[numSplit[0]] + ' puluh ' + angkaHuruf[numSplit[1]].split('nol').join('');// return array angkaHuruf indeks ke (hasil convert to array inputan indeks ke 0) + puluh + array angkaHuruf indeks ke (hasil convert to array inputan indeks ke 1)
    }else if(number <= 199){// jika number inputan kurang dari / sama dengan 199,
      return 'seratus '  + numberToWords(number-100).split('nol').join(''); // return seratus + recursif fungsi numberToWords
    }else if(number <= 999){
      return angkaHuruf[numSplit[0]] + ' ratus ' + numberToWords(number-(100*numSplit[0]) ).split('nol').join('');
    }else if(number <= 1999){
      return 'seribu ' + numberToWords(number-(1000*numSplit[0]) ).split('nol').join('');
    }else if(number <= 999999){
      return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000).split('nol').join('');
    }else if (number <= 999999999) {
      return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000).split('nol').join('');
    }else if (number <= 999999999999){
      return numberToWords(Math.floor(number/1000000000)) + ' miliar ' + numberToWords(number%1000000000).split('nol').join('');
    }else if (number <= 999999999999999){
      return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(number%1000000000000).split('nol').join('');
    }
  }

// Driver code
console.log(numberToWords(999000000000000));

module.exports = {
  numberToWords: numberToWords
}
