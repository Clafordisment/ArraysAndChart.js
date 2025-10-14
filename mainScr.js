const mainFiller = document.querySelector(".filledFromScript");

let resultArr = [];
let resultIndex = 0;

//для раскомментирования  Alt + Shift + A

//Задание 1

/* let someArr = Array.from({ length: 20 }, 
    () => Math.floor(Math.random() * 100) + 1);

for (let i = 0; i < someArr.length; i++) {
    let isPrime = true;
    
    if (someArr[i] > 1) {
        for (let j = 2; j <= Math.sqrt(someArr[i]); j++) {
            if (someArr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            resultArr[resultIndex++] = someArr[i];
        }
    }
}

let resultFiller = '';
if (resultArr.length === 0) {
    resultFiller = 'Простых чисел нет';
} else {
    resultFiller = resultArr.join(' ');
} */


//Задание 2



mainFiller.textContent = resultFiller;