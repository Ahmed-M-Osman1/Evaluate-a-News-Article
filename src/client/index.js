// import the handle function.
import handleSubmit from './js/handleSubmit'

//import './styles/style.scss'
 
window.addEventListener('', () => {
    console.log('every thing works fine');

    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit()
    })
});
export { handleSubmit }
