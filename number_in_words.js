function numberToWords(nilai) {
  // Your code here
	var terbilang='';
	var angka=['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas']
	var first=0;
	var next=0;
	// Nilai dibawah 12
	if(nilai < 12){
		terbilang += angka[nilai];
	}
	// Nilai dibawah 20 Max 19
	else if(nilai < 20){
		first = nilai-10
		terbilang += angka[first]+' Belas';
	}
	// Nilai dibawah 100 Max 99
	else if(nilai < 100){
		first = Math.floor(nilai/10)
		next = nilai % 10
		terbilang += angka[first]+' Puluh '+numberToWords(next);
	}
	// Nilai dibawah 200 Max 199
	else if(nilai < 200){
		next = nilai-100
		terbilang += 'Seratus ' + numberToWords(next);
	}
	// Nilai dibawah 1.000 Max 999
	else if(nilai < 1000){
		first = Math.floor(nilai/100)
		next = nilai%100;
		terbilang += angka[first]+' Ratus '+ numberToWords(next);
	}
	// Nilai dibawag 2.000 Max 1.999
	else if(nilai < 2000){
		next = Math.floor(nilai-1000)
		terbilang += 'Seribu ' + numberToWords(next);
	}
	// Nilai dibawah 10.000 Max 9.999
	else if(nilai < 10000){
		first = Math.floor(nilai/1000)
		next = nilai%1000
		terbilang += angka[first]+' Ribu '+numberToWords(next)
	}
	// Nilai dibawah 100.000 Max 99.999
	else if(nilai < 100000){
		first = Math.floor(nilai/1000)
		next = nilai%10000
		terbilang += numberToWords(first)+' Ribu '+numberToWords(next)
	}
	// Nilai dibawah 1.000.000 Max 999.999
	else if(nilai < 1000000){
		first = Math.floor(nilai/1000)
		next = nilai%1000
		terbilang += numberToWords(first)+' Ribu '+numberToWords(next)
	}
	// Nilai dibawah 1.000.000.000 Max 999.999.999
	else if(nilai < 1000000000){
		first = Math.floor(nilai/1000000)
		next = nilai%1000000
		terbilang += numberToWords(first)+' Juta '+numberToWords(next)
	}
	// Nilai dibawah 1.000.000.000.000 Max 999.999.999.999
	else if(nilai < 1000000000000){
		first = Math.floor(nilai/1000000000)
		next = nilai%1000000000
		terbilang += numberToWords(first)+' Miliar '+numberToWords(next)
	}
	else if(nilai < 1000000000000000){
		first = Math.floor(nilai/1000000000000)
		next = nilai%1000000000000
		terbilang += numberToWords(first)+' Triliun '+numberToWords(next)
	}
	return terbilang;  
}

// Driver code
console.log(numberToWords(4))
console.log(numberToWords(12))
console.log(numberToWords(98))
console.log(numberToWords(102))
console.log(numberToWords(987))
console.log(numberToWords(1987))
console.log(numberToWords(8987))
console.log(numberToWords(38079))
console.log(numberToWords(128079))
console.log(numberToWords(1380795))
console.log(numberToWords(930807950))
// console.log(numberToWords(930.807.950))
console.log(numberToWords(1090807950))
// console.log(numberToWords(1.090.807.950))
console.log(numberToWords(10930807950))
// console.log(numberToWords(10.930.807.950))
console.log(numberToWords(999930807950))
// console.log(numberToWords(999.930.807.950))
console.log(numberToWords(1000000000000))
// console.log(numberToWords(1.000.000.000.000))
console.log(numberToWords(1999888777000))
// console.log(numberToWords(1.999.888.777.950))

// console.log(numberToWords(82102713))
// console.log(numberToWords(80200102713))
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
