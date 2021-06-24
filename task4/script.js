const a = document.querySelector('a');

a.addEventListener('click', 
(event) => {
    event.preventDefault();
    a.textContent = prompt('Вводите текст');
});