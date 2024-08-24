// Task 9:Define a class Account with private field for balance and a method to deposit and withdraw money . Ensure the balance can only be updated through these methods
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
class Account{
    balance;
    #privatebalance=0;
    get Balance(){
        return this.#privatebalance;
    }
    DepositMoney(money){
        this.#privatebalance+=money;
    }
    WithdrawMoney(money){
        this.#privatebalance-=money;
    }
}
const account1=new Account();
account1.balance=10;
console.log(account1.balance);
// account1.#privatebalance=10; //Syntax ERROR Private field '#privatebalance' must be declared in an  enclosing class
console.log(account1.Balance);
account1.DepositMoney(900);
console.log(account1.Balance);
account1.WithdrawMoney(100);
console.log(account1.Balance);
account1.WithdrawMoney(900);
console.log(account1.Balance);
account1.DepositMoney(900);
console.log(account1.Balance);




