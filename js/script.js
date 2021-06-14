// variabel
const hewan1 = "Kambing";
const hewan2 = "Kelinci";
const hewan3 = "Kerbau";
const hewan4 = "Kucing";

// contoh array
const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing"];

// cetak array hewan
console.log(hewan);

// mengakses elemen array
// const hewan = ["[0]Kambing", "[1]Kelinci", "[2]Kerbau", "[3]Kucing"];
console.log(hewan[0]);

// mengubah elemen array
hewan[0] = 1;
console.log(hewan);

// contoh array
// const hewan = ["Kambing", "Kelinci", "Kerbau", "Kucing"];

// type array
console.log(typeof hewan);

// array memiliki property dan methods
// property
console.log(hewan.length);

// methods
hewan.forEach((elemen) => console.log(elemen));
