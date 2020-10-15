let button= document.getElementById("button")
button.addEventListener('click',function(){
  console.log('clicked')
  let input= document.getElementById("input")
  let word= input.value
  console.log(word)



const pigLatin = (word) => {
let vowelIndexFunction=function(word){
    let vowels=['a','e','i','o','u']
    for(let index=0;index<word.length;index ++){
      let letter = word[index];
      if(vowels.includes(letter)){
      return index
      } 
    }return -1
  }
  let vowelIndex=vowelIndexFunction(word)
  let vowelStart= word+"yay";
  let split= word.substr(0,vowelIndex)
  let newWord= word.substr(vowelIndex)+split+"ay"
  
  if(vowelIndex===0){
    return vowelStart
  }else if(vowelIndex>0){
    return newWord
  }else{return word}
  
}


let translate=document.getElementById("translate")
translate.innerText=pigLatin(word)

})
