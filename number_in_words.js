function numberToWords(number) {
  // Your code here
  if(number <= 11) {
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
  else if(number < 20) {
    return numberToWords(number % 10) + 'belas'
  }
  else if(number < 100) {
    return numberToWords(parseInt(number / 10)) + ' puluh ' + numberToWords(number % 10)
  }
  else if(number < 1000) {
    if(number % 100) {
      return numberToWords(parseInt(number / 100)) + ' ratus ' + numberToWords(number % 100)
    }
  }
}

// Driver code
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
