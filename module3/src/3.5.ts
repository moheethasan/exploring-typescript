{
  //access modifier
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance += amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const amrAccount = new BankAccount(1, "ami", 200);
  amrAccount.addDeposit(50);
  const balance = amrAccount.getBalance();
  console.log(balance);

  class StudentAccount extends BankAccount {
    emni() {
      this._balance;
    }
  }
}
