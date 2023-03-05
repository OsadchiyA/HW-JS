// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.onload = () => {
    console.log('страница загрузилась');
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const tagBody = document.querySelector('body');
// const searchTag = (events) => {
//     let clickTag = events.target;
//     (clickTag.className == 'super_element') ? console.log('Класс super_element имеется в теге') : console.log('Класс super_element в теге отсутствует');
//     console.log(`Название тега - ${clickTag.tagName.toLowerCase()}`)
// }
// tagBody.addEventListener('click', searchTag);

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// const searchTextarea = document.querySelector('textarea');
// // searchTextarea.addEventListener('mouseover', console.log('Вы навели на textarea.'));
// const displayingMessageMouseOver = () => {
//     console.log('Вы навели на textarea.');
// }
// searchTextarea.addEventListener('mouseover', displayingMessageMouseOver);

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

// const searchTagUl = document.querySelector('ul');
// const displayingMessage = (e) => {
//     let tagClick = e.target;
//     console.log(`Текст внутри элемента: ${tagClick.innerText}`);
// }
// searchTagUl.addEventListener('click', displayingMessage);

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// ОТВЕТ:
// по условию задания необходимо было выполнить с использованием делегирования. Поэтому при клике сначала отрабатывается нижестоящий в иерархии элемент(ul), затем вышестоящий (body)


// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const searchTagLi = document.querySelectorAll('li');

for (let i = 0; i < searchTagLi.length; i= i+2) {
    searchTagLi[i].style.backgroundColor = 'black';
}