//const user : (string | number)[] = ['sm',3]

let tupleExample: [string, number, boolean];

tupleExample = ["hc", 123, true];

type rgbNumber = [number, number, number];

const redRgbNumber: rgbNumber = [255, 0, 0];
const greenRgbNumber: rgbNumber = [0, 255, 0];
const blueRgbNumber: rgbNumber = [0, 0, 255];

// redRgbNumber.push(true)

// Tuple can let you to push items in it
// thus we have to be careful of using tuple because of stack overflow
