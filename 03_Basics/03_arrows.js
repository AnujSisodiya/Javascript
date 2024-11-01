const user = {
    username : "Anuj",
    price : 999,


welcomeMessage: function(){
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
}

}

// user.welcomeMessage()
// // user.username = "RAJ"
// // user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Anuj"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "Anuj"
//     console.log(this.username);
// }

const chai = () => {       // Arrow function
    let username = "ANUJ"
    console.log(this.username);
}

chai ()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1+num2)     // Implict Return Arrow function

const addTwo = (num1, num2)  => ({username : "Anuj"})    // To return the object the oject must be wrapped around the parenthesis 

console.log( addTwo (2,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()