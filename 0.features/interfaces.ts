interface Reportable {
  summary(): string;
}

const car = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Broken: ${this.broken}
    `;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `
      Color: ${this.color}
      Carbonated: ${this.carbonated}
      Sugar: ${this.sugar}
    `;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(car);
printSummary(drink);
