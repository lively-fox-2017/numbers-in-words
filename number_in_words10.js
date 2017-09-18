function numberToWords(number) {
  // Your code here
  var hasil = ''
  var numberBaru = number.toString().split('')
  console.log(numberBaru)
  if(numberBaru.length == 1) {
    if(numberBaru == '1') {
      hasil = hasil + 'satu'
      return hasil
    }
    else if(numberBaru == '2') {
      hasil = hasil + 'dua'
      return hasil
    }
    else if(numberBaru == '3') {
      hasil = hasil + 'tiga'
      return hasil
    }
    else if(numberBaru == '4') {
      hasil = hasil + 'empat'
      return hasil
    }
    else if(numberBaru == '5') {
      hasil = hasil + 'lima'
      return hasil
    }
    else if(numberBaru == '6') {
      hasil = hasil + 'enam'
      return hasil
    }
    else if(numberBaru == '7') {
      hasil = hasil + 'tujuh'
      return hasil
    }
    else if(numberBaru == '8') {
      hasil = hasil + 'delapan'
      return hasil
    }
    else if(numberBaru == '9') {
      hasil = hasil + 'sembilan'
      return hasil
    }
  } else if(numberBaru.length == 2) {
    if(numberBaru[0] == '1' && numberBaru[1] == '0') {
      hasil = hasil + 'sepuluh'
      return hasil
    }
    else if((numberBaru[0] > '1' || numberBaru[0] <= '9') && numberBaru[1] == '0') {
      hasil = hasil + numberToWords(numberBaru[0]) + ' puluh'
      return hasil
    }
    else if(numberBaru[0] == '1' && numberBaru[1] == '1') {
      hasil = hasil + 'sebelas'
      return hasil
    }
    else if (numberBaru[0] == '1'){
      numberBaru.shift()
      hasil = numberToWords(numberBaru) + ' belas '
      return hasil
    }
    else if(numberBaru[0] > '1' && numberBaru[1] <= '9') {
      hasil = hasil + numberToWords(numberBaru.shift()) + ' puluh ' + numberToWords(numberBaru)
      return hasil
    }
  }
  else if(numberBaru.length == '3') {
    if(numberBaru[0] == 1) {
      hasil = hasil + 'seratus'
      return hasil
    }
    else {
      hasil = numberToWords(numberBaru.shift()) + ' ratus ' + numberToWords(numberBaru)
      return hasil
    }
  }
}

// Driver code
console.log(numberToWords(210));

module.exports = {
  numberToWords: numberToWords
}
