var square = (x) => x * x;     //returns square of a number

var cube = (x) => x * x * x;  //returns cube of a number

var add =(a,b) => a+b;

function sumOfSquares(arr){
  return arr.length==0 ?0 :add(square(arr[0]),sumOfSquares(arr.slice(1)));  
}


function sumOfCubes(arr){
  return arr.length==0 ?0 :add(cube(arr[0]),sumOfCubes(arr.slice(1)));
  
}

function sumOfPowers(arr,power,sumOfPowers){
  return arr.length==0 ?0 :add(power(arr[0]),sumOfPowers(arr.slice(1)))
  
}
console.log(`sum of Cubes of give array :: ${sumOfPowers([1,2,3],cube,sumOfCubes)}`);
console.log(`sum of Squares of give array :: ${sumOfPowers([1,2,3],square,sumOfSquares)}`);