function numberToWords(number) {
  // Your code here
  if(!number > 0){
    return "";
  }
  var daftarKata = ['puluh','ratus','ribu','juta','milliar','triliun', 'belas'];
  var daftarAngka = ['se', 'dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  var hasil = "";
  var strNumber = number.toString().split('');
  //triliun
  if(strNumber.length > 12){
    switch(strNumber.length - 12){
      case 1:
        daftarAngka[0] = 'satu';
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        strNumber.shift();
        break;
      case 2:
        if(strNumber[0] === '1'){
          hasil += daftarAngka[parseInt(strNumber[1] - 1)];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[6] + " ";
          strNumber.shift();
          strNumber.shift();
        }
        else{
          hasil += daftarAngka[parseInt(strNumber[0]) - 1];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[0] + " ";
          strNumber.shift();
        }
        break;
      case 3:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[1] + " ";
        strNumber.shift();
        break;
    }
    var newNumber = parseInt(strNumber.join(''));
    if(strNumber.length > 12)
      return hasil + numberToWords(newNumber);
    else{
      return hasil + " " + daftarKata[5] +" " + numberToWords(newNumber);
    }
  }
  //miliar
  if(strNumber.length > 9){
    switch(strNumber.length - 9){
      case 1:
        daftarAngka[0] = 'satu';
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        strNumber.shift();
        break;
      case 2:
        if(strNumber[0] === '1'){
          hasil += daftarAngka[parseInt(strNumber[1] - 1)];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[6] + " ";
          strNumber.shift();
          strNumber.shift();
        }
        else{
          hasil += daftarAngka[parseInt(strNumber[0]) - 1];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[0] + " ";
          strNumber.shift();
        }
        break;
      case 3:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[1] + " ";
        strNumber.shift();
        break;
    }
    var newNumber = parseInt(strNumber.join(''));
    if(strNumber.length > 9)
      return hasil + numberToWords(newNumber);
    else{
      return hasil + " " + daftarKata[4] +" " + numberToWords(newNumber);
    }
  }
  //juta
  if(strNumber.length > 6){
    if(strNumber.length === 4 && strNumber[1] === '0' && strNumber[2] === '0'){
      if(strNumber[0] !== '1'){
        hasil += daftarAngka[parseInt(strNumber[0]) - 1] + " ";
      }
      else{
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
      }
      strNumber.shift();
      strNumber.shift();
      strNumber.shift();
      return hasil + "ribu " + numberToWords(strNumber);
    }
    daftarAngka[0] = 'satu';
    switch(strNumber.length - 6){
      case 1:
        daftarAngka[0] = 'satu';
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        strNumber.shift();
        break;
      case 2:
        if(strNumber[0] === '1'){
          hasil += daftarAngka[parseInt(strNumber[1] - 1)];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[6] + " ";
          strNumber.shift();
          strNumber.shift();
        }
        else{
          hasil += daftarAngka[parseInt(strNumber[0]) - 1];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[0] + " ";
          strNumber.shift();
        }
        break;
      case 3:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[1] + " ";
        strNumber.shift();
        break;
    }
    var newNumber = parseInt(strNumber.join(''));
    if(strNumber.length > 6)
      return hasil + numberToWords(newNumber);
    else{
      return hasil + " " + daftarKata[3] + " " + numberToWords(newNumber);
    }
  }

  //ribu
  if(strNumber.length > 3){
    if(strNumber.length === 4 && strNumber[0] === '1'){
      daftarAngka[0] = 'se';
      hasil += daftarAngka[parseInt(strNumber[0]) - 1];
      strNumber.shift();
    }
    switch(strNumber.length - 3){
      case 1:
        daftarAngka[0] = 'satu';
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        strNumber.shift();
        break;
      case 2:
        if(strNumber[0] === '1'){
          hasil += daftarAngka[parseInt(strNumber[1] - 1)];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[6] + " ";
          strNumber.shift();
          strNumber.shift();
        }
        else{
          hasil += daftarAngka[parseInt(strNumber[0]) - 1];
          if(strNumber[0] !== '1')
            hasil+= " ";
          hasil += daftarKata[0] + " ";
          strNumber.shift();
        }
        break;
      case 3:
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[1] + " ";
        strNumber.shift();
        break;
    }
    var newNumber = parseInt(strNumber.join(''));
    if(strNumber.length > 3)
      return hasil + numberToWords(newNumber);
    else{
      if(hasil[hasil.length-1] === 'e'){
        return hasil + daftarKata[2] + " " + numberToWords(newNumber);
      }
        return hasil + " " + daftarKata[2] + " " + numberToWords(newNumber);
    }
  }

  //ratus
  if(strNumber.join('') === '1'){
    hasil += 'satu'
    strNumber.shift();
  }
  switch(strNumber.length){
    case 1:
      hasil += daftarAngka[parseInt(strNumber[0]) - 1];
      strNumber.shift();
      break;
    case 2:
      if(strNumber[0] === '1'){
        hasil += daftarAngka[parseInt(strNumber[1] - 1)];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[6] + " ";
        strNumber.shift();
        strNumber.shift();
      }
      else{
        hasil += daftarAngka[parseInt(strNumber[0]) - 1];
        if(strNumber[0] !== '1')
          hasil+= " ";
        hasil += daftarKata[0] + " ";
        strNumber.shift();
      }
      break;
    case 3:
      hasil += daftarAngka[parseInt(strNumber[0]) - 1];
      if(strNumber[0] !== '1')
        hasil+= " ";
      hasil += daftarKata[1] + " ";
      strNumber.shift();
      break;
  }
  var newNumber = parseInt(strNumber.join(''));
  return hasil + numberToWords(newNumber);
}

// Driver code
console.log(numberToWords(999999999999999));

 module.exports = {
   numberToWords: numberToWords
 }
