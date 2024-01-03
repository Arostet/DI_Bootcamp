function getX() {
  console.log("start");
  let x = 10;
  try {
    y;
  } catch (error) {
    console.log(error);
  }
  console.log("end");
  return x;
}

let result = getX();
console.log(result);

function findElement(arr, index) {
  try {
    if (index < 0 || index >= arr.length)
      throw new Error("Index is out of range or invalid");
  } catch (error) {
    return error.message;
  }
}
const myArray = [10, 20, 30, 40, 50];
console.log(findElement(myArray, 300));
console.log(findElement(myArray, 2));

/* Birthday Cake Candles
 *  This array are Birthday Cake Candles
 *  You can blow only the tallest candles
 *  let ar = [2,4,4,1]
 *  birthdayCakeCandles function will return
 *  how many candles you can blow
 */

let ar = [2, 4, 4, 1];

let tallest = Math.max(...ar);
console.log(tallest);
let count = 0;

ar.forEach((num) => {
  num === tallest && count++;
  console.log(count);
});
