//4 задание. Сгенерить массив из 18 чисел от -50 до 50 и, с помощью полей ввода, дать пользователю ввести свой диапазон. 
//На график вывести только те числа, которые попадают в этот диапазон 

const mainFrame = document.getElementById("mainText") //для иннера

let someArr = Array.from({ length: 18 },
    () => Math.floor(Math.random() * 101) - 50);

mainFiller.innerHTML = `
    <p class="filledFromScript">Загадан диапазон. Введите свой диапазон от -150 до 150</p>
    <div>
        <input class="input-zone" type="number" min="-150" max="150" placeholder="Введите начало диапазона">
    </div>
    <div>
        <input class="input-zone" type="number" min="-150" max="150" placeholder="Введите конец диапазона">
    </div>
    <button class="button">Проверить</button>
`;

const inputValid = document.querySelectorAll('.input-zone'); //для проверки ввода диапазона
const resultBtn = document.querySelector(".button") //для ивента с кнопкой (осн логика)

inputValid.forEach(input => {   //позднее додумался сделать цикл для всех полей
    input.addEventListener('blur', function () {
        // обработчик события, который проверяет максимально введённый диапазон. 
        // Blur устанавливает значение в поле ввода после того, как пользователь 
        // вышел из его фокуса

        const value = parseInt(this.value);
        if (value < -150) {
            this.value = -150;
        } else if (value > 150) {
            this.value = 150;
        }
    });
});

resultBtn.addEventListener('click', function () {

    const startRange = parseInt(inputValid[0].value);
    const endRange = parseInt(inputValid[1].value);

    const detectedNums = someArr.filter(num => num >= startRange && num <= endRange).sort((a, b) => a - b);
    mainFiller.innerHTML = `<p class="filledFromScript" id = "mainText"> </p>`

    if (detectedNums.length !== 0) {
        mainFiller.textContent = "Числа, попавшие в диапазон: " + detectedNums.join(" ")
        const ctx = document.getElementById('chart').getContext('2d');
        let myChart;

        updateChart(detectedNums, "Попавшие в диапазон числа:");

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
    }
    else {
        mainFiller.textContent = "Вы не попали в указанный диапазон"
    }



});
