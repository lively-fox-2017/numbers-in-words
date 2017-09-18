function numberToWords(number) {
  // Your code here
  var angka = {
    'tiga ribu ' : 3000,
    'dua ribu ' : 2000,
    'seribu ' : 1000,
    'sembilan ratus ' : 900,
    'delapan ratus ' : 800,
    'tujuh ratus ' : 700,
    'enam ratus ' : 600,
    'lima ratus ' : 500,
    'empat ratus ' : 400,
    'tiga ratus ' : 300,
    'dua ratus ' : 200,
    'seratus ' : 100,
    'sembilan puluh ' : 90,
    'delapan puluh ' : 80,
    'tujuh puluh ' : 70,
    'enam puluh ' : 60,
    'lima puluh ' : 50,
    'empat puluh ' : 40,
    'tiga puluh ' : 30,
    'dua puluh ' : 20,
    'sembilan belas ' : 19,
    'delapan belas ' : 18,
    'tujuh belas ' : 17,
    'enam belas ' : 16,
    'lima belas ' : 15,
    'empat belas ' : 14,
    'tiga belas ' : 13,
    'dua belas ' : 12,
    'sebelas ' : 11,
    'sepuluh ' : 10,
    'sembilan ' : 9,
    'delapan ' : 8,
    'tujuh ' : 7,
    'enam ' : 6,
    'lima ' : 5,
    'empat ' : 4,
    'tiga ' : 3,
    'dua ' : 2,
    'satu ' : 1,
  };
  var jawab = '';
  for (var prop in angka) {

    while (number >= angka[prop]){
      jawab += prop;
      number -= angka[prop];
    }
  }
  return jawab;
}

// Driver code
console.log(numberToWords(3333));
console.log(numberToWords(999));
console.log(numberToWords(756));
console.log(numberToWords(43));
console.log(numberToWords(13));

module.exports = {
  numberToWords: numberToWords
}
