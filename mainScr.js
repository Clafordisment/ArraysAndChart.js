
//осн. константы для всех заданий
const mainFiller = document.querySelector(".filledFromScript");
const arrayText = document.getElementById("mainText");

//основные массивы
let resultArr = [];
let resultIndex = 0;


//Для быстрого раскоментирования: Alt + Shift + A

//В ходе выполнения заданий буду давать доп. оценку по сложностям от 1/10. Первая - логическая сложность (математика), вторая - практическая (построение алгоритма, структуры)

//Задание 1. Сгенерировать массив из случайных чисел от 1 до 100 и отфильтровать из них с помощью функции простые числа (Л8, П5)

/* let showOriginal = true; 

let someArr = Array.from({ length: 20 },
    () => Math.floor(Math.random() * 100) + 1);

mainFiller.textContent = someArr.join(" ");

arrayText.addEventListener('click', function() {
    if (resultArr.length === 0) {
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
    }

    if (showOriginal) {
        if (resultArr.length === 0) {
            mainFiller.textContent = "Простых чисел нет";
        } else {
            mainFiller.textContent = resultArr.join(" ");
        }
        updateChart(resultArr, "Простые числа");
    } else {
        mainFiller.textContent = someArr.join(" ");
        updateChart(someArr, "Исходный массив");
    }

    showOriginal = !showOriginal;
}); */








//Задание 2. Сгенерить массив из 15 чисел от 1 до 200 и рассортировать его, выбрав первые 5 максимальных значений (Л1, П4)

/* let someArr = Array.from({ length: 15 },
    () => Math.floor(Math.random() * 200) + 1);

mainFiller.textContent = someArr.join(" ");

let showOriginal = true;

arrayText.addEventListener('click', function () {
    let sortedArr = [...someArr].sort((a, b) => b - a);             //момент синтаксиса [...someArr] (оператор расширения) подсмотрел :)

    for (let i = 0; i < 5; i++) {           //топ-5 макс значений
        resultArr[i] = sortedArr[i];
    }

    if (showOriginal) {
        mainFiller.textContent = resultArr.join(" ");
        updateChart(resultArr, "Топ 5 максимальных чисел");
    } else {
        mainFiller.textContent = someArr.join(" ");
        updateChart(someArr, "Исходный массив");
    }

    showOriginal = !showOriginal;
}); */




//Задание 3. Сгенерить 12 чисел от 1 до 50 и на график вывести те, что будут совпадать с числами Фибоначчи (Л2, П3)
let someArr = Array.from({ length: 12  },
    () => Math.floor(Math.random() * 50) + 1);

let fiboArr = [1, 2, 3, 5, 8, 13, 21, 34]   //фибочисла, предоставленные в задании 

mainFiller.textContent = someArr.join(" ");

let showOriginal = true;

arrayText.addEventListener('click', function () {
      


    for (let i = 0; i < someArr.length; i++) {              
        for (let j = 0; j < fiboArr.length; j++)   
        {
            if (fiboArr[j] === someArr[i])
            {
                //при использовании этого метода заполнения массива в графике появлялись "пустоты" (undefinded)
                // resultArr[i] = someArr[i];    

                //я спросил у ИИ, как можно этого избежать и он предложил метод push   
                resultArr.push(someArr[i]);          
                break;
            }
        }
    }

    if (showOriginal) {
        if (resultArr.length === 0) {
            mainFiller.textContent = "В исходном массиве нет чисел Фибоначчи";
        } else {
            mainFiller.textContent = resultArr.join(" ");
        }
        updateChart(resultArr, "Числа Фибоначчи из исходного массива");
    } else {
        mainFiller.textContent = someArr.join(" ");
        updateChart(someArr, "Исходный массив");
    }

    showOriginal = !showOriginal;
});


//спавн и апдейт графика (для всех заданий, т.к. старался делать всё адаптивно)
const ctx = document.getElementById('chart').getContext('2d');
let myChart;

updateChart(someArr, "Исходный массив");

function updateChart(data, label) {
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map((_, i) => `Число ${i + 1}`),
            datasets: [{
                label: label,
                data: data,
                backgroundColor: data.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`),
                borderColor: 'rgba(126, 126, 126, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}