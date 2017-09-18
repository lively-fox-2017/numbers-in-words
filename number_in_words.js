function splitTheNumber(strNumber) {
	let arrNumber = strNumber.split('');
	let first = [];
	let rest = [];

	while (arrNumber.length > 0) {
		let pushed;
		if (arrNumber.length > 3) {
			pushed = arrNumber.splice(-3).join('');
			rest.unshift(pushed);
		} else {
			pushed = arrNumber.splice(-arrNumber.length).join('');;
			first.unshift(pushed);
		}
	}

	return [first.join(''), rest.join('')];
}

function convertToHundreds(strNumber) {
	let convArr = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
	let result = [];

	for (let i = 0; i < strNumber.length; i++) {
		let dasar = convArr[parseInt(strNumber[i])];
		let sisaDigit = strNumber.length - i - 1;

		let isDasarNol = dasar === 'nol';
		let isDasarSatu = dasar === 'satu';
		let isSisaDigitNol = sisaDigit === 0;
		let isSisaDigitSatu = sisaDigit === 1;
		let isSisaDigitDua = sisaDigit === 2;

		if (isDasarNol) {
			result = result;
		} else if (isDasarSatu && isSisaDigitNol) {
			result.push(dasar);
		} else if (isDasarSatu && isSisaDigitSatu) {
			let next = convArr[parseInt(strNumber[i + 1])];
			if (next === 'nol') {
				result.push('sepuluh');
			} else if (next === 'satu') {
				result.push('sebelas');
			} else {
				result.push(next + ' belas');
			}
			break;
		} else if (isDasarSatu && isSisaDigitDua) {
			result.push('seratus');
		} else if (isSisaDigitDua) {
			result.push(dasar + ' ratus');
		} else if (isSisaDigitSatu) {
			result.push(dasar + ' puluh');
		} else if (isSisaDigitNol) {
			result.push(dasar);
		}
	}

	return result.join(' ');
}

function findBesaran(restLen) {
	switch (restLen) {
		case 3:
			return 'ribu';
			break;
		case 6:
			return 'juta';
			break;
		case 9:
			return 'milyar';
			break;
		case 12:
			return 'trilyun';
			break;
	}
}

// main function
function toWords(number) {
	let strNumber = String(number);
	let splitted = splitTheNumber(strNumber);
	let processed = splitted[0];
	let rest = splitted[1];
	let restLen = rest.length;

	let result = convertToHundreds(processed);

	if (restLen === 0) {
		return result;
	} else {
		let besaran = findBesaran(restLen);
		if (result === 'satu' && besaran === 'ribu') {
			result = 'seribu';
		} else {
			result = result + ' ' + besaran;
		}
	}

	return result + ' ' + toWords(parseInt(rest));
}

function numberToWords(number) {
	// zero checker
	return number === 0 ? 'nol' : toWords(number);
}

console.log(numberToWords(0));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));
console.log(numberToWords(10000));
console.log(numberToWords(20000));
console.log(numberToWords(10000001));
console.log(numberToWords(1));
console.log(numberToWords(101));
console.log(numberToWords(1001));
console.log(numberToWords(1010));
console.log(numberToWords(1000000000010));
console.log(numberToWords(999000000000000));
console.log(numberToWords(999999999999999));

module.exports = {
  numberToWords: numberToWords
}