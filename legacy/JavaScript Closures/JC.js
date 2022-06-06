// let counter = 0;
// function add(){
//     counter += 1;
// }
// add();
// add();
// add();
// console.log(counter)

// let counter = 0;
// function add(){
//     let counter = 0;
//     counter += 1;
// }
// add();
// add();
// add();
// console.log(counter)

// function add(){
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// add();
// add();
// add();
// console.log(counter)

// function add(){
//     let counter = 0;
//     function plus(){counter += 1}
//     plus();
//     return counter;
// }
// plus();
// console.log(add())

const add = (function(){
    let counter = 0;
    return function() {counter +=1; return counter}
})();

add();
add();
add();
console.log(add())