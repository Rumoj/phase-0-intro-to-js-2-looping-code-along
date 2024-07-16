//Code your solution in this file

const writeCards= function(names,eventname){
    let newArray=[]
    for (let i=0 ; i<names.length ; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`)
    }
    return newArray

}
//writeCards(["Agnes","Munee","Staus"],"thank you")
console.log(writeCards(["Agnes","Munee","Staus"],"suprise"));

const countDown = function(n){
    while(n>=0){
        console.log(n--)
    }

}
countDown(10);5