

const rangeSlider = document.getElementById('range');

const dot_Node = document.querySelector('.line');
const btn = document.querySelector(".enabled-tag")
// console.log(dot_Node.style);

dot_Node.style.width = `${rangeSlider.value}%`;


rangeSlider.addEventListener('input', (e) => {
 console.log(e.target.value);
 dot_Node.style.width = `${e.target.value}%`
})


btn.addEventListener('click', (e) => {
 btn.classList.toggle("enabled-tag__active")
 document.querySelector(".enabled__btn").classList.toggle("enabled__btn__active")


 
})

