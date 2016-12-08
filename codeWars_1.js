function accum(s) {
  var regex=/^[a-zA-Z]+$/;
  if(s.match(regex)){
  var thisString = '';
  for (let i = 0; i < s.length; i++){
    thisWord = '';
    for(let m=0; m<=i; m++){
      var thisLetter='';
      if(m===0){
      thisLetter = s[i].toUpperCase();
      }else{
      thisLetter = s[i].toLowerCase();
      }
      thisWord += thisLetter;
    }
    if(i<s.length-1){
      thisString+=(thisWord+'-');
    }else{
      thisString+=(thisWord);
    }
  }
  return thisString;
  }else{
  "please enter a letter"
  }
}

accum('cWat');
