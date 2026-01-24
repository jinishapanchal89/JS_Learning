
/* break - It is used to terminate a loop (for, while, do-while) or a switch statement immediately,
           transferring control to the next statement following the terminated block */

let i=5;
while(i<=30){
    console.log(i);
    if(i % 5 == 0){
        console.log("Hi -- Bye");
        break;
    }
    i++;
}

console.log("------------------------------------");

// for...of loop for arrays

const browser = ["Firefox", "IE", "Edge", "Safari", "Chrome"];
for( const e of browser){
    if (e == "Edge"){
        console.log("Launch Edge");
        break;
    }
}

console.log("------------------------------------");

