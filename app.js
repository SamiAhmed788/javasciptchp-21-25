
// question no 1
// let firstname = prompt('input your first name')

// let lastname = prompt('input your lastname name')

// let fullname = firstname+lastname

// alert(fullname)

// question no 2
// let favmobile = prompt(`enter your fav mobile model`)

// document.write(`my fav mobile  model name is ${favmobile} <br> and my phone length is ${favmobile.length}`)

// question no 3

// let countryname = "pakistani"

// let fineindex = countryname.indexOf(`n`)
// console.log(fineindex);

//////////////
// question no 4

// let hello = "hello world"

// let call = hello.lastIndexOf(`l`)
// console.log(call);

// question no 5
// let country = "pakistani"

// let fineindex = country.charAt(`3`)
// console.log(fineindex);

// or
// both are correct 
// let country = "pakistani"

// let fineindex = country[3]
// console.log(fineindex);

// let firstname = prompt('input your first name')

// let lastname = prompt('input your lastname name')

// let fullname = firstname.concat(" "  + lastname)

// alert(`fullname is ${fullname}`)

// question mo 7

// let citytname = `hyderabad`

// let  change = citytname.replace(`hyder`, `islam`)

// console.log(change);

// question 8 

// let massage =  "Ali and Sami are best friends.and They play cricket and football together"

// let changing = massage.replace(/and/g, "&")

// console.log(changing)

// question no 0
// let number = "472"
// let chg =parseInt (number)

// console.log(typeof number);
// console.log(typeof chg);

// question no 10

// let massage =  prompt(`your nice name`)
// let capital = massage.toUpperCase()

// console.log(capital)


// question no 11

// let name =  "sami"
// let titlecase =  name.slice(0,1,).toUpperCase()

// let lowercase = name.slice(1,4).toLowerCase()

// console.log(titlecase+lowercase)

// question no 12
// let number = "560.77"
// let chg =parseInt (number)
// let remove = number.replace(/./g , "" )
// console.log(remove);
// question no 13
// var userName = prompt("input you name ")
// var sign = /[^a-zA-Z0-9 ]/gi;
// if (sign.test (userName)) {
//   alert('please enter a valid user name')
    
// }
// else{
//     console.log(`username is ${userName}`)
// };

// question no 14


// var fruits = ["apple " ,"mango","orange" ,"orange"]
// 
// var kyachiya = prompt(`kya fruit lana pasand karay gay`)

// for (let i = 0; i < fruits.length; i++) {
//      if (kyachiya===fruits[i]) {
//         console.log('g avialable hai');
//      }
// }

// q no 15
// let password = prompt("Enter a password:");

// function validatePassword(password) {

//   if (password.length < 6) {
//     return false;
//   }
//   if (password[0] >= "0" && password[0] <= "9") {
//     return false;
//   }
  
//   let hasAlpha = false;
//   let hasNum = false;
//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];
  
//     if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
//       hasAlpha = true;
//     }
//     if (char >= "0" && char <= "9") {
//       hasNum = true;
//     }
//   }

//   return hasAlpha && hasNum;
// }
// let result = validatePassword(password);
// if (result) {
//   alert("Valid password");
// } else {
//   alert("wrong password Please try again.");
// }
// q no 16 
// var uni = "university of karachi"
// var spliting = uni.split("")

// console.log(spliting)
