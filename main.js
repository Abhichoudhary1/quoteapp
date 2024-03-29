let head = document.querySelector('header')
let header = document.querySelector('head')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')
let span = document.querySelector('.badge')

let generatequote = async() =>{
    let response = await fetch("https://quotable.io/random")
    let data =     await response.json()
     h1.innerText = data.content
     h2.innerText = data.author
     span.innerText = data.span

     setInterval(() => {
      generatequote()
   }, 1000000);
  
}

 btn.addEventListener("click", generatequote)



