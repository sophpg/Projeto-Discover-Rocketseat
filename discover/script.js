function toggleMode() {
    const html = document.documentElement //seleciona o html 
   html.classList.toggle('light') //faz a troca das classes 

   const img = document.querySelector("#profile img") // pega a tag img

   //substituir a imagem
   if(html.classList.contains('light')) {
    // se tiver light mode, adiciona imagem light
    img.setAttribute('src', './assets/avatar02.png')
   } else {
    //se tiver dark mode, manter imagem original 
    img.setAttribute('src', './assets/avatar.png')
   }
} 



  // if(html.classList.contains('light')) {
   //  html.classList.remove('light')
   //} else {
   //  html.classList.add('light')
   //}