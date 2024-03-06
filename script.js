// const inputa = document.getElementById("inputa")

// function semborda() {

//     inputa.style.border = "none"

// }



// document.addEventListener('DOMContentLoaded', function () {
//     var items = document.querySelectorAll('.nav li');

//     items.forEach(function (item) {
//         item.addEventListener('click', function (event) {
//             // Prevenir o comportamento padrão do link
//             event.preventDefault();

//             // Remover a classe 'active' de todos os itens
//             items.forEach(function (el) {
//                 el.classList.remove('active');
//             });

//             // Adicionar a classe 'active' ao item clicado
//             this.classList.add('active');

//             // Rolar suavemente até a seção correspondente
//             var targetId = this.getAttribute('id');
//             var targetElement = document.getElementById(targetId);

//             // Calcular o deslocamento do cabeçalho se houver
//             var headerOffset = document.querySelector('header').offsetHeight || 0;

//             window.scrollTo({
//                 top: targetElement.offsetTop - headerOffset,
//                 behavior: 'smooth'
//             });
//         });
//     });
// });





// dias da semana 
let data = new Date();


let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let dia = data.getMonth()
let mesAtual = mes[dia]

let diaMes = data.getDate()

let semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaSemana = data.getDay()
let diaSemanaAtual = semana[diaSemana]


let h1data = document.getElementById("data");

h1data.innerHTML = diaSemanaAtual + ", " + "dia " + diaMes + " de " + mesAtual
// dias da semana 




//animations

window.addEventListener("scroll", function () {
    let header = document.querySelector('#dodge')

    header.classList.toggle('rolagem', window.scrollY > 550)

})


window.addEventListener("scroll", function () {
    let header = document.querySelector('#up')

    header.classList.toggle('rolagem', window.scrollY > 550)

})

window.addEventListener("scroll", function () {
    let header = document.querySelector('#down')

    header.classList.toggle('rolagem', window.scrollY > 550)

})





window.addEventListener("scroll", function () {
    let header = document.querySelector('#footer')

    header.classList.toggle('rolagem', window.scrollY > 550)

})


window.addEventListener("scroll", function () {
    let header = document.querySelector('#meio')

    header.classList.toggle('rolagem', window.scrollY > 550 && window.scrollY < 1690)

})

window.addEventListener("scroll", function () {
    let header = document.querySelector('#textmiddle')

    header.classList.toggle('rolagem', window.scrollY > 550 && window.scrollY < 1490)

})





window.addEventListener("scroll", function () {
    let header = document.querySelector('#direita')

    header.classList.toggle('rolagem', window.scrollY > 1490 && window.scrollY < 2250)

})


window.addEventListener("scroll", function () {
    let header = document.querySelector('#textright')

    header.classList.toggle('rolagem', window.scrollY > 1490 && window.scrollY < 2250)

})




window.addEventListener("scroll", function () {
    let header = document.querySelector('#esquerda')

    header.classList.toggle('rolagem', window.scrollY > 2250 && window.scrollY < 3000)

})


window.addEventListener("scroll", function () {
    let header = document.querySelector('#textleft')

    header.classList.toggle('rolagem', window.scrollY > 2250 && window.scrollY < 3000)

})




