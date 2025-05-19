// Задание № 1 код с помощью условной конструкции по блок схеме

let A = Number(prompt("введите число A"))
let B = Number(prompt("введите число B"))
if (A > B) {
    let X = A*B;
    alert("X="+X);
} else {
    let X = A+B;
    alert("X="+X);
}


// Задание № 2 Калькулятор возраста

let A = Number(prompt("введите год рождения"))
let B = 2025
let X = B-A
alert(`Ваш возраст ${X} лет`)


// Задание № 3 Определение максимального числа из трех введенных

let A = Number(prompt("введите число A"))
let B = Number(prompt("введите число B"))
let C = Number(prompt("введите число C"))
if (A > B) {
    alert(`Максимальное число ${A}`);
} else if (A > C) {
    alert(`Максимальное число ${A}`);
} else if (B > A) {
    alert(`Максимальное число ${B}`);
} else if (B > C) {
    alert(`Максимальное число ${B}`);
} else {
    alert(`Максимальное число ${C}`);
}