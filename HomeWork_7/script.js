// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

let classDropdownItem = document.querySelectorAll('.dropdown-item');
classDropdownItem.forEach(element => {
    element.classList.add('super-dropdown');
});

console.log(classDropdownItem);
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()

let classBtn = document.querySelector('.btn');
classBtn.classList.toggle('btn-secondary');

console.log(classBtn);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()

let classMenu = document.querySelectorAll('.menu');
classMenu.forEach(element => {
    element.classList.remove('dropdown-menu')
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()

let createLink = '<a href="#">link</a>';
let classDropdown = document.querySelector('div.dropdown');
classDropdown.insertAdjacentHTML('afterEnd', createLink);

console.log(classDropdown);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()

let updateId = document.getElementById('dropdownMenuButton').id = 'superDropdown';

console.log(updateId);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()

let attributeAriaLabelledby = document.querySelector('[aria-labelledby=dropdownMenuButton]');
attributeAriaLabelledby.dataset.dd = 3;

console.log(attributeAriaLabelledby);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

let classDropdownToggle = document.querySelector('.dropdown-toggle');
classDropdownToggle.removeAttribute('type');

console.log(classDropdownToggle);