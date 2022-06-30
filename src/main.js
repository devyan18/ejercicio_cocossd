const form = document.getElementById('form')
const inputImage = document.getElementById('inputImage')
const preview = document.getElementById('preview')
const examinar = document.getElementById('examinar')
const message = document.getElementById('message')

import predictLoad from  './predictLoaded'
import toggleViewForm from './toggleViewForm'
document.addEventListener('DOMContentLoaded', () => {
  examinar.classList.add('disabled')
})

inputImage.addEventListener('change', (e) => {
  e.preventDefault()
  const urlImage = URL.createObjectURL(e.target.files[0])
  preview.setAttribute('crossorigin', 'anonymous');
  preview.setAttribute('id', 'imagen');
  preview.width = 250
  preview.height = 200
  preview.src = urlImage
  examinar.classList.remove('disabled')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  toggleViewForm()
  message.innerText = 'Prediciendo Imagen...'
  predictLoad(preview)
})