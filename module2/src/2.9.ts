{
  //conditional type
  type a1 = number;
  type b1 = string;
  type c1 = a1 extends null ? true : false; //conditional type
  type d1 = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    car: string;
    bike: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasCar = CheckVehicle<"car">;
}
