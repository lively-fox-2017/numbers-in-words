function numberToWords(number) {
  // Your code here
  //pecah menjadi satuan puluhan dan kawan kawan
  var output='';
  var posisi;
  var specialCaseThreeZero='';
  function converter(num, posisi){
    var penambah ;
    switch (posisi) {
      case 'satuan':
        penambah = '';
        break;
      case 'puluhan':
        penambah = 'puluh '
        break;
      case 'ratusan':
        penambah = 'ratus '
        break;
    }
    if(num==1 && posisi == 'ratusan'){
      return 'seratus ';
    }
    switch (num) {
      case 0:
        return '';
        break;
      case 1:
        return 'satu '+penambah;
        break;
      case 2:
        return 'dua '+penambah;
        break;
      case 3:
        return 'tiga '+penambah;
        break;
      case 4:
        return 'empat '+penambah;
        break;
      case 5:
        return 'lima '+ penambah;
        break;
      case 6:
        return 'enam '+ penambah;
        break;
      case 7:
        return 'tujuh '+penambah;
        break;
      case 8:
        return 'delapan '+ penambah;
        break;
      case 9:
        return 'sembilan '+ penambah;
        break;
      default:

    }

  }
  function preProcessing(num){
    switch (num.toString().length%3) {
      case 1:
        return 'satuan';
        break;
      case 2:
        return 'puluhan';
        break;
      case 0:
        return 'ratusan';
        break;
      default:

    }
  }
  function isSpecialTZero(number){
    //console.log('number '+number);
    if (number.toString()[0]!='0'){
    switch ((number.toString().length-1)/3) {
      case 1:
        return 'ribu ';
        break;
      case 2:
        return 'juta ';
        break;
      case 3:
        return 'miliar '
        break;
      default:
    }}
    return '';
  }
  specialCaseThreeZero += isSpecialTZero(number);

  posisi = preProcessing(number);

  //converter(parseInt(number.toString().split('')[0]), posisi.shift());
  var processedNum = number.toString().split('');
  if(processedNum.length==1){
    return converter(parseInt(processedNum.shift()), posisi);
  }else if(processedNum.length == 2 && processedNum[0]==1){
    if (processedNum[1]==0){
      return 'sepuluh';
    }else if (processedNum[1]==1) {
      return 'sebelas';
    }else{
      return converter(parseInt(processedNum[1]), 'satuan')+'belas'
    }
    return processedNum[1]!=0 ? converter(parseInt(processedNum[1]), 'satuan')+'belas': 'sepuluh';
  }


  return converter(parseInt(processedNum.shift()), posisi) +specialCaseThreeZero+ numberToWords(processedNum.join(''));

}

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(45));
console.log(numberToWords(18));
console.log(numberToWords(999));
console.log(numberToWords(300));
console.log(numberToWords(1000));
console.log(numberToWords(101001));
console.log(numberToWords(1000000));
console.log(numberToWords(16));
console.log(numberToWords(3325400040));
//console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
