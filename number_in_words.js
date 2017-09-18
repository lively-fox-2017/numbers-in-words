function numberToWords(number) {
  // Your code here
  const angka={
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

  let temp=0;

  	if(number>0 && number<=11){
  		return angka[number.toString()];
  	}

  	if(number>11 && number<=19){
  		temp=number%10;
  		return angka[temp.toString()]+' belas';
  	}

  	if(number>20 && number <100){
  		temp=Math.floor(number/10);
  		return angka[temp.toString()]+' puluh '+numberToWords(number%10);
  	}

  	if(number>=100 && number <1000){
  		temp=Math.floor(number/100);
  		return angka[temp.toString()]+' ratus '+numberToWords(number%100);
  	}
}

// Driver code
console.log(numberToWords(999));

module.exports = {
  numberToWords: numberToWords
}
