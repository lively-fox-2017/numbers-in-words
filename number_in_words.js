function numberToWords(number) {
  // Your code here
  const angka = ['nol','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var huruf = number.toString().split('');
  if (number < 12) {
  	return angka[number];
  } else if (number <= 20) {
  	return angka[huruf[1]]+' belas';
  } else if (number <= 99) {
  	return angka[huruf[0]]+' puluh '+angka[huruf[1]].replace('nol', '');
  } else if (number <= 199) {
  	return ('seratus '+ numberToWords(number-100)).replace('nol', '');
  } else if (number < 1000) {
  	return (angka[huruf[0]] +' ratus '+numberToWords(number-huruf[0]*100)).replace('nol', '');
  } else if (number < 2000) {
  	return ('seribu '+ numberToWords(number-1000)).replace('nol', '');
  } else if (number < 1000000) {
  	var sisa = number%1000;
  	var hasil  = Math.floor(number/1000)
  	return (numberToWords(hasil)+' ribu '+numberToWords(sisa)).replace('nol', '');
  } else if (number < 1000000000) {
  	var sisa = number%1000000;
  	var hasil = Math.floor(number/1000000)
  	return (numberToWords(hasil)+' juta '+numberToWords(sisa)).replace('nol', '');
  } else if (number < 1000000000000) {
  	var sisa = number%1000000000;
  	var hasil = Math.floor(number/1000000000)
  	return (numberToWords(hasil)+' miliar '+numberToWords(sisa)).replace('nol', '');
  } else if (number < 1000000000000000) {
  	var sisa = number%1000000000000
  	var hasil = Math.floor(number/1000000000000)
  	return (numberToWords(hasil)+' triliun '+numberToWords(sisa)).replace('nol', '');
  } 
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
