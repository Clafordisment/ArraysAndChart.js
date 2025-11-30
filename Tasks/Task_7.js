// Задание 7. Сгенерить массив из 12 чисел от 1 до 100 и дать пользователю ввести число. 
// На графике отобразить те числа, которые кратны введённому


let someArr = Array.from({ length: 12 },
    () => Math.floor(Math.random() * 100) + 1);

const ctx = document.getElementById('chart').getContext('2d');
let myChart;


mainFiller.innerHTML = `
    <p class="filledFromScript">Исходный массив: ${someArr.join(", ")}</p>
    <div>
        <input class="input-zone" type="number" placeholder="Введите делитель" min="1" max="100">
        <button class="button">Показать кратные числа</button>
    </div>
`;

const divisorInput = document.querySelector('.input-zone');
const filterBtn = document.querySelector('.button');

updateChart(someArr, "Исходный массив");

filterBtn.addEventListener('click', function() {
    const divisor = parseInt(divisorInput.value);
    
    if (!divisor || divisor < 1) {
        mainFiller.querySelector('p').textContent = "Введите корректный делитель (от 1 до 100)";
        return;
    }

    const multiples = someArr.filter(num => num % divisor === 0);
    
    if (multiples.length === 0) {
        mainFiller.querySelector('p').textContent = 
            `В массиве нет чисел, кратных ${divisor}`;
        if (myChart) {
            myChart.destroy();
            myChart = null;
        }
    } else {
        mainFiller.querySelector('p').textContent = 
            `Числа, кратные ${divisor}: ${multiples.join(", ")}`;
        updateChart(multiples, `Числа, кратные ${divisor}`);
    }
});


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