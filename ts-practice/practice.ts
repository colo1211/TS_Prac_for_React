const message: string = 'message';
console.log(message);

const strArray: string[] = ['test', 'hi', 'ririri'];
console.log(strArray);

const testNumberArray: number[] = [1, 2, 3];
console.log(testNumberArray);

const done: boolean = true;

testNumberArray.push(2);

let mayBeUndefined: string | undefined = undefined;
mayBeUndefined = 'my';

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'red';
console.log(color);

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total); 