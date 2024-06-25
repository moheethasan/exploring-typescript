{
  //getter and setter
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }

    // getBalance() {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance += amount;
    }
  }

  const amrAccount = new BankAccount(1, "ami", 250);
  //   amrAccount.addDeposit(50); //a function is called
  //   const balance = amrAccount.getBalance(); //a function is called

  amrAccount.deposit = 150; //used like property by setter
  const myBalance = amrAccount.balance; //used like property by getter
  //   console.log(myBalance);
}
