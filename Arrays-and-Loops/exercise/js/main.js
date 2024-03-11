/* Create array: const nums = [10, 20, 30], modify last value to 99 */
const nums = [10, 20, 30];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}

nums[nums.length - 1] = 99;

console.log(nums[nums.length -1]);

/* Create a function getLastValue(array) that takes an array and returns the last value in the array. Index start at 0 so the last index is the number value in the array minus 1 (lastIndex = array.lenght - 1)
- getLastValue ([1, 20, 22, 24, 5]) => 5
- getLastValue (['hi', 'hello', 'good']) */
function getLastValue(array) {
    const lastIndex = array.length -1;
    return array[lastIndex];
}

console.log(getLastValue(["hi", "hello", "good"]));
console.log(getLastValue([1, 20, 22, 24, 5]));

/* Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).
- arraySwap([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 1]
- arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi'] */
function arraySwap(array) {
    const lastIndex = array.length - 1;
    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

/* Create a for loop that counts up from 0 to 10, but counts up by 2 (0, 2, 4, ..., 8, 10) */
for (i = 0; i <= 10; i+=2) {
    console.log(i);
}

/* Create a for loop that counts down from 5 to 0 */
for (i = 5; i >= 0; i--) {
    console.log(i);
}

/* Do exercise for loop using while loops */
let i = 0;

while (i <= 10) {
    console.log(i);
    i += 2;
}

let j = 5;

while (j >= 0) {
    console.log(j);
    j--;
}

/* Create a loop that takes an array of numbers and creates a new array where each number is increased by 1
- [1, 2, 3] => [2, 3, 4] */
let arr = [1, 2, 3];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1);
}

console.log(newArr);

/* Create function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1
- addOne([1, 2,3]) => [2, 3, 4]
- addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100] */
function addOne(array) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1);
    }

    return result;
}

console.log(addOne([1, 2,3]));
console.log(addOne([-2, -1, 0, 99]));

/* Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'
- addNum([1, 2, 3], 2) => [3, 4, 5]
- addNum([1, 2, 3], 3) => [4, 5, 6]
- addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101] */
function addNum(array, num) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }
    return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

/* Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
- addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]
- addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9] */
function addArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

/* Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
- countPositive([1, -3, 5]) => 2
- countPositive([-2, 3 -5, 7, 10]) */
function countPositive(nums) {
    let result = 0;

    for (let i = 0;  i < nums.length; i++) {
        if (nums[i] > 0) {
            result++;
        }
    }
    return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

