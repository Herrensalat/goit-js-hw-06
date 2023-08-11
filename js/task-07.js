/*Task 06.07 - Lopatin
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.
*/

const spanAbra = document.getElementById('text');

const slider = document.getElementById('font-size-control');
slider.addEventListener('input',() => {spanAbra.style.fontSize=slider.value+"px";});