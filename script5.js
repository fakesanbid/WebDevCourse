var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study javascript",
    "eat healthy"
];

for(var i = 0; i< todos.length; i++)
{
    todos[i] = todos[i] + "!";
}

console.log(todos);

// Important interview Question : 
// Guess output of :
for(var i = 0; i< todos.length; i++)
{
    todos.pop();
}
// Since todos.length decreases every iteration , last two items wont be popped

//Resetting Todos
todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study javascript",
    "eat healthy"
];

var counter = 0;
while(counter < 10){
    console.log(counter);
    counter++ ;
}

var counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;
}while (counterTwo > 0 )

//For Each Loop in ES5
todos.forEach(function (todo) {
    console.log(todo);
})

todos.forEach(function (todo, i){
    console.log(todo , i);
} 
);

//For Each Alt
function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(logTodos);

var todosIMPO = [
    "clean",
    "teeth",
    "exce",
    "javascript",
    "healthy"
];
todosIMPO.forEach(logTodos);