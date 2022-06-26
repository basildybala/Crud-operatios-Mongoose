// console.log("Start");

// // function newFunction(value1,value2,cb){
// //     cb(value1+value2)
// // }
// // function newFunction2(value1,value2,cb){
// //     cb(value1*value2)
// // }
// // function newFunction3(cb){
// //     cb(setTimeout(()=>{"cbb"},2000))
// // }

// // newFunction(10,20,(value)=>{
// //     console.log(value);
// //     newFunction2(value,value,(fvalue)=>{
// //         console.log(fvalue);
// //         newFunction3((fvalue)=>{
// //             console.log(fvalue);
    
// //         })

// //     })
// // })

// function myfunction(){
//     console.log("behind Function");
//     setTimeout(()=>{
//         console.log("FUNCTION ONLY")
//     },3000)
//     console.log("behind Function 1");
// }
// myfunction()

// function PP (){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("MIDDLE")
//     },3000)
// })}
// function PC (){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("PROMIS 10000")
//     },1000)
// })}

// PP().then(a=>console.log(a))
// PC().then(a=>console.log(a))

// // let call=async()=>{
// //     let data =await PP()
// //     console.log(data)
// // }
// // call()



// admin=true

// if (admin) {
//     console.log("admin");
// }
let array=[10,20,3,10,3,25,10]

let unique=[]
let length=array.length

for(let i=0;i<length;i++){
    if(unique.indexOf(array[i])===-1){
        unique.push(array[i])
    }
}

console.log(unique);