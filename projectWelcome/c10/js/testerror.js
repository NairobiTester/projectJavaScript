/*** ERROR OBJECTS - Error objects can help you find where your mistakes are and browsers have tools to help you read them. When an 
 Error object is created, it will contain the following properties:
 
 PROPERTY       DESCRIPTION
    name            Type of execution
    message         Description
    fileNumber      Name of the JavaScript file
    lineNumber      Line number of error
    
    When there is an error, you can see all of this information in the JavaScript console / Error console of the browser.

    There are seven types of built-in error objects in JavaScript. 

    OBJECT                             DESCRIPTION
        Error                          Generic error - the other errors are all based upon this error
        Syntax Error                   Syntax has not been followed
        ReferenceError                 Tried to reference a variable that is not declared/within scope
        TypeError                      An unexpected data type that cannot be coerced
        Range Error                    Numbers not in acceptable range
        URI Error                      encodeURI(), decodeURI(),and similar methods used incorrectly
        EvalError                      eval() function used incorrectly
 ***/


var price = 9.9966778899112233445566777;
num = 2.3456;

function rounding(){
return price.toFixed(11); // toFixed(11) must be between 0 and 100, otherwise there will be a RangeError
}
var roundoff = rounding();

function pricise(){
    return num.toPrecision(10); // toPrecision(10) must be between 1 and 100, otherwise there will be a RangeError
}
var accurate = pricise();

console.log(roundoff);
console.log(accurate);


/*** Examples 
1. Syntax Error - SYNTAX IS NOT CORRECT: This is caused by incorrect use of the rules of the language. It is often the result of a simple typo.
e.g. MISMATCHING OR UNCLOSED QUOTES => document.write ("Howdy');  yields => SyntaxError: Unexpected EOF

2. ReferenceError - VARIABLE DOES NOT EXIST - This is caused by a variable that is not declared or is out of scope. 
e.g. VARIABLE IS UNDECLARED
    var width = 12;
    var area = width * height;
yields => ReferenceError: Can't find variable: height 

3. EvalError
INCORRECT USE OF eval() FUNCTION
The eval() function evaluates text through the interpreter and runs it as code (it is not discussed in this book). It is rare that you would 
see this type of error, as browsers often throw other errors when they are supposed to throw an EvalError. 

4. URI Error
INCORRECT USE OF URI FUNCTIONS
If these characters are not escaped in URls, they will cause an error: / ? & I : ;

CHARACTERS ARE NOT ESCAPED

decodeURI('http://bbc.com/news.php?a=1');

URlError: URI error 

5. Type Error
VALUE IS UNEXPECTED DATA TYPE
This is often caused by trying to use an object or method that does not exist.

INCORRECT CASE FOR document OBJECT

Document.write('Oops!');

Yields => TypeError: 'undefined' is not a function (evaluating 'Document.write('Oops! ')')

INCORRECT CASE FOR write() METHOD

document.Write('Oops!'); 

Yields => TypeError: 'undefined' is not a function (evaluating 'document.Write('Oops!')') 

*****/