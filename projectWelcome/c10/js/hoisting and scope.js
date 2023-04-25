/*** EXECUTION CONTEXT & HOISTING - Each time a script enters a new execution context, there are two phases of activity:
1: PREPARE
    • The new scope is created
    • Variables, functions, and arguments are created
    • The value of the this keyword is determined

2: EXECUTE
    • Now it can assign values to variables
    • Reference functions and run their code
    • Execute statements    
Understanding that these two phases happen helps with understanding a concept called hoisting. You may have seen that you can:
• Call functions before they have been declared (if they were created using function declarations not function expressions, see p96)
• Assign a value to a variable that has not yet been declared
This is because any variables and functions within each execution context are created before they are executed. The preparation phase is often
described as taking all of the variables and functions and hoisting them to the top of the execution context. Or you can think of them as 
having been prepared. Each execution context also creates its own variables object. This object contains details of all of the variables, 
functions, and parameters for that execution context. 

UUNDERSTANDING SCOPE - In the interpreter, each execution context has its own variables object. It holds the variables, functions, and 
parameters available within it. Each execution context can also access its parent's variables object. Functions in JavaScript are said to have 
lexical scope. They are linked to the object they were defined within. So, for each execution context, the scope is the current execution
context's variables object, plus the variables object for each parent execution context. 

Imagine that each function is a nesting doll. The children can ask the parents for information in their variables. But the parents cannot get 
variables from their children. Each child will get the same answer from the same parent. 

If a variable is not found in the variables object for the current execution context, it can look in the variables object of the parent 
execution context. But it is worth knowing that looking further up the stack can affect performance, so ideally you create variables inside 
the functions that use them. If you look at the following example, the inner functions can access the outer functions and their
variables. For example, the greetUser() function can access the time variable that was declared in the outer greeting() function.
Each time a function is called, it gets its own execution context and variables object. Each time an outer function calls an inner function,
the inner function can have a new variables object. But variables in the outer function remain the same.

Note: you cannot access this variables object from your code; it is something the interpreter is creating and using behind the scenes. 
But understanding what goes on helps you understand scope. 

***/

var greeting = (function() {
    var d = new Date();
    var time = d.getHours();
    var greeting = greetUser();

function greetUser(){
    if (time < 12) {
        var msg = 'Good morning ';

    } else {
        var msg = 'Welcome ';
    }
    return msg + getName();

    function getName() {
        var name = 'OkenoChile';
        return name;
    }
}
});

console.log(greeting);
//alert(greeting);

