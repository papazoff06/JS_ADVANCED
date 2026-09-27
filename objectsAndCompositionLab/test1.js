// function createRect(width, height) {
// const rect = { width, height };
// rect.getArea = () => {
// return rect.width * rect.height;
// };
//  console.log(rect.getArea());
// }

// createRect(6, 4)


// //-----------------------------------

// function canPrint(device) {
// device.print = () => {
// console.log(`${device.name} is printing a page`);
// }
// }
// const printer = { name: 'ACME Printer' };
// canPrint(printer);
// printer.print();

let a = ['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']
let b = JSON.parse(a)
let [c, d] = b
let keys = Object.keys(c)
console.log(d)
