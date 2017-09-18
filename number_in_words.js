function numberToWords(number) {
  // Your code here
  const angka={
  	'0': '',
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

  	if(number>=0 && number<=11){
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

  	if(number>=100 && number<200){
  		return 'Seratus '+numberToWords(number%100);
  	}

  	if(number>=200 && number <1000){
  		temp=Math.floor(number/100);
  		return angka[temp.toString()]+' ratus '+numberToWords(number%100);
  	}

  	if(number>=1000 && number<2000){
  		return 'Seribu '+numberToWords(number%100);
  	}

  	if(number>=2000 && number<1000000){
  		temp=Math.floor(number/1000);
  		return numberToWords(temp)+' ribu '+numberToWords(number-(temp*1000));
  	}

  	if(number>=1000000 && number<1000000000){
  		temp=Math.floor(number/1000000);
  		return numberToWords(temp)+' juta '+numberToWords(number-(temp*1000000));
  	}

	if(number>=1000000000 && number<1000000000000){
  		temp=Math.floor(number/1000000);
  		return numberToWords(temp)+' Miliyar '+numberToWords(number-(temp*1000000));
  	}

  	if(number>=1000000000000 && number<=11000000000000){
  		temp=Math.floor(number/1000000000000);

  		return angka[temp.toString()]+' Triliun '+numberToWords(number-(temp*1000000000000));
  	}

  	if(number>11000000000000 && number<20000000000000){
  		
  		temp=Math.floor(number/1000000000000);
  		return numberToWords(temp)+' triliun ' +numberToWords(number-(Math.floor(temp*1000000000000)));
  	}

  	if(number>=20000000000000 && number <100000000000000){
  		temp=Math.floor(number/1000000000000);
  		return numberToWords(temp)+' triliun ' +numberToWords(number-(Math.floor(temp*1000000000000)));
  	}

  	if(number>=100000000000000 && number <1000000000000000){
  		temp=Math.floor(number/1000000000000);
  		return numberToWords(temp)+' triliun ' +numberToWords(number-(Math.floor(temp*1000000000000)));
  	}


}

// Driver code
console.log(numberToWords(999999999999999));
//9000.000.000.000
module.exports = {
  numberToWords: numberToWords
}
