// learning functions
// normal
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// arrow
const addArrow = (num1: number, num2: number): number => num1 + num2;

// method
const poorUser = {
  name: "mh",
  balance: 0,
  addBalance(balance: number): string {
    return `my new balance is ${this.balance + balance}`;
    // function in object is called method
  },
};

// callback function
const arr: number[] = [1, 2, 3];
const squaredArr: number[] = arr.map(
  (element: number): number => element * element
);
