
// // Get modal element
// const modalProject1 = document.getElementById('modalForProject1')
// const modalProject2 = document.getElementById('modalForProject2')
// const modalProject3 = document.getElementById('modalForProject3')
// const modalProject4 = document.getElementById('modalForProject4')
// // Get img that opens the modal
// const modalProjectImg1 = document.getElementById('projectModalImgBtn1')
// const modalProjectImg2 = document.getElementById('projectModalImgBtn2')
// const modalProjectImg3 = document.getElementById('projectModalImgBtn3')
// const modalProjectImg4 = document.getElementById('projectModalImgBtn4')
// // Get btn that closes the modal
// const modalProjectCloseBtn1 =document.getElementById('modalProjectsCloseBtn1')
// const modalProjectCloseBtn2 =document.getElementById('modalProjectsCloseBtn2')
// const modalProjectCloseBtn3 =document.getElementById('modalProjectsCloseBtn3')
// const modalProjectCloseBtn4 =document.getElementById('modalProjectsCloseBtn4')

// // Listen for open click
// modalProjectImg1.addEventListener('click', openProjectModal1)
// modalProjectImg2.addEventListener('click', openProjectModal2)
// modalProjectImg3.addEventListener('click', openProjectModal3)
// modalProjectImg4.addEventListener('click', openProjectModal4)
// // Listen for close click
// modalProjectCloseBtn1.addEventListener('click', closeProjectModal1)
// modalProjectCloseBtn2.addEventListener('click', closeProjectModal2)
// modalProjectCloseBtn3.addEventListener('click', closeProjectModal3)
// modalProjectCloseBtn4.addEventListener('click', closeProjectModal4)
// // Listen for outside-modal click
// window.addEventListener('click', clickOutsideForCloseProjectModal1)
// window.addEventListener('click', clickOutsideForCloseProjectModal2)
// window.addEventListener('click', clickOutsideForCloseProjectModal3)
// window.addEventListener('click', clickOutsideForCloseProjectModal4)

// // Function to open modal
// function openProjectModal1() {
//     modalProject1.style.display = 'block';
// }
// function openProjectModal2() {
//     modalProject2.style.display = 'block';
// }
// function openProjectModal3() {
//     modalProject3.style.display = 'block';
// }
// function openProjectModal4() {
//     modalProject4.style.display = 'block';
// }
//     // Funtion to close modal
//     function closeProjectModal1() {
//         modalProject1.style.display = 'none';
//     }
//     function closeProjectModal2() {
//         modalProject2.style.display = 'none';
//     }
//     function closeProjectModal3() {
//         modalProject3.style.display = 'none';
//     }
//     function closeProjectModal4() {
//         modalProject4.style.display = 'none';
//     }
//                 // Funtion to close modal if outside-modal click
//                 function clickOutsideForCloseProjectModal1(e) {
//                     if (e.target == modalProject1) {
//                         modalProject1.style.display = 'none';
//                     }
//                 }
//                 function clickOutsideForCloseProjectModal2(e) {
//                     if (e.target == modalProject2) {
//                         modalProject2.style.display = 'none';
//                     }
//                 }
//                 function clickOutsideForCloseProjectModal3(e) {
//                     if (e.target == modalProject3) {
//                         modalProject3.style.display = 'none';
//                     }
//                 }
//                 function clickOutsideForCloseProjectModal4(e) {
//                     if (e.target == modalProject4) {
//                         modalProject4.style.display = 'none';
//                     }
//                 }


// Coloco os elementos de cada modal nas variáveis
let modalProject0 = {
    h2: "Rocket Q",
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit provident ratione modi possimus cupiditate sunt illum magni ullam facilis maiores aperiam fugiat ipsam dolorem, laborum consequuntur temporibus assumenda odit nisi."
}

let modalProject1 = {
    h2: "Beauty Salon",
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit provident ratione modi possimus cupiditate sunt illum magni ullam facilis maiores aperiam fugiat ipsam dolorem, laborum consequuntur temporibus assumenda odit nisi."
}

let modalProject2 = {
    h2: "Certificard",
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit provident ratione modi possimus cupiditate sunt illum magni ullam facilis maiores aperiam fugiat ipsam dolorem, laborum consequuntur temporibus assumenda odit nisi."
}

let modalProject3 = {
    h2: "Super Trunfo",
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit provident ratione modi possimus cupiditate sunt illum magni ullam facilis maiores aperiam fugiat ipsam dolorem, laborum consequuntur temporibus assumenda odit nisi."
}

// Coloco as variáveis em uma Array
let projectsArray = [modalProject0, modalProject1, modalProject2, modalProject3]

let projetos = document.getElementsByClassName('modalProjects')
// let projetos = document.getElementsByClassName('project') 
// Vem como ARRAY, isso é muito bom


let closeModalBtn = document.getElementsByClassName('modalProjectsCloseBtn')
// Botão para fechar a modal

// Função que recebe o índice da modal - que é o mesmo do projeto
function showProjectAndModal(i) {
    console.log(projetos[i])
    console.log(projectsArray[i].h2)
    projetos[i].style.display = 'block';

    // Fechar ao clicar fora da modal
    // setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}
// Colocar em cada imagem (no HTML) um "onclick" com o índice da própria imagem

// Função para fechar a modal no botão X
function closeProjectModal(i) {
    console.log("clicado para fechar modal")
    projetos[i].style.display = 'none';
}
// Colocar em cada botão-span (no HTML) um "onclick" com o índice do próprio projeto




// Fechar modal ao apertar fora da mesma

// let insideModal = document.getElementsByClassName('modalForProject-content')

// const handleClickOutside = (e, i) => {
//     if (!projetos[i].contains(e.target)) {
//         projetos[i].style.display = 'none';
//         document.removeEventListener('click', handleClickOutside, false)
//     }
// }

// const modalProject1 = document.getElementById('modalForProject1')





//      https://www.youtube.com/watch?v=Nw18SQ9mU6I
//      https://www.youtube.com/watch?v=ugjfB5HLfPM
//      https://codepen.io/ettrics/pen/Jdjdzp
//      https://codepen.io/timothylong/pen/HhAer
//      https://codepen.io/jasesmith/pen/GmQbME
//      https://codepen.io/bchalker/pen/pyvBmq
//      https://pt.stackoverflow.com/questions/420659/como-varrer-um-array-e-inserir-os-elementos-no-html-com-js
