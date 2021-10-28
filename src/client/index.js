// import the handle function.
import handleSubmit from './js/handleSubmit'

import './styles/style.scss'
 
window.addEventListener('DOMContentLoaded', () => {
    console.log('every thing works fine');

    const formSubmit = document.getElementById('form')
    formSubmit.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit()
    })
});