function numberToWords(number) {
  // Your code here
  let obj = {
    '0': '',
    '1': 'Satu',
    '2': 'Dua',
    '3': "Tiga",
    '4': 'Empat',
    '5': 'Lima',
    '6': 'Enam',
    '7': 'Tujuh',
    '8': 'Delapan',
    '9': 'Sembilan',
    '10': 'Sepuluh'
  }
  result = '';
  // satuan
  if (number <= 10) {
    result = obj[number.toString()];
  }
  // belasan
  if (number > 10 && number < 20) {

    var foo = number % 10
    if (foo === 1) {
      result = 'Sebelas'
    } else {
      result = obj[foo.toString()] + ' belas';
    }
  }
  // puluhan
  if (number >= 20 && number < 100) {
    foo = Math.floor(number / 10)
    console.log(foo)
    result = obj[foo.toString()] + ' puluh ' + numberToWords(number % 10);
  }
   
  
  //ratusan
  if (number >= 100 && number < 200) {
   
    result = ' seratus ' + numberToWords(number % 100);
  }
  // dua ratusan
  if (number >= 200 && number < 1000) {
    foo = Math.floor(number / 100);
    console.log(foo)
    result = obj[foo.toString()] + ' ratus ' + numberToWords(number % 100)

  }
  // seribuan
  if (number >= 1000 && number < 2000) {

    result = 'seribu ' + numberToWords(number % 100)
  }

  // duaribuan
  if (number >= 2000 && number < 1000000) {

    foo = Math.floor(number / 1000)
    console.log(foo)
    result = numberToWords(foo) + ' ribu ' + numberToWords(number - (foo * 1000))
  }
  //sejutaan
  if (number >= 1000000 && number < 1000000000) {

    foo = Math.floor(number / 1000000)
    console.log(foo)
    result = numberToWords(foo) + ' juta ' + numberToWords(number - (foo * 1000000))
  }
  // semilyar
  if (number >= 1000000000 && number < 1000000000000) {
    foo = Math.floor(number / 1000000000)
    console.log(foo)
    result = numberToWords(foo) + ' milyar ' + numberToWords(number - (foo * 1000000000))
  }
  // setriliun
  if (number >= 1000000000000 && number < 1000000000000000) {
    foo = Math.floor(number / 1000000000000)
    console.log(foo)
    result = numberToWords(foo) + ' triliun ' + numberToWords(number - (foo * 1000000000000))
  }


  return result
}

// Driver code
console.log(numberToWords(30));

module.exports = {
  numberToWords: numberToWords
}