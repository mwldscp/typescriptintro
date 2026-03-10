function sum (arr: number[]):number{
const sum = arr.reduce ((acc, value)=>{
 return acc + value
}, 0)

return sum
}

console.log(sum([2, 3, 10]))


type Gender = 'male' | 'female';
let gender: Gender;
gender = 'male';
gender = 'female';


function checkLength (value: string): number{
    return value.length
}
console.log(checkLength('word'))