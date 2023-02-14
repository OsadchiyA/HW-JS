// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} – это ноль`);
    } else if ((i % 2) === 1) {
        console.log(`${i} – нечетное число`);
    } else {
        console.log(`${i} – четное число`);
    }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function createArr(array, length) {
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
}

const sumElementArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

const searchMin = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;

}

const serchElementArray = (number, array) => {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return alert(`В массиве присутствует число ${number}`);
        }
    }
    return alert(`В массиве отсутствует число ${number}`);
}


let lengthMyArr = Number(prompt(`Введите длину массива`));
let serchNumber = Number(prompt(`Введите число, наличие которого нужно проверить в массиве`));
const myArr = [];
createArr(myArr, lengthMyArr);
console.log(myArr);
let sumElementArr = sumElementArray(myArr);
let minElementArr = searchMin(myArr);

alert(`Сумма элементов массива ${sumElementArr}`);
alert(`Минимальное число в массиве ${minElementArr}`);

serchElementArray(serchNumber, myArr);



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx


let string = 'X';
for (let i = 0; i < 19; i++) {
    console.log(string);
    string = string + 'X';
}