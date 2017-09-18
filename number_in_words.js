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
    if (number.toString()[0]!=0){
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
        case 4:
          return 'trilyun '
          break;
        default:
      }
    }
    return '';
  }
  specialCaseThreeZero += isSpecialTZero(number);

  posisi = preProcessing(number);

  //converter(parseInt(number.toString().split('')[0]), posisi.shift());
  var processedNum = number.toString().split('');
  if(processedNum.length==1){
    return converter(parseInt(processedNum.shift()), posisi);
  }

  if(processedNum.length == 2 && processedNum[0]==1){
    if (processedNum[1]==0){
      return 'sepuluh';
    }else if (processedNum[1]==1) {
      return 'sebelas';
    }else{
      return converter(parseInt(processedNum[1]), 'satuan')+'belas'
    }
    return processedNum[1]!=0 ? converter(parseInt(processedNum[1]), 'satuan')+'belas': 'sepuluh';
  }

  if(processedNum.length%3 == 2  && processedNum[0]==1){
    var res = '';
    var temp =number.toString().split('');
    temp.shift();
    var plusSpec = isSpecialTZero(parseInt(temp.join('')));
    if (processedNum[1]==0){
      res = 'sepuluh';
      processedNum.shift();
      processedNum.shift();
      res += plusSpec+numberToWords(processedNum.join(''))
      return res;
    }else if (processedNum[1]==1) {
      res = 'sebelas'
      processedNum.shift();
      processedNum.shift();
      res+= plusSpec+numberToWords(processedNum.join(''));
      return res;
    }else{
      res = converter(parseInt(processedNum[1]), 'satuan')+'belas ';
      processedNum.shift();
      processedNum.shift();
      res+=plusSpec+numberToWords(processedNum.join(''));
      return res;
    }
    //return processedNum[1]!=0 ? converter(parseInt(processedNum[1]), 'satuan')+'belas': 'sepuluh';
  }

  if (number.toString().length == 6) {
    if (number.toString()[2]==0){
      return numberToWords(number.toString()[0]+number.toString()[1]+0) +numberToWords(number.toString()[3]+number.toString()[4]+number.toString()[5])
    }else if (number.toString()[2]!=1){
      return numberToWords(number.toString()[0]+number.toString()[1]+0)+' seribu '+numberToWords(number.toString()[3]+number.toString()[4]+number.toString()[5])
    }else{
      return numberToWords(number.toString()[0]+number.toString()[1]+number.toString()[2])+' ribu '+numberToWords(number.toString()[3]+number.toString()[4]+number.toString()[5])
    }
  }

  if(number.toString().length == 5){
    return numberToWords(number.toString()[0]+number.toString()[1])+'ribu '+numberToWords(number.toString()[2]+number.toString()[3]+number.toString()[4]);
  }

  if(number.toString().length==4){
    if(number.toString()[0]=='1'){
      return 'seribu '+numberToWords(number.toString()[1]+number.toString()[2]+number.toString()[3])
    }
  }

  return converter(parseInt(processedNum.shift()), posisi) +specialCaseThreeZero+ numberToWords(processedNum.join(''));

}

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(20));
console.log(numberToWords(100));
console.log(numberToWords(211));
console.log(numberToWords(1000));
console.log(numberToWords(11000));
console.log(numberToWords(111000));
console.log(numberToWords(1111000));
console.log(numberToWords(1001));
console.log(numberToWords(5001));
console.log(numberToWords(51000));
console.log(numberToWords(1000000));
console.log(numberToWords(1000000000000));
console.log(numberToWords(1234567897524));
console.log(numberToWords(11111111));
console.log(numberToWords(1111111111111));

module.exports = {
  numberToWords: numberToWords
}
