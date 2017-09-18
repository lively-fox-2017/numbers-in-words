function numberToWords2(number) {
  // Your code here
  var sebut = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  
  if (number < 12){
	return sebut[number];
  }else if (number < 20){
	return numberToWords(number - 10)+" belas ";
  }else if (number < 100){
	return numberToWords(Math.floor(number / 10))+" puluh "+numberToWords(number % 10);
  }else if (number < 200){
	return "seratus "+numberToWords(number - 100);
  }else if (number < 1000){
	return numberToWords(Math.floor(number / 100))+" ratus "+numberToWords(number % 100);
  }else if (number < 2000){
	return "seribu "+numberToWords(number - 1000);
  }else if (number < 1000000){
	return numberToWords(Math.floor(number / 1000))+" ribu "+numberToWords(number % 1000);
  }else if (number < 1000000000){
	return numberToWords(Math.floor(number / 1000000))+" juta "+numberToWords(number % 1000000);
  }else if (number < 1000000000000){
	return numberToWords(Math.floor(number / 1000000000))+" milyar "+numberToWords(number % 1000000000);
  }else if (number < 1000000000000000){
	return numberToWords(Math.floor(number / 1000000000000))+" trilyun "+numberToWords(number % 1000000000000);
  } 
}

function numberToWords(number){
	// Your code here
	if(number === 0){
		return "nol";
	}else{
		return numberToWords2(number);
	}
}

// Driver code
// console.log(numberToWords(1000000));

// module.exports = {
  // numberToWords: numberToWords
// }

//Test Case
console.log(numberToWords(0));
console.log(numberToWords(4));
console.log(numberToWords(14));
console.log(numberToWords(27));
console.log(numberToWords(99));
console.log(numberToWords(102));
console.log(numberToWords(999));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));
console.log(numberToWords(999000000000000));
console.log(numberToWords(999999999999999));
