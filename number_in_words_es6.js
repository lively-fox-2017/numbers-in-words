console.log("ES6 compiler is starting");
let toWords = n => {
    // Your code here

    const angka = [
        "satu", "dua", "tiga", "empat", "lima",
        "enam", "tujuh", "delapan", "sembilan", "sepuluh",
        "sebelas"
    ];

    if (n === 0) {
        return 'zero';
    }

    if (n <= 11) {
        return angka[n - 1];
    }

    // 20 kebawah
    if (n <= 19) {
        return angka[(n % 10) - 1] + ' ' + 'belas';
    }

    // seratus kebawah dan diatas 20
    if (n >= 20 && n <= 99) {
        if (n % 10 === 0) {
            return angka[(n / 10) - 1] + ' ' + 'puluh';
        } else {
            let index = Math.floor(n / 10);
            return angka[index - 1] + ' ' + 'puluh' + ' ' + angka[(n % 10) - 1];
        }
    }

    // ratusan di bawah 200
    if (n >= 100 && n < 200) {
        if (n % 100 === 0) {
            return 'seratus'
        }
        if ((n - 100) <= 11) {
            return 'seratus' + ' ' + angka[(n - 100) - 1];
        }
        if ((n - 100) <= 19) {
            let index = (n - 100) - 10;
            return 'seratus' + ' ' + angka[index - 1] + ' ' + 'belas';
        }
        if ((n - 100) > 19 && (n - 100) % 10 === 0) {
            let index = (n - 100) / 10;
            return 'seratus' + ' ' + angka[index - 1] + ' ' + 'puluh';
        }
        if ((n - 100) > 19 && (n - 100) % 10 !== 0) {
            let indexAwal = Math.floor((n - 100) / 10);
            let indexAkhir = n.toString().split('');
            //console.log(indexAkhir[2]);
            return 'seratus' + ' ' + angka[indexAwal - 1] + ' ' + 'puluh' + ' ' + angka[indexAkhir[2] - 1];
        }
    }

    // ratusan di atas 200
    if (n >= 200 && n <= 1000) {
        if (n % 100 === 0) {
            let indexAwal = n.toString().split('');
            console.log(indexAwal[0]);
            return angka[indexAwal[0] - 1] + ' ' + 'ratus';
        }
        if (n % 100 !== 0) {
            let indexAwal = n.toString().split('');
            let indexAkhir = n.toString().split('');
            console.log(indexAwal);
            let persamaanAwal = indexAwal[0] * 100;
            console.log(persamaanAwal);
            if (n - persamaanAwal < 10) {
                return angka[indexAwal[0] - 1] + ' ' + 'ratus' + ' ' + angka[indexAkhir[2] - 1];
            }
            if (n - persamaanAwal === 10) {
                return angka[indexAwal[0] - 1] + ' ' + 'ratus' + ' ' + 'sepuluh';
            }
            if (n - persamaanAwal === 11) {
                return angka[indexAwal[0] - 1] + ' ' + 'ratus' + ' ' + angka[10];
            }
            if (n - persamaanAwal > 11 && n - persamaanAwal < 20) {
                return angka[indexAwal[0] - 1] + ' ' + 'ratus' + ' ' + angka[indexAkhir[2] - 1] + ' ' + 'belas';
            }
            if ((n - persamaanAwal) > 20) {
                let indexAwal = Math.floor((n - 100) / 10);
                let indexAkhir = n.toString().split('');
                console.log(indexAkhir[0]);
                return angka[indexAkhir[0] - 1] + ' ' + 'ratus' + ' ' + angka[indexAkhir[1] - 1] + ' ' + 'puluh' + ' ' + angka[indexAkhir[2] - 1];
            }

        }
    }


};

// Driver code
//console.log(toWords(1000000000000000000000));
console.log(toWords(999));
console.log(toWords(99));
console.log(toWords(199));