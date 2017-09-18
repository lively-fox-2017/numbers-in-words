function numberToWords(number) {
  // Your code here
  var angka =   ['','satu ','dua ' ,'tiga ','empat ' ,'lima ','enam ' ,'tujuh ','delapan ','sembilan '];
  var unit = ['','','puluh','ratus','ribu','puluh ribu' , 'ratus ribu' ,'juta' ,'puluh juta' ,'ratus juta','milyar' , 'puluh milyar' ,'ratus milyar' ,'triliun','puluh triliun','ratus triliun']
  var sebut='';

  var numS = number.toString() ;
  var satuan = numS.length;


  sebut = angka[Number(numS[0])] + unit[satuan] + ' ' ;

  if (numS.length==1){
    return sebut.trim();
  }
  else{
    sebut += numberToWords(Number(numS.substring(1))) + ' ' //recursive
    for (var i=1;i<angka.length;i++){ //special case belas
        sebut = sebut.replace('satu puluh ' + angka[i], angka[i] + ' belas')
    }
    sebut = sebut.replace('satu  belas' , 'sebelas ') //special case sebelas

    var ubah = ['ribu','juta','milyar','triliun'];

    for (var u=0 ; u < ubah.length ; u++){ //special case repeat sebut satuan

      var arrSebut = sebut.split(' ');
      var cek=0;
      for (var i=0;i<arrSebut.length;i++){
        if (arrSebut[i]==ubah[u]){
          cek++;
        }
      }
      if (cek > 1){
        for (var i=0;i<cek-1;i++){
          arrSebut.splice(arrSebut.indexOf(ubah[u]),1);
        }
      }
      sebut = arrSebut.join(' ');
    }

    var ubah = [ 'puluh','ratus','ribu','juta','milyar','triliun']; //special case angka 1

    for (var u=0 ; u < ubah.length ; u++){
      sebut = sebut.replace('satu ' + ubah[u], 'se' + ubah[u]);
    }
    return  sebut.trim();
  }

}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(123000));
console.log(numberToWords(999000000000000));

module.exports = {
  numberToWords: numberToWords
}
