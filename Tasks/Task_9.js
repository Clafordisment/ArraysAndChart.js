// Задание 9: Сгенерить массив из 15 чисел от 1 до 200 и отобразить на графике двузначные числа 
// (сделал оторбажение по нажатию на текст по аналогии как в предыдущих заданиях)

let someArr = Array.from({ length: 15 },
    () => Math.floor(Math.random() * 200) + 1);

mainFiller.textContent = someArr.join(" ");

let showOriginal = true;

arrayText.addEventListener('click', function () {
    let twoDigitNumbers = [];
    for (let i = 0; i < someArr.length; i++) {
        if (someArr[i] >= 10 && someArr[i] <= 99) {
            twoDigitNumbers.push(someArr[i]);
        }
    }

    if (showOriginal) {
        if (twoDigitNumbers.length === 0) {
            mainFiller.textContent = "В массиве нет двузначных чисел";
            if (myChart) {
                myChart.destroy();
                myChart = null;
            }
        } else {
            mainFiller.textContent = "Двузначные числа: " + twoDigitNumbers.join(" ");
            updateChart(twoDigitNumbers, "Двузначные числа");
        }
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