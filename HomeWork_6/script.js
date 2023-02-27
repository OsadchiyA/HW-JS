
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

console.log(document.getElementById('super_link'));

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

let updateCardLink = document.querySelectorAll('a.card-link');
console.log(updateCardLink);
updateCardLink.forEach(function(cardLink) {
    cardLink.textContent = 'ссылка';
});


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

let collectionCardLinkBody = document.querySelectorAll('.card-body>.card-link');
collectionCardLinkBody.forEach(cardLinkBody => console.log(cardLinkBody));
// collectionCardLinkBody.forEach(function(cardLinkBody) {
//     console.log(cardLinkBody);
// });


// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()

console.log(document.querySelector('[data-number="50"]'));

// 5. Выведите содержимое тега title в консоль.
// []()

let titleText = document.querySelector('title');
console.log(titleText.innerText);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()

let firstCardTitle = document.querySelector('.card-title');
console.log(firstCardTitle);
console.log(firstCardTitle.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

let createTagP = document.createElement('p');
createTagP.textContent='Привет';
let firstCard = document.querySelector('.card');
firstCard.appendChild(createTagP);

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();