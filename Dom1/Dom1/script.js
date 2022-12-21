let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let midnight = document.querySelector('.midnight');
let starlight = document.querySelector('.starlight');
let red = document.querySelector('.red');
let img = document.querySelector('.scroll-section__inner-img');

blue.onclick = () => {
    img.style.backgroundImage = "url('./img/iphone\ blue.jpeg')"
}
purple.onclick = () => {
    img.style.backgroundImage = "url('./img/iphonepurple.jpeg')"
}
midnight.onclick = () => {
    img.style.backgroundImage = "url('./img/iphonemidnight.jpeg')"
}
starlight.onclick = () => {
    img.style.backgroundImage = "url('./img/iphonestarlight.jpeg')"
}
red.onclick = () => {
    img.style.backgroundImage = "url('./img/iphoneproduct-red.jpeg')"
}


let openBtn = document.querySelector('.p11')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal-bg')
let closeBtn = document.querySelector('.close-btn')

openBtn.onclick = () => {
    modalBg.style.display = 'block'
    modal.style.display = 'block'
}

closeBtn.onclick = () => {
    modalBg.style.display = 'none'
    modal.style.display = 'none'
}
