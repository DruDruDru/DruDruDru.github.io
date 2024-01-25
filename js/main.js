let count = 0;

let p = document.querySelector('.helloWorld')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    ++count;
    p.textContent = count;
})
