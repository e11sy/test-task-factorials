/**
 * базовая реализация факториала, довольно долгая но на числах 1000 + работает с приемлемой скоростью
 * точность тут 100% так что единственная проблема - время исполнения
 * можно оптимизировать
 */

function factorial(number){
    let arr = [1];

    for (let i = 1; i <= number; i++){
        mul(i, arr, 0);
    }

    return arr;
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

console.log('write your number');
process.stdin.on('data', (data) => {
    num = parseInt(data);
    const array = factorial(num).reverse();
    let i = 0;

    console.log(`factorial of number ${num} is :`)
    while(array[i] !== undefined){
        process.stdout.write(array[i].toString());
        i++; 
        
    }
    console.log();
    console.log('\nwrite your next number');
});

