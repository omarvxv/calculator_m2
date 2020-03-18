document.getElementById('calculate').addEventListener('click', getResult);

function getResult() {
    let deposit = Number(document.getElementById('deposit').value);
    let refill = Number(document.getElementById('refill').value);
    let percent = Number(document.getElementById('percent').value);
    let date = Number(document.getElementById('date').value);
    let errorBlock = document.getElementById('error');
    if (findError(deposit, refill, percent, date) != '') {
        let error = findError(deposit, refill, percent, date);
        console.log(error);
        errorBlock.innerText = error;
        errorBlock.style.display = 'block';
        delete error;
        return;
    }
    errorBlock.style.display = 'none';
    let month = Math.floor(date / 30);
    for (let i = 0; i < month; i++) {
        deposit = deposit + refill + deposit * percent / 100 / 12;
    }
    alert(deposit);
    console.log(deposit);
    return;
}

function findError(deposit, refill, percent, date) {
    let result = '';
    if (deposit < 0 || deposit == 0) {
        result += 'Поле: Начальная сумма вклада содержит ошибку ввода \n';
    }
    if (refill < 0 || refill == 0) {
        result += 'Поле: Сумма пополнения содержит ошибку ввода\n';
    }
    if (percent < 0 || percent > 100 || percent == 0) {
        result += 'Поле: Процент содержит ошибку ввода\n';
    }
    if (date < 0 || Math.trunc(date) != date || date == 0) {
        result += 'Поле: Срок содержит ошибку ввода';
    }
    return result;
}