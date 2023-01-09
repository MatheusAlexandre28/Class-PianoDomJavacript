// // get all keys (pegar todas as teclas)
// const keys = document.querySelectorAll(".key")// vamos pegar uma variavel transformar ela em uma constante, e para pegar vamos usar o document.querytSelectorAll() pois consegue pegar todas as classes com o mesmo nome

// // play notes (fazer ele tocar)
// // Fazer uma função para rodar no window.addEventListener("keydown", ...)
// function playNote(event){ // essa vai ser a função executada após a gente clicar em uma tecla, no caso o event exetutado
//   let audioKeyCode = getKeyCode(event); // essa funcionalidade pega o codigo e coloca na variavel

//   //typed or pressed key (tecla precionada)
//   const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`) // queremos pegar o elemento que tenha o data-key igual por exemplo a variavel que criamos acima q pega o event

//   //if key exists (vamos verificar se essa chave existe ou não)
//   const cantFoundAnyKey = key // vamos perguntar se tal chave existe 

//   if(!cantFoundAnyKey){ // colocamos este sinal '!' para negar o valor, ou seja, ele pergunta se não existe, ent ele só vai entrar no if somente se ela não existir 
//     return;
//   }

//   addPlayingClass(key)
//   playAudio(audioKeyCode)

//   function addPlayingClass(key){
//     key.classList.add('playing')
//   }
// }

// function getKeyCode(event) { // vamos colocar essa função aqui para que ela seja chamada mais tarde/ aqui usamos a mais nessa estrutura o event
//   let keyCode // criar uma variavel vazia

//   const iskeyboard = event.type === "keydown" // esta expressão de 3 iguais é exatamente igual, está peguntando se o evento é exatamente igual a keydown ent ele me responde veradadeiro ou falso
//   if(iskeyboard) { // ou seja sempre que o event.type for keydown ele entra nessa estrutura if
//     keyCode = event.keyCode
//   } else { // mas se for falso ele entra no else
//     keyCode = event.target.dataset.key
//   }

//   return keyCode
// }

// function playAudio(audioKeyCode) {
//   const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`) // é a mesma expressão da de cima
//   audio.currentTime = 0;
//   audio.play()
// }

// function removePlayingClass(event){
//   event.target.classList.remove("playing")
// }
// function registerEvents(){
//     // click with mouse
//   keys.forEach(function(key){ // o forEach() diz que para cada tecla que tiver nas 'keys' ele execute uma função, para cada vez clicado ele tenq receber o nome da tecla por isso damos o nome de key q é uma variavel que vai existir dentro do scopo
//     key.addEventListener("click") // vamos passar o evento click que é especifico para mouse
//     key.addEventListener("transitionend", removePlayingClass)
//   })
//   // keyboard type (quando teclarmos as letras no teclado)
//   window.addEventListener("keydown", playNote) // vamos usar os eventos, queremos usar os eventos q esta disponivel no objeto chamado 'window' q é um objeto que se refere a janela toda e ao lado vamos colocar um addEventListener() com um keydown, que significa q com este evento ao clicamos na tecla ele vai fazer algo, q no caso é uma função
//   // window.addEventListener("click", playNote) // se colocarmos isso ele ele vai enteder que não é mais o click do teclado e sim do mouse 
// }

// window.addEventListener("load", registerEvents)


// get all keys
const keys = document.querySelectorAll(".key")

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })

  // keyboard type
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
