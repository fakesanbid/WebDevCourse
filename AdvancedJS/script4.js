// Reference type -----------------------------------------------------------------------------------------------------------------------------


// IN CONSOLE :
[] === [] // OP - false [Beacuse Arrays are objects, each declaration references to a new objecf]
[1] === [1] // OP - false
// IN EDITOR : 
var object1 = {value : 10};
var object2 = object1;
var object3 = {value : 10};
// IN CONSOLE :
object1 === object2 // OP - true
object1 === object3 // OP - flase
object1.value = 15; // Changing the value
object2.value; // OP - 15
object3.value; // OP - 10

// Context : [NOT TO BE CONFUSED WITH SCOPE]-----------------------------------------------------------------------------------------------------------------------------


// IN CONSOLE :
console.log(this); // OP - Window
console.log(this === window); // OP - True
this.alert('Hello'); // Works same as window.alert('hello)
// this - gives the object enviornment we are in rn
// We are able to do this.alertt coz we are inside window obj

// IN CONSOLE :
function a(){
    console.log(this);
}
a(); // OP - Window

// IN CONSOLE :
const obj4 = {
    a: function () {
        console.log(this);
    }
}
obj4.a() // OP - {a: f}


// Instantiation -----------------------------------------------------------------------------------------------------------------------------

//In Console
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Player name : ${this.name}, and type : ${this.type}`);
    }
}

class Wizard extends Player { // Extends functionality of player classs
    constructor(name, type){
        super(name, type) // 'super' takes the control to constructor of player class
    }
    play(){
        console.log(`This is my type ${this.type}`);
    }
}

const wizard1 = new Wizard('Sakura', 'Useless');
const wizard2 = new Wizard('Itachi', 'Uchiha');
wizard1.play(); // OP - This is my type useless
wizard1.introduce();// OP - Player name : Sakura, and type : useless

//In Console :
class Player {
    constructor(name, type){
        console.log('player ',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Player name : ${this.name}, and type : ${this.type}`);
    }
}

class Wizard extends Player { // Extends functionality of player classs
    constructor(name, type){
        // console.log('wizard ',this);
        // The above line here wont work, Reason = Reference rror
        // We need to call super first 
        super(name, type) // 'super' takes the control to constructor of player class
        console.log('wizard ',this);
    }
    play(){
        console.log(`This is my type ${this.type}`);
    }
}

const wizard1 = new Wizard('Sakura', 'Useless');

//OP - player - Wizard{}
//     wizard - Wizard{name : "Sakura", type : "Healer"}