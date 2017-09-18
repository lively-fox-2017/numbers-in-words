function numberToWords(num) {
	var angka = [1000000,100000, 20000,  3000 ,900, 100, 90, 20, 10, 9, 7, 4];
	var kata = ['satu juta','seratus ribu ','dua puluh ribu ' , 'tiga ribu','sembilan ratus ', 'seratus ','sembilan puluh ', 'dua puluh ', 'sepuluh ','sembilan ','tujuh ', 'empat '];
	var result = '';

	// console.log(ubah)
	if(num === 0){
		return result;
	}

	for(var i = 0; i < angka.length; i++){
		// console.log(num % angka[i])
		while(num % angka[i] < num){
			// console.log(num % angka[i])
			
			result += kata[i]
			num -= angka[i]
			return result + numberToWords(num);
			}

		}

		// console.log(result)
	
		
		
	}

	
// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}
