let k=prompt("digite um numero")
let array=[1,1]

for(let i=2;i<Number(k);i++){
    array[i]=array[(i-1)]+array[(i-2)]

}
console.log(array[k-1])