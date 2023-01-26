const tall = [
    69,  0, -26, -71, -56,  44,  3,
   -74, 79,  31, -23, -58,  74, 89,
    69, 21,  95,  50, -37, 100
 ]


for (let i = 0; i < 20; i++) {
    nyttTall = Math.floor((Math.random()*201))-100
    tall[i] = nyttTall
    //tall.push(nyttTall)
}

let sum=0
for (let i=0; i<tall.length; i++){
    sum +=tall[i]
}

let min=tall[0]
for (let i = 1; i<tall.length; i++) {
    if (tall[i] < min){
        min = tall[i]
    }
}

let max=tall[0]
for (let i = 1; i<tall.length; i++) {
    if (tall[i] > max){
        max = tall[i]
    }
}

let found = false
let toFind = 35
let i=0
while (!found && i<tall.length ){
    found = (tall[i] === toFind)
    i++;
}


console.log(tall)