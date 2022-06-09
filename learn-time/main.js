function add(a,b){
    function myadd(){
        let c=a+b
        return c
    }
    return myadd()

}
 
function main(){
    const res= add(3,4);
    console.log(res);
}
main()


var a=[1,2,3,4]
var b=[5,6,7,8]


var c={...a,...b}

console.log(c);