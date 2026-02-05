
// for loop > initialization, condition and increment/decrement in same line

for(let i=0; i<=10; i++){
    console.log("The number is: ",i);
}

console.log("-----------------------------------------");


// for...of loop for array

const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log("-----------------------------------------");

// print array by index number

const array1 = [1,2,3,4,5,6,7,8];
for(let j=0; j<array1.length; j++){
    console.log("The number is: ",array1[j]);
}

console.log("-----------------------------------------");

// for...in loop for objects

const user = {
    name: "Jinisha Kapadia",
    age: 29,
    city: "Vadodara"
}
 for (const key in user){
    console.log(key +" : "+user[key]);
    if(user[key] == "Jinisha Kapadia") {
        console.log("test");
    }
 }

 console.log("-----------------------------------------");

 const car = ["BMW", "Ford", "Mercedes", "Range Rover"];
 for (let i=0; i<car.length; i++){
    console.log(car[i]);
 }