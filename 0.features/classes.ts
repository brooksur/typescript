class Vehicle {
  constructor(public name: string, public color: string) {}

  public turnOn(): void {
    console.log(`The ${this.color} ${this.name} is on!`);
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("tractor", "red");
vehicle.turnOn();

class Car extends Vehicle {
  public wheels = 4;

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.turnOn();
    this.drive();
    this.honk();
  }
}

const car = new Car("tesla", "blue");
car.startDrivingProcess();
