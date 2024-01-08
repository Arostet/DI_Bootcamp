export const personArr = [
  {
    name: "John",
    age: 20,
    location: "Seattle",
  },
  {
    name: "Sarah",
    age: 30,
    location: "Norway",
  },
  {
    name: "Terry",
    age: 43,
    location: "New Brunswick",
  },
  {
    name: "Matt",
    age: 53,
    location: "Puerto Rico",
  },
];

export const getAvgAge = () => {
  let totalYears = 0;
  personArr.forEach((person) => {
    totalYears += person.age;
  });
  const avgAge = totalYears / personArr.length;
  return avgAge;
};
console.log(getAvgAge());
