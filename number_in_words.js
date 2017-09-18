function numberToWords(number) {
  const angka = ['nol','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'],
       satuan = [' puluh ',' belas ',' ratus ',' ribu ',' juta ',' milyar ',' triliun '];
  if (number<=11) {
    return angka[number];
  } else
  if (number<20) {
    return numberToWords(number-10)+' belas';
  } else
  if (number<100) {//dibawah 100
    return numberToWords((number-number%10)/10)+satuan[0]+numberToWords(number%10).replace('nol','');
  } else
  if (number<200) {
    return 'seratus '+numberToWords(number%100).replace('nol','');
  } else
  if (number<1000) {//dibawah 1000
    return numberToWords((number-number%100)/100)+' ratus '+numberToWords(number%100).replace('nol','');
  } else
  if (number<2000) {//dibawah 2ribu (seribuan)
    return 'seribu '+numberToWords(number%1000).replace('nol','');
  } else
  if (number<10000) {//dibawah 10ribu (ribuan)
    return numberToWords((number-number%1000)/1000)+' ribu '+numberToWords(number%1000).replace('nol','');
  } else
  if (number<100000) {//dibawah 100ribu (puluhan ribu)
    return numberToWords((number-number%1000)/1000).replace('nol','')+' ribu '+numberToWords(number%1000).replace('nol','');
  }else
  if (number<1000000) {//dibawah 1juta (ratus ribu)
    return numberToWords((number-number%1000)/1000).replace('nol','')+' ribu '+numberToWords(number%1000).replace('nol','');
  } else
  if (number<10000000) {//dibawah 10 juta (jutaan)
    return numberToWords((number-number%1000000)/1000000).replace('nol','')+' juta '+numberToWords(number%1000000).replace('nol','');
  }else
  if (number<1000000000) {//dibawah 1 m (puluhan-ratusan jutaan)
    return numberToWords((number-number%1000000)/1000000).replace('nol','')+' juta '+numberToWords(number%1000000).replace('nol','');
  }else
  if (number<1000000000000) {//dibawah 1 t (milyaran)
    return numberToWords((number-number%1000000000)/1000000000).replace('nol','')+' milyar '+numberToWords(number%1000000000).replace('nol','');
  }else
  if (number<1000000000000000) {//dibawah 1 b (triliun)
    return numberToWords((number-number%1000000000000)/1000000000000).replace('nol','')+' triliun '+numberToWords(number%1000000000000).replace('nol','');
  }
}

// Driver code
console.log(numberToWords(999000000000000));

module.exports = {
  numberToWords: numberToWords
}
