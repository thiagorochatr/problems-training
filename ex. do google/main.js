// https://nicolasz.dev/blog/modal-responsivo-com-anima%C3%A7%C3%A3o-e-listener-para-fechar-o-modal-quando-clicar-fora-dele

let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");


const openModal = () => {
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const handleClickOutside = (event) => {
    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    }
}
