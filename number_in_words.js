function numberToWords(number) {
  let literal = {
    '1': 'Satu',
    '2': 'Dua',
    '3': 'Tiga',
    '4': 'Empat',
    '5': 'Lima',
    '6': 'Enam',
    '7': 'Tujuh',
    '8': 'Delapan',
    '9': 'Sembilan',
    '10': 'Sepuluh',
    '11': 'Sebelas',
  }
  let result = '';

  if (number <= 11) {
    result = literal[number.toString()];
  } else if (number < 20 && number > 11) {
    result = literal[(number % 10).toString()] + " Belas ";
  } else if (number < 100) {
    result = (number < 20) ? literal[(number % 10).toString()] + " Belas " : literal[Math.floor(number / 10).toString()] + " Puluh " + numberToWords(number % 10);
  } else if (number < 1000) {
    result = ((number < 200) ? " Seratus " : literal[Math.floor(number / 100).toString()] + " Ratus ") + numberToWords(number % 100);
  } else if (number < 1000000) {
    result = ((number < 2000) ? " Seribu " : numberToWords((number - (number % 1000)) / 1000) + " Ribu ") + numberToWords(number % 1000);
  } else if (number < 1000000000) {
    result = numberToWords((number - (number % 1000000)) / 1000000) + " Juta " + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
    result = numberToWords((number - (number % 1000000000)) / 1000000000) + " Miliar " + numberToWords(number % 1000000000);
  } else if (number < 1000000000000000) {
    result = numberToWords((number - (number % 1000000000000)) / 1000000000000) + " Triliun " + numberToWords(number % 1000000000000);
  }

  return result;
}

// Driver code
console.log(numberToWords(999999999999999));

module.exports = {
  numberToWords: numberToWords
}
