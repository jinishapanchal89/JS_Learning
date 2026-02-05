
// 1. To find whether the candidate is eligible to vote or not

function eligibleForVote(age){
    if(age >= 18){
        console.log("The candidate is eligible to vote");
    }
    else  {
        console.log("The candidate is not eligible to vote");
    }
}

eligibleForVote(18);
eligibleForVote(40);
eligibleForVote(15);

console.log("-----------------------------------------------------------");

// 2. To find even and odd number

function evenOdd(num) {
    if (num % 2 == 0){
        console.log("The given number is an even number");
    }
    else{
        console.log("The given number is an odd number");
    }
}

evenOdd(0);
evenOdd(45);
evenOdd(64);

console.log("-----------------------------------------------------------");

// 3. To find the positive and negative number

function positiveNegative(number){
    if (number > 0){
        console.log("The given number is a positive number");
    }
    else if (number < 0){
        console.log("The given number is a negative number");
    }
    else{
        console.log("The given number is a neutral number");
    }
}

positiveNegative(0);
positiveNegative(-25);
positiveNegative(100);

console.log("-----------------------------------------------------------");

// 4. Nested if else:

function checkGrade(score){
    let grade;
    if (score >= 90){
        grade='A';
    }
    else if (score >= 80){
        grade='B';
    }
    else if (score >= 70){
        grade='C';
    }
    else if (score >= 60){
        grade='D';
    }
    else {
        grade='E';
    }
    console.log("Your grade is: ",grade);
}

checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(55);

console.log("-----------------------------------------------------------");
