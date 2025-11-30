//Задание 3. Сгенерить 12 чисел от 1 до 50 и на график вывести те, что будут совпадать с числами Фибоначчи
let someArr = Array.from({ length: 12  },
    () => Math.floor(Math.random() * 50) + 1);

let fiboArr = [1, 2, 3, 5, 8, 13, 21, 34];   //фибочисла, предоставленные в задании 

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
        resultArr = []; //предотвращение повторного заполнения
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