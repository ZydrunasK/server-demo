
const buttonDOM = document.querySelector('#a1');
const valueDOM = document.querySelector('.value');

console.log(buttonDOM);


let count = 0;

buttonDOM.addEventListener('click', () => {
    valueDOM.textContent = ++count;
})
