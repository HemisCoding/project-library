//Empty array where the values wrote by the user will be stored
let myLibrary = [];

//Object constructor
function Book(Title, Author, Pages, Read){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    //this.info = function(){
        //return (title + author+ ", " + pages + ", " + read);
    //}
}

//Function for adding a new Book to the array
function addBooktoLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
}

//const theHobbit = new Book ("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read")
//console.log(theHobbit.info());

// Function to display library array to cards

function displayBooksOnPage() {
    const books = document.querySelector(".books");

    //Loop over the library array and display to the cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

//Calling function and adding data manually for now, until the form is built out
addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");
addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");
addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");

console.log("End of code array content", myLibrary);

displayBooksOnPage();