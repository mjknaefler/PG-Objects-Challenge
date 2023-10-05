let bankAccounts = {
    accountNumber: 111,
    balance: 10000,
    accountType: 'Savings',
    deposit: function(amount){
        bankAccounts.balance+=amount;
    },
    withdraw: function(amount){
        bankAccounts.balance-=amount;
    },
    //Question for evaluation: How would you create a transfer function that would allow you to transfer money from one bankAccounts object to another? Also is it possible to create more than 1 bankAccounts object?
    transfer: function(bankAccounts, amount){
        this.balance -= amount;
        bankAccounts.balance += amount;
    }
}
console.log(bankAccounts)
let bank = bankAccounts;
let bank2 = bankAccounts;
console.log(bank)
console.log(bank2)
bank.transfer(bank2,500)
console.log(bank)
console.log(bank2)
