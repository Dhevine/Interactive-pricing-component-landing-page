const rangeSlider = document.getElementById("range")

const dot_Node = document.querySelector(".line")
const btn = document.querySelector(".enabled-tag")
const pageView = document.getElementById("title")
const price = document.querySelector(".price")
const discount_tag = document.getElementById("discount-tag")

// console.log(dot_Node.style);

dot_Node.style.width = `${rangeSlider.value}%`

rangeSlider.addEventListener("input", (e) => {
  dot_Node.style.width = `${e.target.value}%`
  const slider_val = e.target.value
  if (slider_val >= 0 && slider_val <= 20) return edit_val(10, "K", 8)
  if (slider_val >= 21 && slider_val <= 40) return edit_val(50, "K", 12)
  if (slider_val >= 41 && slider_val <= 60) return edit_val(100, "K", 16)
  if (slider_val >= 61 && slider_val <= 80) return edit_val(500, "K", 24)
  if (slider_val >= 81 && slider_val <= 100) return edit_val(1, "M", 24)
})

function edit_val(first, letter, second) {
  pageView.textContent = `${first}${letter} PAGEVIEWS`
  price.textContent = `$${second}.00`
}

btn.addEventListener("click", (e) => {
  btn.classList.toggle("enabled-tag__active")
  document
    .querySelector(".enabled__btn")
    .classList.toggle("enabled__btn__active")

  discount_tag.classList.toggle("discount-tag--disabled")
})
