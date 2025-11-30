// Задание 6. Сгенерить массив из 8 чисел от 1 до 20 и отобразить их квадраты на графике

let someArr = Array.from({ length: 8 },
    () => Math.floor(Math.random() * 20) + 1);

let squaresArr = someArr.map(num => num * num);

mainFiller.textContent = `Исходные числа: ${someArr.join(" ")}`;

let showOriginal = true;

arrayText.addEventListener('click', function () {
    if (showOriginal) {
        mainFiller.textContent = `Квадраты чисел: ${squaresArr.join(" ")}`;
        updateChart(squaresArr, "Квадраты чисел", someArr);
    } else {
        mainFiller.textContent = `Исходные числа: ${someArr.join(" ")}`;
        updateChart(someArr, "Исходные числа");
    }
    showOriginal = !showOriginal;
});

const ctx = document.getElementById('chart').getContext('2d');
let myChart;

updateChart(someArr, "Исходные числа");

function updateChart(data, label, originalNums = null) {
    if (myChart) {
        myChart.destroy();
    }

    //для квадратов используем исходные числа как подписи по оси X (решение от ИИ)
    const labels = originalNums 
        ? originalNums.map(num => num.toString())
        : data.map((_, i) => `Число ${i + 1}`);

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
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
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Значения'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: originalNums ? 'Исходные числа' : 'Числа'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (originalNums) {
                                return `${context.parsed.y} (квадрат числа ${context.label})`;
                            }
                            return context.parsed.y;
                        }
                    }
                }
            }
        }
    });
}