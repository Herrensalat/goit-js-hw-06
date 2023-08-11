//Task 06.06 - Lopatin
//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
const input = document.querySelector('#validation-input');

const checkIt = () => {
    //Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
    const lenDataset = input.dataset.length;

    //Если введено подходящее количество символов,  
    if (input.value.length == lenDataset) {
        //то border инпута становится зелёным,
        if (input.classList.contains('invalid')) input.classList.remove('invalid');
        input.classList.add('valid');
    }//if
    else { 
        //если неправильное - красным.
        if (input.classList.contains('valid')) input.classList.remove('valid');
        input.classList.add('invalid'); 
    }//else
};//checkIt

input.addEventListener('blur',checkIt);


