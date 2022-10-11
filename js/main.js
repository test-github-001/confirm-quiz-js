'use strict';

let scores = 0;

let endOfText = '\n\nЕсли вы согласны с утверждением - нажмите "OK", если не согласны - нажмите "Отмена"';

let text_1 = 'Для активации "строгого" режима в JavaScript необходимо в начале кода или функции написать команду "use strict";';
let answer_1 = confirm(text_1 + endOfText);
if (answer_1) scores = scores + 2;
else scores = scores - 1;
console.log('scores =', scores);

let text_2 = 'В JavaScript есть специальное число "null". Результатом любой математической операции с "null" будет "null".';
let answer_2 = confirm(text_2 + endOfText);
if (answer_2) scores = scores - 1;
else scores = scores + 2;
console.log('scores =', scores);

let text_3 = 'В JavaScript возвести число в n-ю степень можно только с помощью объекта Math методом Math.pow().';
let answer_3 = confirm(text_3 + endOfText);
if (answer_3) scores = scores - 1;
else scores = scores + 2;
console.log('scores =', scores);

let text_4 = 'В JavaScript булевый тип данных может принимать только одно из двух значений: true либо false.';
let answer_4 = confirm(text_4 + endOfText);
if (answer_4) scores = scores + 2;
else scores = scores - 1;
console.log('scores =', scores);

let text_5 = 'В JavaScript, при преобразовании в булевый тип данных, пустая строка(без пробелов), null и число 0 - примут значение false';
let answer_5 = confirm(text_5 + endOfText);
if (answer_5) scores = scores + 2;
else scores = scores - 1;
console.log('scores =', scores);

let text_6 = 'В стандарте ES6 появились константы const и переменные с локальной областью видимости let.';
let answer_6 = confirm(text_6 + endOfText);
if (answer_6) scores = scores + 2;
else scores = scores - 1;
console.log('scores =', scores);

let text_7 = 'В JavaScript экранирование кавычек можно сделать с помощью обратного слеша " \\".';
let answer_7 = confirm(text_7 + endOfText);
if (answer_7) scores = scores + 2;
else scores = scores - 1;
console.log('scores =', scores);

alert('Вы набрали ' + scores + ' очков.');