// function myFunction(x,y){
//     if(y === undefined){
//         y = 5;
//     }
//     return x * y; 
// }
// console.log(myFunction(5));

// function myFunction2(x, y=10){
//     return x*y
// }
// console.log(myFunction2(2))

// function themax(){
//     let max = -Infinity;
//     for(let i =0; i<arguments.length;i++){
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//         return max
//     }
// }
// console.log(themax(222,2,121,111))

// Before going through the loop, your function accepts the first array element's value as a "starting"(initial) maximum. That value is 2.
// On every loop iteration, each array value is compared with initial "maximum".
// If the current value is bigger than previous maximum value - that current value overrides it and becomes the maximum.

// var arr = [4,12,3,80,0,22,56];
// var max = Math.max.apply(null, arr);
// console.log(max); // 80 

//This is way better approach!

function sumAll(){
    let sum = 0;
    for(let i = 0;i<arguments.length;i++){
    sum += arguments[i];
} 
    return sum;
}
console.log(sumAll(222,11,12))