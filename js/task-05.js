/*Task 06.05 - Lopatin
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const span = document.querySelector('#name-output');

const input = document.querySelector("#name-input");
input.addEventListener("input", () => {span.textContent=(input.value)?input.value:'Anonymous';});
