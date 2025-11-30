//Задание 2. Сгенерить массив из 15 чисел от 1 до 200 и рассортировать его, выбрав первые 5 максимальных значений

let someArr = Array.from({ length: 15 },
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