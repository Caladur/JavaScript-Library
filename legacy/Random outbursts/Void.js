void function test(){
    console.log("fuck!");
}();
try{
    test();
}catch(e){
    console.log(e);
}

let test2 = void(0);
console.log(test2);

void 2 == `2`;
void (2==`2`);