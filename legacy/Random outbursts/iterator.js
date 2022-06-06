function myJam(){
    let n = 0;
    return{
        next : function(){
            n+= 10;
            return{
                value:n,
                done:false
            };
        }
    }
}
let j = myJam();
j.next();
