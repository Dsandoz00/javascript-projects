// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkOut(uses=1) {
        this.timesCheckedOut += uses
    }
}
//------------------------------------------------------------------
//What is the purpose of this project? Organize the library of manuals and fun novels for the crew to read
//What is T1 asking of me? I need to construct a parent/child class structure that stores information about the books in the library
//What are the steps I need to take to complete T1? 
    //Create a book parent class for the two child classes
    //Create two child classes called 'Manual' & 'Novel'
    //Book class(Parent): constructor + 
    //Manual class(Child): constructor + method (Book must be thrown out if it is over 5 years old)
    //Novel class(Child) : constructor + method (update the property related to the number of times the book has been checked out)
//------------------------------------------------------------------

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);

    }

    dispose(currentYear) {
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}
class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);

    }

    dispose(){
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}
//------------------------------------------------------------------

//------------------------------------------------------------------

// Declare the objects for exercises 2 and 3 here:
//------------------------------------------------------------------

//------------------------------------------------------------------

let  stayWoke = new Novel ('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let spaceTravel = new Manual ('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
//------------------------------------------------------------------

//------------------------------------------------------------------

stayWoke.dispose();

spaceTravel.checkOut(5);
spaceTravel.dispose();

console.log(stayWoke);
console.log(spaceTravel.dispose);
