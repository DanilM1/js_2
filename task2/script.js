const
consoleLog_ = document.querySelector('#consoleLog'),
alert_ = document.querySelector('#alert'),
prompt_ = document.querySelector('#prompt');

consoleLog.addEventListener('click', 
(event) => {
  alert('Метод для вывода сообщения в веб-консоль');
});
consoleLog.addEventListener('click', 
(event) => {
    document.querySelector('#consoleLog__').textContent = 'Пример использования команды console.log';
});

alert_.addEventListener('click', 
(event) => {
  alert('Показывает всплывающее окно с сообщением и ждет, пока пользователь его закроет, нажав кнопку "OK"');
});
alert_.addEventListener('click', 
(event) => {
    document.querySelector('#alert__').textContent = 'Пример использования команды alert()';
});

prompt_.addEventListener('click', 
(event) => {
  alert('Показывает всплывающее окно с сообщением и ждет пока пользователь введет текстовую информацию и отправит ее, нажав кнопку "OK", или просто закроет окно, нажав - "Отмена"');
});
prompt_.addEventListener('click', 
(event) => {
    document.querySelector('#prompt__').textContent = 'Пример использования команды prompt()';
});