//Empty array where the values wrote by the user will be stored
let myLibrary = [];

//Object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.info = function(){
        //return (title + author+ ", " + pages + ", " + read);
    //}
}

//Function for adding a new Book to the array
function addBooktoLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//const theHobbit = new Book ("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read")
//console.log(theHobbit.info());