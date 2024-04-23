// Hello Admin: Make a array of five  or more usernames,including the name 'admin' Imagine you are writting
// code that will print a greeting to each user after they log in to a website. Loop through the array, and print
//a greeting to each user:

//(a) If the Username is 'admin', print a special greeting, such as Hello admin,wolud you like to see a status report?

//(b) Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again

let users : string [] = ["admin", "eric", "haseeb", "ali", "fatima"]

for (let user of users) {
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${user}, thank you for loggin in again `)
    }
}

// task 31

//  No User: Add an if test to Exercise 28 to make sure the list of users is not empty
// (a) if the list is empty, print the message We need to find some users!
// (b) Remove all of the usernames from your array, and make sure the correct message is printed.

let users : string [] = ["admin", "eric", "haseeb", "ali", "fatima"]

if (users.length === 0){
    console.log("we need to find some users!")
}else{
    for(let user of users)
        if(user === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${user}, thank you for loggin in again `)
        }
}
users = []
if (users.length === 0){
    console.log("we need to find some new users!")
}

// task 32 

// Checking Usernames: Do the following to creat a program that simulates how websites ensure that 
// everyone has a unique username.

// (a) Make a list of five or more usernames called current_users.
// (b) Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
// also in the current_users list.
// (c) Loop through the new_users list to see if each new username has already been used.if it has,print a
//  message that the person will need to enter a new username.if a username has not been used,print a message saying
//  that the username is available.
//  (d) Make sure your comparison is case insensitve. if'John' has been used,'JOHN' should not be accepted.

let current_users: string[] = ["admin", "Eric", "Ali", "Fatima","hamza"]
let new_users: string[] = ["admin", "hamza","Aliza","Haseeb","Noor"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleUpperCase())

for (let new_user of new_users){
    if(current_users_lower.includes(new_user.toLocaleLowerCase())){
        console.log(`sorry ${new_user}, that name is taken`)
    }else{
        console.log(`yes ${new_user}, is still in avaiable list`)
    }
}
