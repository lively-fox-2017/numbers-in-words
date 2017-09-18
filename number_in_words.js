'use strict'
//belas
function numberToWords(number) {
  // Your code here
  const kata = {
    1 : 'satu',
    2 : 'dua',
    3 : 'tiga',
    4 : 'empat',
    5 : 'lima',
    6 : 'enam',
    7 : 'tujuh',
    8 : 'delapan',
    9 : 'sembilan'
  }

  const belasan = {
    11 : 'sebelas',
    12 : 'dua belas',
    13 : 'tiga belas',
    14 : 'empat belas',
    15 : 'lima belas',
    16 : 'enam belas',
    17 : 'tujuh belas',
    18 : 'delapan belas',
    19 : 'sembilan belas'
  }

  var result = ""
  var stringNumber = "";
  if(typeof number === "number"){
    number = number.toString();
  }

  var stringNumber = number.toString();
  var stringArray  = stringNumber.split("");

  console.log(stringArray.join(""));
  var angka = parseInt(stringNumber[0]);
  console.log(angka)
  if(stringNumber.length === 15){
    if(angka === 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus " + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0" && stringNumber[2] === "0"){
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus triliun" + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){

        stringArray.splice(0,1);
        stringNumber = parseInt(stringArray.join(""));
        return "seratus " + numberToWords(stringNumber)+" ";
    }
    else if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus triliun"+ numberToWords(stringNumber.toString());
    }
  }
  if(stringNumber.length === 14){
    if(angka === 1 && stringNumber[1] !== "0"){
      var belas = angka+stringNumber[1];
      stringArray.splice(0,2);
      console.log(belas);
      stringNumber = parseInt(stringArray.join(""));
      return belasan[belas]+" triliun "+numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "sepuluh triliun " + numberToWords(stringNumber)+" ";
    }
    else{
      var belas = parseInt(stringNumber[1]);
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      console.log(belas)
      if(belas === 0){
        return kata[angka] +" puluh triliun " + numberToWords(stringNumber);
      }else{
        return kata[angka] +" puluh "+kata[belas]+" triliun "+ numberToWords(stringNumber);
      }
    }
  }
  else if(stringNumber.length === 13){
    if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " triliun "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " triliun "+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 12){
    if(angka === 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus " + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0" && stringNumber[2] === "0"){
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus milyar" + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){

        stringArray.splice(0,1);
        stringNumber = parseInt(stringArray.join(""));
        return "seratus " + numberToWords(stringNumber)+" ";
    }
    else if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus milyar"+ numberToWords(stringNumber.toString());
    }
  }
  if(stringNumber.length === 11){
    if(angka === 1 && stringNumber[1] !== "0"){
      var belas = angka+stringNumber[1];
      stringArray.splice(0,2);
      console.log(belas);
      stringNumber = parseInt(stringArray.join(""));
      return belasan[belas]+" milyar "+numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "sepuluh milyar " + numberToWords(stringNumber)+" ";
    }
    else{
      var belas = parseInt(stringNumber[1]);
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      console.log(belas)
      if(belas === 0){
        return kata[angka] +" puluh milyar " + numberToWords(stringNumber);
      }else{
        return kata[angka] +" puluh "+kata[belas]+" milyar "+ numberToWords(stringNumber);
      }
    }
  }
  else if(stringNumber.length === 10){
    if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " milyar "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " milyar "+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 9){
    if(angka === 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus " + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0" && stringNumber[2] === "0"){
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus juta" + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){
        stringArray.splice(0,1);
        console.log("masuk")
        stringNumber = parseInt(stringArray.join(""));
        return "seratus " + numberToWords(stringNumber)+" ";
    }
    else if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus juta"+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 8){
    if(angka === 1 && stringNumber[1] !== "0"){
      var belas = angka+stringNumber[1];
      stringArray.splice(0,2);
      console.log(belas);
      stringNumber = parseInt(stringArray.join(""));
      return belasan[belas]+" juta "+numberToWords(stringNumber)+" ";
    }
    else if(angka === 1){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "sepuluh juta " + numberToWords(stringNumber)+" ";
    }
    else{
      var belas = parseInt(stringNumber[1]);
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      console.log(belas)
      if(belas === 0){
        return kata[angka] +" puluh juta " + numberToWords(stringNumber);
      }else{
        return kata[angka] +" puluh "+kata[belas]+" juta "+ numberToWords(stringNumber);
      }
    }
  }
  else if(stringNumber.length === 7){
    if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " juta "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " juta "+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 6){
    if(angka === 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus " + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0" && stringNumber[2] === "0"){
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return "seratus ribu" + numberToWords(stringNumber)+" ";
    }else if(angka === 1 && stringNumber[1] === "0"){
      if(stringNumber[2] ===  "1"){
        stringArray.splice(0,1);
        stringNumber = parseInt(stringArray.join(""));
        return "seratus satu ribu";
      }else{
        stringArray.splice(0,1);
        console.log("masuk")
        stringNumber = parseInt(stringArray.join(""));
        return "seratus " + numberToWords(stringNumber)+" ";
      }

    }
    else if(angka !== 1 && stringNumber[1] !== "0"){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus "+ numberToWords(stringNumber);
    }
    else{
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ratus ribu"+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 5){
    if(angka === 1 && stringNumber[1] !== "0"){
      var belas = angka+stringNumber[1];
      stringArray.splice(0,2);
      console.log(belas);
      stringNumber = parseInt(stringArray.join(""));
      return belasan[belas]+" ribu "+numberToWords(stringNumber)+" ";
    }
    else if(angka === 1){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "sepuluh ribu " + numberToWords(stringNumber)+" ";
    }
    else{
      var belas = parseInt(stringNumber[1]);
      stringArray.splice(0,2);
      stringNumber = parseInt(stringArray.join(""));
      console.log(belas)
      if(belas === 0){
        return kata[angka] +" puluh ribu " + numberToWords(stringNumber);
      }else{
        return kata[angka] +" puluh "+kata[belas]+" ribu "+ numberToWords(stringNumber);
      }
    }
  }
  else if(stringNumber.length === 4){
    if(angka === 1){
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return "seribu " + numberToWords(stringNumber.toString())+" ";
    }else{
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " ribu "+ numberToWords(stringNumber.toString());
    }
  }
  else if(stringNumber.length === 3){
      if(angka === 1){
        stringArray.splice(0,1);
        stringNumber = parseInt(stringArray.join(""));
        return "seratus " + numberToWords(stringNumber.toString())+" ";
      }else{
        stringArray.splice(0,1);
        stringNumber = parseInt(stringArray.join(""));
        return kata[angka] + " ratus "+ numberToWords(stringNumber.toString());
      }
  }else if(stringNumber.length === 2){
    if(angka === 1){
      if(number === "10"){
        return "sepuluh";
      }else{
        return belasan[number];
      }
    }else{
      stringArray.splice(0,1);
      stringNumber = parseInt(stringArray.join(""));
      return kata[angka] + " puluh "+ numberToWords(stringNumber.toString());
      console.log('masuk');
    }
  }else if(stringNumber.length === 1){
    if(angka === 0){
      return "";
    }else{
      console.log(angka);
      return kata[angka];
    }
  }

}

// Driver code
console.log(numberToWords("999110101100000"));
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
