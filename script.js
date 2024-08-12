const $ = document.querySelector.bind(document)

const round = (num) => Math.round(num * 100) / 100

const result = $('#result')
const btnCopy = $('#btn-copy')

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(result.value)
  alert('Copied the text: ' + result.value)
})

const formCream = $('#form-cream')

formCream.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = formCream.querySelector('input').value.trim()
  result.value = round((data - 300) / 1500)
})

const formCream2 = $('#form-cream2')

formCream2.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = formCream2.querySelector('input').value.trim()
  result.value = round((data - 200) / 1500)
})

const formCream3 = $('#form-cream3')

formCream3.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = formCream3.querySelector('input').value.trim()
  result.value = round((data - 500) / 1500)
})

const result2 = $('#result2')
const btnCopy2 = $('#btn-copy2')

btnCopy2.addEventListener('click', () => {
  navigator.clipboard.writeText(result2.value)
  alert('Copied the text: ' + result2.value)
})

const formCoke = $('#form-coke')

formCoke.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = formCoke.querySelector('input').value.trim()
  result2.value = round((data - 1) * 0.8)
})

const formSprite = $('#form-sprite')

formSprite.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = formSprite.querySelector('input').value.trim()
  result2.value = round((data - 0.9) * 0.8)
})
