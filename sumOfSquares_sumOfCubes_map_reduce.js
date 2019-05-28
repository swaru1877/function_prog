var square = (x) => x * x;     //returns square of a number

var cube = (x) => x * x * x;  //returns cube of a number

var add =(a,b) => a+b;


function sumOfSquares(arr)
{
  return arr.map(x =>square(x)).reduce((squareSum,x) => squareSum + x)
}
function sumOfCubes(arr)
{
  return arr.map(x =>cube(x)).reduce((cubeSum,x) => cubeSum + x)
}

console.log(`sum of Cubes of give array :: ${sumOfSquares([1,2,3])}`);
console.log(`sum of Squares of give array :: ${sumOfCubes([1,2,3])}`);