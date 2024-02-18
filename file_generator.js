/**
 * генерируется 400 (вариативное число) факториалов от 1000 до 1400, которые зыписываются в файлы
 * позволяет быстро получать любые факториалы из указанного промежутка
 * можно оптимизировать использование памяти в ущерб производительности
 */

const fs = require('node:fs');

function mul(num, arr, carry){
    let i = 0;
    for(i = 0; i < arr.length; i++){
        carry = carry + Number(arr[i]) * num;
        arr[i] = (carry % 10).toString();
        carry = (carry - (carry % 10)) / 10;
    }
    while (carry !== 0){
        arr[i] = (carry % 10).toString();
        carry = (carry - (carry % 10)) / 10;
        i++;
    }
    return arr;
} 

function write_f(number, arr){
    arr = arr.reverse();
    arr = arr.join('');
    fs.writeFileSync(`./factorials/${number}.txt`, arr);
}

function deletefiles(){
    for (let i = 1001; i < 1400; i++){
        fs.unlinkSync(`./factorials/${i}.txt`)
    }
}

let num;
let arr = '';
arr = fs.readFileSync('./factorials/1000.txt', 'utf8').split('').reverse();

for(let i = 1001; i < 1400; i++){
    arr = mul(i, arr, 0);
    write_f(i, arr);
    arr = arr.reverse();
}

console.log('write your number');
process.stdin.on('data', (data) => {
    num = parseInt(data);

    if (num === 0){
        deletefiles();
        process.exit();
    }
    else{
        console.log(`factorial of number ${num} is :`)
        arr = fs.readFileSync(`./factorials/${num}.txt`, 'utf8');
        process.stdout.write(arr);
        console.log();
        console.log('\nwrite your next number "0" if you want to stop');
    }   
});

