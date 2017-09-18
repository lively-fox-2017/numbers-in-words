function numberToWords(number) {
  // Your code here
  if(number >= 200000) {
    return numberToWords(parseInt(number / 1000)) + 'ribu' + numberToWords(number % 1000)
  }

  if(number >= 100000) {
    return 'seratus ribu' + numberToWords(parseInt(number % 100000))
  }

  if(number >= 20000) {
    return numberToWords(parseInt(number / 1000)) + 'ribu' + numberToWords(number % 1000)
  }

  if(number >= 10000) {
    return 'sepuluh ribu' + numberToWords(parseInt(number % 10000))
  }

  if(number >= 2000) {
    return numberToWords(parseInt(number / 1000)) + 'ribu' + numberToWords(number % 1000)
  }

  if(number >= 1000) {
    return 'seribu' + numberToWords(parseInt(number % 1000))
  }

  if(number >= 200) {
    return numberToWords(parseInt(number / 100)) + ' ratus ' + numberToWords(number % 100)
  }

  if(number >= 100) {
    return 'seratus' + numberToWords(parseInt(number % 100))
  }

  if(number >= 20) {
    return numberToWords(parseInt(number / 10)) + ' puluh ' + numberToWords(number % 10)
  }

  if(number >= 12) {
    return numberToWords(number % 10) +' belas '
  }

  if(number >= 0) {
    switch (number) {
      case 0: return ''; break;
      case 1: return 'satu'; break;
      case 2: return 'dua'; break;
      case 3: return 'tiga'; break;
      case 4: return 'empat'; break;
      case 5: return 'lima'; break;
      case 6: return 'enam'; break;
      case 7: return 'tujuh'; break;
      case 8: return 'delapan'; break;
      case 9: return 'sembilan'; break;
      case 10: return 'sepuluh'; break;
      case 11: return 'sebelas'; break;
    }
  }

}

// Driver code
console.log(numberToWords(255));

module.exports = {
  numberToWords: numberToWords
}
