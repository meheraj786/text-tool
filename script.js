const caseInput= document.querySelector("#case-input")
const caseOutput= document.querySelector("#case-output")
const wordInput= document.querySelector("#word-input")
const countResult= document.querySelector(".count-result")

function toTitleCase(str) {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  let titleCasedStr = words.join(' ');
  
}

function toSentenceCase(str) {
  let sentences = str.split('. ');
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
  }
  let sentenceCasedStr = sentences.join('. ');
  sentenceCasedStr;
}

function uppercase() {
  let caseText= caseInput.value
  if (caseInput.value=="") {
    alert("Input Something")
  }else{
    caseOutput.value= caseText.toUpperCase()
  }
  
}
function lowercase() {
  let caseText= caseInput.value
  if (caseInput.value=="") {
    alert("Input Something")
  }else{
    caseOutput.value= caseText.toLowerCase()
  }
  
}
function titlecase() {
  let caseText= caseInput.value
  if (caseInput.value=="") {
    alert("Input Something")
  }else{
    caseOutput.value= toTitleCase(caseText)
  }
  
}
function sentencecase() {
  let caseText= caseInput.value
  if (caseInput.value=="") {
    alert("Input Something")
  }else{
    caseOutput.value= toSentenceCase(caseText)
  }
}
function clear() {
  caseInput.value=""
  caseOutput.value=""
}

function count() {
  if (wordInput.value=="") {
    alert("Input Something")
    countResult.innerHTML= ""
  }else{
    let words = wordInput.value.split(' ');
  countResult.innerHTML= `Total ${words.length} words`
  }
  
}
function clearWord() {
  wordInput.value=''
  countResult.innerHTML= ''
}