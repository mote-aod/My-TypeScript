//Encapsulation

class BankAccount {
    public accountNumber: number
    private _balance: number

    constructor(arg_accountNumber: number, agr_balanace: number) {
        this.accountNumber = arg_accountNumber
        this._balance = agr_balanace
    }

    getBalance(): number {
        return this._balance
    }
    
    deposit(arg_amount: number): void {
        if (arg_amount > 0) {
            this._balance += arg_amount
        }
    }
}
const account = new BankAccount(123456, 900)
console.log(account.getBalance()) // 900
account.deposit(100)
console.log(account.getBalance()) //1000