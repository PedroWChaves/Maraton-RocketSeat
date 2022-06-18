// HTML elements
const respostaElem = document.querySelector("#resposta")
const inputElem = document.querySelector("#input")
const buttonElem = document.querySelector("#button")
// possible answers
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// button callback function
function fazerPergunta(){
  // check if a question was asked
  if(inputElem.value == ""){
    alert("Escreva sua pergunta!")
    return
  }
  //disable button
  buttonElem.setAttribute("disabled", true)

  // copy asked question
  const pergunta = "<div>" + inputElem.value + "</div>"
  // select random number
  const rand = Math.floor(Math.random() * respostas.length)
  // display question + answer
  respostaElem.innerHTML = pergunta + respostas[rand]

  // make the text visible
  respostaElem.style.opacity = 1
  // disappear after 3 seconds
  setTimeout(function (){
    respostaElem.style.opacity = 0
    buttonElem.setAttribute("disabled", false)
  }, 3000) 
}
