var
text = document.querySelector('#text'),
duplicateField = document.querySelector('#duplicateField');
button = document.querySelector('button');

text.addEventListener('input', 
(event) => {
    duplicateField.textContent = event.target.value;
});

button.addEventListener('click', 
(event) => {
    event.preventDefault();
    console.log(text.value);
    text.value = '';
    duplicateField.textContent = '';
});