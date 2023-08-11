/*Task 06.04 - Lopatin
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

- Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
- Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
- Обновляй интерфейс новым значением переменной counterValue.
*/
var counterValue = 0;

const spanValue = document.querySelector("#value");

const btnDec = document.querySelector('button[data-action="decrement"]');
btnDec.addEventListener("click",()=>{counterValue--;spanValue.textContent = counterValue;});

const btnInc = document.querySelector('button[data-action="increment"]');
btnInc.addEventListener("click",()=>{counterValue++;spanValue.textContent = counterValue;});
