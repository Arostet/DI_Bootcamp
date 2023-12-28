const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

//This would be for all Hondas
let honda = inventory.forEach((car) => {
  car.car_make === "Honda" &&
    console.log(
      `This is a ${car.car_make} ${car.car_model} from ${car.car_year}`
    );
});
//Only the first
const firstHonda = inventory.find((car) => car.car_make === "Honda");

console.log(
  `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`
);

//Part II
function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((a, b) => a.car_year - b.car_year);
}

const sortedInventory = sortCarInventoryByYear(inventory);
console.log(sortedInventory);
