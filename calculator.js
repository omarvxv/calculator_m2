document.getElementById('calculate').addEventListener('click', getResult);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getResult();
    }
});
let errorBlock = document.getElementById('error');

function getResult() {
    let deposit = Number(document.getElementById('deposit').value);
    let refill = Number(document.getElementById('refill').value);
    let percent = Number(document.getElementById('percent').value);
    let date = Number(document.getElementById('date').value);
    if (findError(deposit, refill, percent, date)) {
        errorBlock.style.display = 'none';
        alert(calculateDeposit(deposit, refill, percent, date));
    }
}

function calculateDeposit(deposit, refill, percent, date) {
    // выводит сумму депозита при окончании срока
    let baseAmount = deposit;
    let month = Math.floor(date / 30);
    for (let i = 0; i < month; i++) {
        baseAmount = baseAmount + refill + baseAmount * percent / 100 / 12;
    }
    return Number(baseAmount.toFixed(2));
}

function findError(deposit, refill, percent, date) {
    // находит ошибки входных данных пользователем
    let result = '';
    if (deposit <= 0) {
        result += 'Поле: Начальная сумма вклада содержит ошибку ввода \n';
    }
    if (refill <= 0) {
        result += 'Поле: Сумма пополнения содержит ошибку ввода\n';
    }
    if (percent <= 0 || percent > 100) {
        result += 'Поле: Процент содержит ошибку ввода\n';
    }
    if (date <= 0 || Math.trunc(date) != date) {
        result += 'Поле: Срок содержит ошибку ввода';
    }
    if (result != '') {
        console.log(result);
        errorBlock.style.display = 'block';
        errorBlock.innerText = result;
        return NaN;
    } else {
        return true;
    }
}