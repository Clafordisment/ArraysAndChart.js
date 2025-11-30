//5 задание. Сгенерить числа от 1 до 100 и распределить их на чётные и нечётные списки. 
//Так же вывести их в два блока на одной странице

//т.к. весь html стандартизированный, то при открытии страницы все графики и контейнеры находятся внизу страницы

const mainFrame = document.getElementById("mainText") //для иннера

let someArr = Array.from({ length: 10 },
    () => Math.floor(Math.random() * 100) + 1);

const ctx = document.getElementById('chart').getContext('2d');
let myChart;


const evenNumbers = someArr.filter(num => num % 2 === 0).sort((a, b) => a - b);
const oddNumbers = someArr.filter(num => num % 2 !== 0).sort((a, b) => a - b);

mainFiller.innerHTML = `
    <div>
        <div class="container">
            <p class="filledFromScript">Чётные числа (${evenNumbers.length}):</p>
            <p class="filledFromScript">${evenNumbers.join(", ") || "Нет чётных чисел"}</p>
        </div>
        <div class="container">
            <p class="filledFromScript">Нечётные числа (${oddNumbers.length}):</p>
            <p class="filledFromScript">${oddNumbers.join(", ") || "Нет нечётных чисел"}</p>
        </div>
    </div>
    <button class="button">Показать графики</button>
`;

isEventUsed = false;

document.querySelector('.button').addEventListener('click', function () {
    const chartsContainer = document.createElement('div');
    if (!isEventUsed) {

        if (evenNumbers.length > 0) {
            const evenChartCanvas = document.createElement('canvas');
            chartsContainer.appendChild(evenChartCanvas);
            const evenChart = evenChartCanvas.getContext('2d');
            createChart(evenChart, evenNumbers, 'Чётные числа', 'rgba(54, 162, 235, 0.7)');
        }

        if (oddNumbers.length > 0) {
            const oddChartCanvas = document.createElement('canvas');
            chartsContainer.appendChild(oddChartCanvas);

            const oddChart = oddChartCanvas.getContext('2d');
            createChart(oddChart, oddNumbers, 'Нечётные числа', 'rgba(255, 99, 132, 0.7)');
        }
    }
    mainFiller.appendChild(chartsContainer);
    isEventUsed = true;
});

function createChart(ctx, data, label, backgroundColor) {

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map((_, i) => `Число ${i + 1}`),
            datasets: [{
                label: label,
                data: data,
                backgroundColor: backgroundColor,
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



