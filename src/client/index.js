// import the handle function.
import { handleSubmit } from './js/handleSubmit'

import './styles/style.scss'
 
window.addEventListener('DOM content Loader', () => {
    console.log('every thing works fine');

    const btnSubmit = document.getElementById('btn-submit')
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        handleSubmit(e)
    })
});

export default handleSubmit;