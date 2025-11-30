// Задание 8. Сгенерить массив из 10 чисел от 1 до 50 и 
// в последнем столбце отобразить их сумму

let someArr = Array.from({ length: 10 },
    () => Math.floor(Math.random() * 50) + 1);

let sum = 0;
for (let i = 0; i < someArr.length; i++) {
    sum += someArr[i];
}

const chartData = [...someArr, sum];

mainFiller.textContent = `Числа: ${someArr.join(", ")} | Сумма: ${sum}`;

const ctx = document.getElementById('chart').getContext('2d');
let myChart;

updateChart(chartData, "Числа и их сумма");

function updateChart(data, label) {
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map((_, i) => i < data.length - 1 ? `Число ${i + 1}` : 'Сумма'),
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