// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются
const sum = (n) => {
    console.log(n + Number(String(n) + String(n)) + Number(String(n) + String(n) + String(n)))
}
sum(1)