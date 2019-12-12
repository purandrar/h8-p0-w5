function sorting(arrNumber) {
    // code di sini
    if(arrNumber === [])
        return [];
    for(var i = 0; i < arrNumber.length ;i++){
        var max = i;
        for(var j = i+1; j< arrNumber.length; j++){
            if(arrNumber[max] < arrNumber[j]){
                max = j
            }
        }
        var temp = arrNumber[i];
        arrNumber[i] = arrNumber[max];
        arrNumber[max] = temp
    }
    return arrNumber;
}
function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length === 0)
        return " "
    var counter = 1;
    var index = 0;
    while(arrNumber[index+1] === arrNumber[0]){
        counter++;
        index++
    }
    return "angka paling besar adalah " + arrNumber[0] + " dan jumlah kemunculan sebanyak " + counter + " kali";
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 8, 8, 6, 5, 6, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''