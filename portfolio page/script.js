const hamburger = document.getElementById('hamburger')
const navUL = document.getElementById('nav-ul')
const resumeButton = document.getElementById('resume-button')

hamburger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
    resumeButton.style.display = 'none'
})