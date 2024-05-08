//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let language = 'Javascript';
console.log(language.slice(0,1)+language.slice(4,5))

//2. Without using slice(), use method chaining to accomplish the same thing.

let language = 'Javascript';
console.log(language.indexOf(J)+language.charAt(4))


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${initials}.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.indexOf("The")+(`abbreviation for`)+(language.indexOf(J)+language.charAt(39)))

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.charAt(t).toUpperCase()+notTitleCase.charAt(c).toUpperCase)
