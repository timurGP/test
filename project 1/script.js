let money = prompt("Ваш бюджет на месяц?");
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    bigMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let a1 = 'Введите обязательную статью расходов в этом месяце';
let a2 = 'Во сколько обойдется?';
let a3 = 'Введите обязательную статью расходов в этом месяце';
let a4 = 'Во сколько обойдется?';

appData.expenses[a1] = a3;
appData.expenses[a2] = a4;

alert(appData.bigMoney / 30); 