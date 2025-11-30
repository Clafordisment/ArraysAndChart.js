//Задание 10: сгенерить 2 массива и отобразить их на двух графиках, 
//используя разные цвета

let firstArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
let secondArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);

mainFiller.textContent = "Первый массив: " + firstArr.join(" ") + "\n" +
                         "Второй массив: " + secondArr.join(" ");
const ctx = document.getElementById('chart').getContext('2d');
let myChart;

updateChart(firstArr, secondArr);

function updateChart(data1, data2) {
    if (myChart) {
        myChart.destroy();
    }

    // Работу с чартом изучил с помощью ИИ

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data1.map((_, i) => `Элемент ${i + 1}`),
            datasets: [
                {
                    label: 'Первый массив',
                    data: data1,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Второй массив',
                    data: data2,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e0e0e0'
                    }
                }
            }
        }
    });
}