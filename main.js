// get all keys (pegar todas as teclas)
const keys = document.querySelectorAll(".key")// vamos pegar uma variavel transformar ela em uma constante, e para pegar vamos usar o document.querytSelectorAll() pois consegue pegar todas as classes com o mesmo nome

// play notes (fazer ele tocar)
// Fazer uma função para rodar no window.addEventListener("keydown", ...)
function playNote(event){ // essa vai ser a função executada após a gente clicar em uma tecla, no caso o event exetutado
  // keycode
  let keyCode // criar uma variavel vazia

  const iskeyboard = event.type === "keydown" // esta expressão de 3 iguais é exatamente igual, está peguntando se o evento é exatamente igual a keydown ent ele me responde veradadeiro ou falso
  if(iskeyboard) { // ou seja sempre que o event.type for keydown ele entra nessa estrutura if
    keyCode = event.keyCode
  } else { // mas se for falso ele entra no else

  }

  //typed or pressed key

  //if key exists

  //play audio
}
// click with mouse
keys.forEach(function(key){ // o forEach() diz que para cada tecla que tiver nas 'keys' ele execute uma função, para cada vez clicado ele tenq receber o nome da tecla por isso damos o nome de key q é uma variavel que vai existir dentro do scopo
  key.addEventListener("click") // vamos passar o evento click que é especifico para mouse
})
// keyboard type (quando teclarmos as letras no teclado)
window.addEventListener("keydown", playNote) // vamos usar os eventos, queremos usar os eventos q esta disponivel no objeto chamado 'window' q é um objeto que se refere a janela toda e ao lado vamos colocar um addEventListener() com um keydown, que significa q com este evento ao clicamos na tecla ele vai fazer algo, q no caso é uma função
// window.addEventListener("click", playNote) // se colocarmos isso ele ele vai enteder que não é mais o click do teclado e sim do mouse 