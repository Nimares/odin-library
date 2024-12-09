// client side storage object
const myLibrary = {
    book1: { title: "book1", author: "JRR", pages: 1137, read: false },
    book2: { title: "book2", author: "book2-author", pages: 666, read: false },
    book3: { title: "book3", author: "book3-author", pages: 666, read: false },
    book4: { title: "book4", author: "book4-author", pages: 666, read: false },
}

const library = document.querySelector(".library");
const bookDialog = document.querySelector("dialog");
const showButton = document.querySelector(".add");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const titleInput = bookDialog.querySelector("#bookTitle");
const authorInput = bookDialog.querySelector("#bookAuthor");
const pagesInput = bookDialog.querySelector("#bookPages");
const checkedStatus = bookDialog.querySelector("#bookRead");
const outputBox = document.querySelector("output")

displayLibrary();

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    bookDialog.showModal();
});

// "Close" button closes the dialog, creates book object, ads book to DOM and storage.
confirmBtn.addEventListener("click", (event) => {
    // Prevent page reload, and form submission
    event.preventDefault();
    const newBook = new Book(
        `${titleInput.value}`,
        `${authorInput.value}`,
        `${pagesInput.value}`,
        checkedStatus.checked,

    )
    myLibrary[`${newBook.title}`] = newBook;
    displayBook(newBook);
    bookDialog.close();
});

// Book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Loops through myLibrary object, and displays each book on the page
function displayLibrary() {
    for (const book in myLibrary) {
        displayBook(myLibrary[book])
    }
}

// assigns random book style to each book added
function generateRandomStyle() {
    let randomInt = Math.floor(Math.random() * (3) + 1);
    if (randomInt === 1) {
        return "green-book"
    } else if (randomInt === 2) {
        return "red-book"
    } else {
        return "blue-book"
    }
}

// Adds book to library display
function displayBook(book) {
    const bookCard = document.createElement("div");
    const bookImageContainer = document.createElement("div");
    const bookInfoContainer = document.createElement("div");
    const bookOptionsContainer = document.createElement("div");

    // const bookDisplay = document.createElement("div"); // Alter name in all areas
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");


    const deleteBtn = document.createElement("button");
    const readStatusBtn = document.createElement("button");

    // Need to add event listener on creation.
    // Trying to add eventlistener after creation caused issues
    deleteBtn.classList.add("btn-delete");

    // 05.12.24 add default class for read status (for use later for "on") 
    readStatusBtn.classList.add("read-status");

    // Delete based on parent node
    deleteBtn.addEventListener("click", (e) => {
        delete myLibrary[e.target.parentNode.previousSibling.firstChild.innerHTML];
        e.target.parentNode.parentNode.remove();
    }
    );

    if (book.read === true) {
        readStatusBtn.classList.add("read");
    } else {
        readStatusBtn.classList.add("not-read");
    }


    // Simplified function. Alter read status then toggle both classes
    readStatusBtn.addEventListener("click", () => {
        if (book.read === true) {
            book.read = false
        } else {
            book.read = true
        }
        readStatusBtn.classList.toggle("not-read");
        readStatusBtn.classList.toggle("read");
    })


    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = book.pages;

    // bookDisplay.classList.add("book");
    bookImageContainer.classList.add(generateRandomStyle());
    bookImageContainer.classList.add("book-card--image");


    bookCard.classList.add("book-card");

    bookCard.appendChild(bookImageContainer);
    bookCard.appendChild(bookInfoContainer);
    bookCard.appendChild(bookOptionsContainer);

    bookInfoContainer.appendChild(bookTitle);
    bookInfoContainer.appendChild(bookAuthor);
    bookInfoContainer.appendChild(bookPages);

    bookOptionsContainer.appendChild(deleteBtn);
    bookOptionsContainer.appendChild(readStatusBtn);

    library.appendChild(bookCard);

}