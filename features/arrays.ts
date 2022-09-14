const carMakers: string[] = ["ford", "toyota", "tesla"];
const dates: Date[] = [];
dates.push(new Date());
const carsByMake: string[][] = [["f150"], ["corolla"], ["roadster"]];
const carMaker = carMakers[0];
const myFavCarMaker = carMakers.pop();
carMakers.map((car: string) => car);
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
