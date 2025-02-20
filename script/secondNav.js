const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const navigationTwo = document.querySelector('#nav-container2')

menuBtn.addEventListener('click', ()=> {
    navigationTwo.style.display = 'flex'
})

closeBtn.addEventListener('click', ()=> {
    navigationTwo.style.display = 'none'
})

