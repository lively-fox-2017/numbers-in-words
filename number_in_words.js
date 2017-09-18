function numberToWords(number) {

  /**
   *
   * Words for number
   *
   * Index matched with element, ex: words[8] = 'delapan'
   *
   */
  const words = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas'
  ];

  // Below 12
  if (number < 12) {

    return words[number];

  // Below 20 (Belasan)
  } else if (number < 20) {

    return numberToWords(number - 10) + ' belas ';

  // Below 100 (Puluhan)
  } else if (number < 100) {

    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);

  // Below 200 (Ratusan) - Se-
  } else if (number < 200) {

    return 'seratus ' + numberToWords(number % 100);

  // Below 1.000 (ratusan) - `Number` + ratus
  } else if (number < 1000) {

    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);

  // Below 2.000 (ribuan) - Se-
  } else if (number < 2000) {

    return 'seribu ' + numberToWords(number % 1000);

  // Below 1.000.000 (ribuan)
  } else if (number < 1000000) {

    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);

  // Below 1.000.000.000 (jutaan)
  } else if (number < 1000000000) {

    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);

  // Below 1.000.000.000.000 (milyaran)
  } else if (number < 1000000000000) {

    return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);

  // Below 1.000.000.000.000.000 (triliun)
  } else if (number < 1000000000000000) {

    return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000);

  }

}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
