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
    displayBooksOnPage();
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

// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
    document.getElementById("add-book-form").style.display="";
}

// Start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

// Transform form data to variables for intake
// (".value" will pull the content of the textbox)
function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    // Call the function to input data to array
    addBooktoLibrary(Title, Author, Pages, Read);

    // Reset the form after succesful submission
    document.getElementById("add-book").reset();
}




//Calling function and adding data manually for now, until the form is built out
//addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
//addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");
//addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
//addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");
//addBooktoLibrary("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read");
//addBooktoLibrary("Bursa pentru Incepatori", "Alin Hem", "20 pages", "read");

//console.log("End of code array content", myLibrary);

//displayBooksOnPage();