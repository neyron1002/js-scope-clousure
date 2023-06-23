function moneyBox (userName){
    let saveMoney = 0;
    let add = (addMoney) => saveMoney += addMoney;
    let currentBalance = () => console.log(`${userName} tiene ahorrados $${saveMoney}`);

    return {
        add,
        currentBalance,
    }
}

const jmMoneyBox = moneyBox('Juan');
const msMoneyBox = moneyBox('Sofia');

jmMoneyBox.add(1000)
msMoneyBox.add(500)

jmMoneyBox.add(600)
msMoneyBox.add(10000)

jmMoneyBox.currentBalance();
msMoneyBox.currentBalance();
