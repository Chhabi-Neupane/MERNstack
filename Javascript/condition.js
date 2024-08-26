/**
 
conditgion operator in js (ternery)
syntaxt:
conditon ? "body of truth" : "body of false"


 */
// var n = 12
// n > 0 
// ? console.log(n, 'is positive number') 
// : console. log(n, 'is negative number')

// // even numbrer
// n % 2 == 0
// ? console.log(n + "even number")
// : console.log(n + "odd number")

// odd number

// var n = 12
// n > 0 
// n % 2 != 0
// ? console.log(n + " odd number")
// : console.log(n + " even number")



// num =23
// divide by 3 and 7
// divisible by both 3 and 7
//not divisible by both 3 and 7
//divisible by 3 not divisible by 7
//divisible by 7 not divisible by 3

var num = 9;
var n1 = 3;
var n2 = 7;

(num % n1 == 0 && num % n2 == 0)
    ? console.log("divisible by both 3 and 7")

    : (num % n1 == 0 || num % n2 == 0)
        ? num % n1 == 0
            ? console.log("divisible by ", 3, 'not divisible by', 7)
            : console.log("divisible by ", 7, 'not divisible by', 3)
        : console.log("not divisible by both", n1, "and ", n2)



        // home Worker

        /*


        */
       var reg_username ="ram"
       var reg_passwor ="1234"
       var logedIN_username ="ram"
       var loggedIn_password ="1234"

       //logged in successfully if both matched
       //both invalid
       //invalid username(valid password)
       //invalid password(valid username)


