function numberToWords(number) {
  // Your code here
  let bilangan=[
    ' ',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas']
  //bilangan adalah bilangan yg unik
  let pisah=String(number).split('')
  //untuk memisahkan
  if(number <=11){
    return bilangan[number]
  }else if(number<=19){
    return bilangan[pisah[1]]+ ' belas'
  }else if(number <= 99){
    return bilangan [pisah[0]]+' puluh '+ bilangan[pisah[1]]
    //angka ke 0 tambah puluh
  }else if(number <=199){
    return 'seratus '+ numberToWords(number-100)
  }else if(number <=999){
    return bilangan[pisah[0]]+' ratus '+ numberToWords(number-(100*pisah[0]))
  }else if(number <=1999){
    return 'seribu '+numberToWords(number-1000)
  }else if(number <=9999){
    return bilangan[pisah[0]]+' ribu ' +numberToWords(number-(1000*pisah[0]))
  }else if(number <=999999){//999.999
    return numberToWords(Math.floor(number/1000))+' ribu '+numberToWords(number %1000)
  }else if(number <=999999999){//999.999.999
    return numberToWords(Math.floor(number/1000000))+' juta '+numberToWords(number % 1000000)
  }else if(number <=999999999999){//999.999.999.999
    return numberToWords(Math.floor(number/1000000000))+' miliar '+numberToWords(number%1000000000)
  }else if(number <=999999999999999){//999.999.999.999.999
    return numberToWords(Math.floor(number/1000000000000))+' triliun '+numberToWords(number%1000000000000)
  }

}

// Driver code
console.log(numberToWords(123456789));//999.999.919
console.log(numberToWords(123456789123));//123.456.789.123
console.log(numberToWords(123456789123456));//123.456.789.123.456


module.exports = {
  numberToWords: numberToWords
}
