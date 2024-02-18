/**
 * апроксимация это быстрый вариант подсчета довольно больших факториалов 
 * погрешность на числах больше тысячи будет меньше 0.1 %
 * так что метод можно считать рабочим для определенного круга задач
 * можно варьировать точность и время исполнения программы
 * можно оптимизировать
 */


function factorial(number){
    let arr = [1];
    let deg = 0;

    for (let i = 1; i <= number; i++){
        mul((Math.floor((number / Math.E) * 10**10)), arr, 0);
        deg += 10;
    }

    mul(Math.floor(Math.sqrt(number * Math.PI * 2) * 10**50), arr, 0);
    deg += 10

    return [arr, deg]
}

function mul(num, arr, carry){
    let i = 0;
    for(i = 0; i < arr.length; i++){
        carry = carry + arr[i] * num;
        arr[i] = carry % 10;
        carry = (carry - (carry % 10)) / 10;
    }
    while (carry !== 0){
        arr[i] = carry % 10;
        carry = (carry - (carry % 10)) / 10;
        i++;
    }
} 

let num;
let deg;
let arrar = [];

console.log('write your number');
process.stdin.on('data', (data) => {
    num = parseInt(data);
    const tmp = factorial(num);
    array = tmp[0].reverse();
    deg = tmp[1];

    let i = 0;

    console.log(`factorial of number ${num} is :`)
    while((i < array.length - deg) && (array[i] !== undefined)){
        process.stdout.write(array[i].toString());
        i++; 
    }
    console.log();
    console.log('\nwrite your next number');
});