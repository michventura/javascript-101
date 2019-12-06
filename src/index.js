/* eslint-disable */

// Tres pilares de JavaScript 1. Types, 2. Scope & Closures, 3. this & Prototypes (next)

// TODO 1. Tooling setup vscode, node, terminal & git

// TODO 2. JS Primer basics

// Values
{
42
3.14

"Hola, Val"

true
false

null
undefined

[1,2,3]
{ name: "Mich" }
}
// Operations
{
 // PEMDAS

3 + 4 (binary)
43 - 1

"Mich " + "Ventura"

!false (unary)

3.0 == 3 (comparison)

3 < 4

true || false (logical)
}
// Estos regresan/ evaluate to/ un valor de distinto typos
// Tipos de valores en JavaScript typeof
{
"number"
"string"
"boolean"
"undefined"
"object"
"symbol"
}
// Variables (place in memory, pointer, address)
{
var nombre = "Valeria";

var edad;

var amigos = [ "Isaac", "Reyna", "Ari", "Rosa" ];

console.log( amigos.length )
console.log(amigos[1])
}
// Expressions and Statements
{
  // Expressions evaluates to a value (phrase)
  // Statements (sentence)
var age = 28;
age = 1 + (age * 2);
}
// Decisions
{
var age = 28;
if (age >= 18) {
  goVote();
}

if (isEnrolled()) {
  takeClass();
} else {
  enrollFirst();
}
}
// Loops
{
  var students = ["Vale", "Gabriel", "Lau", "Luna", "Xie"];

  for (let i = 0; i < students.length; i++) {
    greetStudent( students[i] );
  }

  for (let student of students) {
    greetStudent( student );
  }

  while (students.length > 0) {
    let student = students.pop(); // array method
    greetStudent(student); // remove this to test before
    //console.log(`Hello, ${student}`);
  }

}
// Functions
{
  function greetStudent(student) {
    console.log(
      `Hola, ${student.name}!` // Interpolate string
    )
  }

  function timeRemaining(timeElapsed,endTime) {
    return endTime - timeElapsed;
  }

  var left = timeRemaining(42,240);

  left;
}

// TODO 3. Ejercicios (attached lesson01/README.md)
