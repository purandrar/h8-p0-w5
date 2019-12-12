function changeVocals (str) {
    //code di sini
  var container = "";
  for(var i =0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o" || str[i] === "A" ||str[i] === "I" || str[i] === "U" || str[i] === "E" || str[i] === "O")
      container += String.fromCharCode(str.charCodeAt(i)+1);
    else
      container += str[i];
  }
  return container;
}
  
  function reverseWord (str) {
    var container = "";
    for(var i = str.length-1; i>=0;i--){
      container+=str[i];
    }
    return container;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var container = "";
    for(var i = 0; i < str.length; i++){
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        container += String.fromCharCode(str.charCodeAt(i)+32);
      }
      else if(str.charCodeAt(i)>=90 && str.charCodeAt(i) <=122){
        container += String.fromCharCode(str.charCodeAt(i)-32);
      }
    }
    return container;
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.split(" ").join("");
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length >=5){
      var vocalChange = changeVocals(name);
      var wordReverse = reverseWord(vocalChange);
      var changeCase = setLowerUpperCase(wordReverse);
      return removeSpaces(changeCase);
    }
    else 
      return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'