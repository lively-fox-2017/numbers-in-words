var num = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
var tens = ['dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];

function trillion(tril) {
    if ( tril < 20) return num[tril];
    var digit2 = tril%10;
    if (tril < 100) return tens[~~(tril/10)-2] + (digit2? " " + num[digit2]: "");
    if (tril < 1000) return num[~~(tril/100)] +" ratus" + (tril%100 == 0? "": " " + trillion(tril%100));
    return trillion(~~(tril/1000)) + " ribu" + (tril%1000 != 0? " " + trillion(tril%1000): "");
    }

function billion(bil) {
    if ( bil < 20) return num[bil];
    var digit2 = bil%10;
    if (bil < 100) return tens[~~(bil/10)-2] + (digit2? " " + num[digit2]: "");
    if (bil < 1000) return num[~~(bil/100)] +" ratus" + (bil%100 == 0? "": " " + billion(bil%100));
    return billion(~~(bil/1000)) + " ribu" + (bil%1000 != 0? " " + billion(bil%1000): "");
    }

function million(mil) {
    if ( mil < 20) return num[mil];
    var digit2 = mil%10;
    if (mil < 100) return tens[~~(mil/10)-2] + (digit2? " " + num[digit2]: "");
    if (mil < 1000) return num[~~(mil/100)] +" ratus" + (mil%100 == 0? "": " " + million(mil%100));
    return million(~~(mil/1000)) + " ribu" + (mil%1000 != 0? " " + million(mil%1000): "");
    }


function thousand(thsnd) {
        if ( thsnd < 20) return num[thsnd];
        var digit1 = thsnd%10;
        if (thsnd < 100) return tens[~~(thsnd/10)-2] + (digit1? " " + num[digit1]: "");
        if (thsnd < 1000) return num[~~(thsnd/100)] +" ratus" + (thsnd%100 == 0? "": " " + thousand(thsnd%100));
        return thousand(~~(thsnd/1000)) + " ribu" + (thsnd%1000 != 0? " " + thousand(thsnd%1000): "");
        }


    function hundred(hund) {
    if ( hund < 20) return num[hund];
    var digit = hund%10;
    if (hund < 100) return tens[~~(hund/10)-2] + (digit? " " + num[digit]: "");
    if (hund < 1000) return num[~~(hund/100)] +" ratus" + (hund%100 == 0? "": " " + hundred(hund%100));
    return hundred(~~(hund/1000)) + " ribu" + (hund%1000 != 0? " " + hundred(hund%1000): "");
    }


function numberToWords(n){
    var hund = n%1000;
    var thsnd = Math.floor(n/1000)-(Math.floor(n/1000000)*1000);
    var mil = Math.floor(n/1000000)-(Math.floor(n/1000000000)*1000);
    var bil = Math.floor(n/Math.pow(10,9))-(Math.floor(n/1000000000000)*1000);
    var tril = Math.floor(n/Math.pow(10,12));

    var hasil1 = trillion(tril).replace('nol', '').replace('satu ratus','seratus');
    var hasil2 = billion(bil).replace('nol', '').replace('satu ratus','seratus');
    var hasil3 = million(mil).replace('nol', '').replace('satu ratus','seratus');
    var hasil4 = thousand(thsnd).replace('nol', '').replace('satu ratus','seratus');
    var hasil5 = hundred(hund).replace('nol', '').replace('satu ratus','seratus');
    var juta = '', ribu = '', miliar = '', triliun = '';

    if (tril !== 0) {
        triliun = ' triliun ';
    }
    if (bil !== 0) {
        miliar = ' miliar ';
    }
    if (mil !== 0) {
        juta = ' juta ';
    }
    if (thsnd !== 0) {
        ribu = ' ribu ';
    }
    return hasil1 + triliun + hasil2 + miliar + hasil3 + juta + hasil4 + ribu + hasil5;
}
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));

module.exports = {
  numberToWords: numberToWords
}
