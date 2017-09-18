function numberToWords(number) {
  var arr = [
    [1,"satu"],
    [2,"dua"],
    [3,"tiga"],
    [4,"empat"],
    [5,"lima"],
    [6,"enam"],
    [7,"tujuh"],
    [8,"delapan"],
    [9,"sembilan"]
  ]
  console.log(arr[0][0])
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i][0]);
    if(number === arr[i][0]){
      
    }
  }
}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords())

module.exports = {
  numberToWords: numberToWords
}
