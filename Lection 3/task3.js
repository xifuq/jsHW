// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
const sum = (n) => {
    if (n < 1 || n > 9 || typeof(n) !== "number") {
        console.log("Внимательно читаем условия задачи");
    }
    else {
        console.log(n + Number(String(n) + String(n)) + Number(String(n) + String(n) + String(n)))
    }
}
sum(1)
sum(0)
sum(9)
sum(10)
sum("Проверка")