var database = [
    {
        username : "anrei",
        password : "lol"
    },
    {
        username : "sally",
        password : "123"
    },
    {
        username : "ingrid",
        password : "777"
    }
];

var newsFeed = [
    {
        username : "Bobby",
        timeline : "Tired"
    },
    {
        username : "Sally",
        timeline : "Happy"
    }
];

var userNamePrompt = prompt("What's Your Username ?");
var passwordPrompt = prompt("What's Your Password ?");
// var flag = 0;
// function signIn(user, pass) {
//     for(var i = 0; i<database.length; i++)
//     {
//         if(user === database[i].username && pass === database[i].password)
//         {
//             console.log(newsFeed);
//             flag = 1;
//         }
//     } 
//     if(flag === 0){
//         alert("Sorry, Wrong Username and Password")
//     } 
// }

// Better Way :

function isUserValid(user,pass)
{
    for(var i = 0; i<database.length; i++)
    {
        if(user === database[i].username && pass === database[i].password)
        {
           return true;
        }
    } 
    return false;
}
function signIn(user, pass) {
    if(isUserValid(user,pass))
        console.log(newsFeed);
    else
    alert("Sorry, Wrong Username and Password");
}

signIn(userNamePrompt, passwordPrompt)