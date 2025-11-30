//Задание 1. Сгенерировать массив из случайных чисел от 1 до 100 и отфильтровать из них с помощью функции простые числа

let showOriginal = true; 

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
}); 

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