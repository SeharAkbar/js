
// function subtractToNumber(number1,number2){
// let result=number1-number2;
// return result;
// }
// const getValue=subtractToNumber(16,5);
    // console.log(getValue);
// function modeTonumber(x,y){
//     let result=x/y;
//     return result;
// }
// const getValue=modeTonumber(23,33);
// // console.log(getValue);
// function multiplyTonumber(x,y){
//     let result=x*y;
//     return result;
// }
// const getValue=multiplyTonumber(23,33);
// console.log(getValue);
const arthemeticOperators = (x,y,operator) => {
    const operators = {
        '+':x+y,
        '-':x-y,
        '*':x*y,
        '%':x%y,
    };
    return operators[operator]||'please pass arthemetic operator';
};
const result = arthemeticOperators(12,3,'+')
console.log(result)