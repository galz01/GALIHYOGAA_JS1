// if else
var nilai = 70;

if (nilai >= 90) {
    console.log("Nilai A");
} else if (nilai >= 80) {
    console.log("Nilai B");
} else if (nilai >= 70) {
    console.log("Nilai C");
} else if (nilai >+ 60) {
    console.log("Nilai D")
}


// nested if
var nilai = 85;

var nilaiHuruf;

if (nilai >= 90) {
    nilaiHuruf = "A";
} else {
    if (nilai >= 80) {
        nilaiHuruf = "B";
    } else {
        if (nilai >= 70) {
            nilaiHuruf = "C";
        } else {
            if (nilai >= 60) {
                nilaiHuruf = "D";
            } else {
                nilaiHuruf = "E";
            }
        }
    }
}

console.log("Nilai Angka: " + nilai);
console.log("Nilai Huruf: " + nilaiHuruf);


// Switch Case
var nilaiMtk = 75;
var nilaiHuruf;

switch (true) {
    case nilaiMtk >= 90:
        nilaiHuruf = "A";
        break;
    case nilaiMtk >= 80:
        nilaiHuruf = "B";
        break;
    case nilaiMtk >= 70:
        nilaiHuruf = "C";
        break;
    case nilaiMtk >= 60:
        nilaiHuruf = "D";
        break;
    default:
        nilaiHuruf = "E";
}

console.log("Nilai Mtk: " + nilaiMtk);
console.log("Nilai Huruf: " + nilaiHuruf);


// For Statement
var nilaiPelajaran = [70, 80, 98, 76, 82];
var totalNilai = 0;


for (var i = 0; i < nilaiPelajaran.length; i++) {
    totalNilai += nilaiPelajaran[i];
}

var rataRata = totalNilai / nilaiPelajaran.length;

console.log("Nilai Pelajaran: " + nilaiPelajaran.join(", "));
console.log("Total Nilai: " + totalNilai);
console.log("Rata-rata Nilai: " + rataRata.toFixed(2));


// While
var nilaiPelajaran = [70, 80, 98, 76, 82];

var totalNilai = 0;
var i = 0;

while (i < nilaiPelajaran.length) {
    totalNilai += nilaiPelajaran[i];
    i++;
}

var rataRata = totalNilai / nilaiPelajaran.length;

console.log("Nilai Pelajaran: " + nilaiPelajaran.join(", "));
console.log("Total Nilai: " + totalNilai);
console.log("Rata-rata Nilai: " + rataRata.toFixed(2));

// Do While
var nilaiPelajaran = [70, 80, 98, 76, 82];

var totalNilai = 0;
var i = 0;

do {
    totalNilai += nilaiPelajaran[i];
    i++;
} while (i < nilaiPelajaran.length);

var rataRata = totalNilai / nilaiPelajaran.length;

console.log("Nilai Pelajaran: " + nilaiPelajaran.join(", "));
console.log("Total Nilai: " + totalNilai);
console.log("Rata-rata Nilai: " + rataRata.toFixed(2));

// Function
function hitungRataRata(nilai) {
    var total = 0;
    for (var i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }
    var rataRata = total / nilai.length;
    return rataRata;
}

var nilaiPelajaran = [70, 80, 98, 76, 82];

var rataRataNilai = hitungRataRata(nilaiPelajaran);

console.log("Nilai Pelajaran: " + nilaiPelajaran.join(", "));
console.log("Rata-rata Nilai: " + rataRataNilai.toFixed(2));

