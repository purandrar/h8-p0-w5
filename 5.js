function kaliTerusRekursif(angka) {
    // you can only write your code here!
    while(i > 0){
        if(angka < 99)
    }
    if(angka < 10){
        return angka;
    }
    else{
        var satuan = angka % 10;
        angka = (angka-satuan)/10;
        return satuan * kaliTerusRekursif(angka)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6



//   function dirReduc(arr){
//     // ...
//     var checker = false;
//     while(!checker){
//       for(var i =0;i<arr.length;i++){
//         if((arr[i] === "NORTH" && arr[i+1] === "SOUTH")||(arr[i] === "NORTH" &&arr[i+1] === "SOUTH")||(arr[i] === "SOUTH" && arr[i+1] === "NORTH")||(arr[i] === "WEST" && arr[i+1] === "EAST")||(arr[i] === "EAST" && arr[i+1] === "WEST")){
//           arr.splice(i,2);
//         }
//       }
//       var flag = false;
//       for(var i =0;i<arr.length;i++){
//         if((arr[i] === "NORTH" && arr[i+1] === "SOUTH")||(arr[i] === "NORTH" &&arr[i+1] === "SOUTH")||(arr[i] === "SOUTH" && arr[i+1] === "NORTH")||(arr[i] === "WEST" && arr[i+1] === "EAST")||(arr[i] === "EAST" && arr[i+1] === "WEST")){
//           flag = true;
//         }
//       }
//       if(!flag)
//         checker = true;
//     }
//   }