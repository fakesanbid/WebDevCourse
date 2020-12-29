var database = [
    {
        username : "anrei",
        password : "lol"
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
alert("WTf");
var userNamePrompt = prompt("What's Your Username ?");
var passwordPrompt = prompt("What's Your Password ?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password)
    {
        console.log(newsFeed);
    }
    else{
        alert("Sorry, Wrong Username and Password")
    }
}

signIn(userNamePrompt, passwordPrompt)