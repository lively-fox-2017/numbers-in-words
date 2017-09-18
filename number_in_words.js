function numberToWords(number) {
  //RELEASE 0 ONES AND TENS
  var bilangan = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
    'Sepuluh',
    'Sebelas'
  ];
  if (number < 12) {
    var kalimat = bilangan[number];
  } else if (number < 20) {
    var kalimat = bilangan[number - 10] +// =============RATUSAN==============
    ' Belas ';
  } else if (number < 100) {
    var utama = number / 10;
    var depan = parseInt(String(utama).substr(0, 1));
    var belakang = number % 10;
    var kalimat = bilangan[depan] + ' Puluh ' + bilangan[belakang]
  } else if (number < 200) {
    var kalimat = 'Seratus ' + numberToWords(number - 100);
    // console.log(kalimat);
  } else if (number < 1000) {}
  var utama = number / 100;
  var depan = parseInt(String(utama).substr(0, 1));
  var belakang = number % 100;
  var kalimat = bilangan[depan] + ' Ratus ' + numberToWords(belakang// ============RIBUAN===============
  );
} else if (number < 2000) {
  var kalimat = 'Seribu ' + numberToWords(number - 1000)
} else if (number < 10000) {
  var utama = number / 1000;
  var depan = parseInt(String(utama).substr(0, 1));
  // console.log(depan);
  var belakang = number % 1000;
  var kalimat = bilangan[depan] + ' Ribu ' + numberToWords(belakang);
  //=====================100 RIBU======================
} else if (number < 100000) {
  var utama = number / 1000;
  var depan = parseInt(String(utama).substr(0, 2));
  // console.log(depan)
  var belakang = number % 1000;
  var kalimat = numberToWords(depan) + ' Ribu ' + numberToWords(belakang//==========================1 JUTA====================
  );
} else if (number < 1000000) {
  var utama = number / 1000;
  var depan = parseInt(String(utama).substr(0, 3));
  // console.log(depan)
  var belakang = number % 1000;
  var kalimat = numberToWords(depan) + ' Ribu ' + numberToWords(belakang//1jt - 9,999,999
  );
} else if (number < 10000000) {
  var utama = number / 10000;
  var depan = parseInt(String(utama).substr(0, 1));
  console.log(depan)
  var belakang = number % 1000000;
  var kalimat = numberToWords(depan) + ' Juta ' + numberToWords(belakang);
} else if (number < 100000000) {
  var utama = number / 100000;
  var depan = parseInt(String(utama).substr(0, 2));
  var belakang = number % 1000000;
  var kalimat = numberToWords(depan) + ' Juta ' + numberToWords(belakang);
} else if (number < 1000000000) {
  var utama = number / 100000;
  var depan = parseInt(String(utama).substr(0, 3));
  var belakang = number % 1000000;
  var kalimat = numberToWords(depan) + ' Juta ' + numberToWords(belakang// ===========================1-10 MILYAR=======================
  );
} else if (number < 10000000000) {
  var utama = number / 1000000000;
  var depan = parseInt(String(utama).substr(0, 1));
  var belakang = number % 1000000000;
  var kalimat = numberToWords(depan) + ' Milyar ' + numberToWords(belakang);
} else if (number < 100000000000) {
  var utama = number / 1000000000;
  var depan = parseInt(String(utama).substr(0, 2));
  var belakang = number % 1000000000;
  var kalimat = numberToWords(depan) + ' Milyar ' + numberToWords(belakang);
} else if (number < 1000000000000) {
  var utama = number / 1000000000;
  var depan = parseInt(String(utama).substr(0, 3));
  var belakang = number % 1000000000;
  var kalimat = numberToWords(depan) + ' Milyar ' + numberToWords(belakang);
} else if (number == 1000000000000) {
  var kalimat = 'Satu Triliun'
}

var pisah = kalimat.split(' ');
var tampung = [];
for (i = 0; i < pisah.length; i++) {
  if (pisah[i] != '') {
    tampung.push(pisah[i]);
  }
}
return tampung.join(' ');
return kalimat;

}
console.log(numberToWords(99));
console.log(numberToWords(1899));
console.log(numberToWords(22200500));
console.log(numberToWords(9800005000));
console.log(numberToWords(150500));
