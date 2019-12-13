
function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka < 10){
      return angka;
  }
  else {
      var r=1
      while(angka >0){
        var x = angka%10;
        r*=x;
        angka = (angka-x)/10;
      }
      return kaliTerusRekursif(r);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6