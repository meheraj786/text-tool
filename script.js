const caseInput= document.querySelector("#case-input")
const caseOutput= document.querySelector("#case-output")
const wordInput= document.querySelector("#word-input")
const countResult= document.querySelector(".count-result")
const htmlInput= document.querySelector("#html-input")
const htmlOutput= document.querySelector("#html-output")
const cssInput= document.querySelector("#css-input")
const cssOutput= document.querySelector("#css-output")
const jsonInput= document.querySelector("#json-input")
const jsonOutput= document.querySelector("#json-output")
const loremInput= document.querySelector(".lorem-input")
const loremOutput= document.querySelector("#lorem-text")

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

function htmlFormat() {
  if (htmlInput.value=="") {
    alert("Input Something")
    
  }
  const lines= htmlInput.value.split("\n");
  let result = "";
  let indent = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("</")) {
      indent--;
    }
    result += "\t".repeat(indent) + lines[i] + "\n";
    if (lines[i].includes("<")) {
      indent++;
    }
  }
  htmlOutput.value= result
}
function cssFormat() {
  if (cssInput.value=="") {
    alert("Input Something")
    
  }
  const lines= cssInput.value.split("\n");
  let result = "";
  let indent = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("}")) {
      indent--;
    }
    result += "\t".repeat(indent) + lines[i] + "\n";
    if (lines[i].includes("{")) {
      indent++;
    }
  }
  cssOutput.value= result
}

function jsonFormat() {
  if (jsonInput.value=="") {
    alert("Input Something")
    
  }
  const lines= jsonInput.value.split("\n");
  let result = "";
  let indent = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("}")) {
      indent--;
    }
    result += "\t".repeat(indent) + lines[i] + "\n";
    if (lines[i].includes("{")) {
      indent++;
    }
  }
  jsonOutput.value= result
}

function generate(){
  loremOutput.value=""
  let loremWords= ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "quisquam"]
  let result= ""
  let loremLength= parseInt(loremInput.value)-3
  for (let i = 0; i < loremLength; i++) {
    let index= Math.floor(Math.random()*(loremWords.length));
    let word = loremWords[index];
    result+= loremOutput.value + " " + word
  }
  loremOutput.value= `Lorem ipsum dolor ${result}`
}