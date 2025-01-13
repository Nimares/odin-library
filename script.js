// client side storage object
const myLibrary = {
    book1: { title: "book1", author: "JRR", pages: 1137, read: false },
    book2: { title: "book2", author: "book2-author", pages: 666, read: false },
    book3: { title: "book3", author: "book3-author", pages: 666, read: false },
    book4: { title: "book4", author: "book4-author", pages: 666, read: true },
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

    // Book Card
    const bookCard = document.createElement("div");
    const bookImageContainer = document.createElement("div");
    const bookInfoContainer = document.createElement("div");
    const bookOptionsContainer = document.createElement("div");

    // Information
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const readStatus = document.createElement("div");
    readStatus.classList.add("read-status");
    const readStatusPara = document.createElement("span");


    // Delete based DOM traversal
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", (e) => {
        delete myLibrary[e.target.parentNode.previousSibling.firstChild.innerHTML];
        e.target.parentNode.parentNode.remove();
    }
    );

    const readStatusSwitch = document.createElement("label");
    readStatusSwitch.classList.add("switch");
    const readStatusCheckbox = document.createElement("input");
    readStatusCheckbox.type = "checkbox"
    const readStatusSlider = document.createElement("span");
    readStatusSlider.classList.add("slider");

    readStatusSwitch.appendChild(readStatusCheckbox);
    readStatusSwitch.appendChild(readStatusSlider);

    if (book.read) {
        readStatusCheckbox.checked = true;
        readStatusPara.textContent = "Read"
    } else {
        readStatusCheckbox.checked = false;
        readStatusPara.textContent = "Not read";
    }

    readStatusSwitch.addEventListener("click", (e) => {
        if (e.target.checked) {
            readStatusSwitch.previousSibling.textContent = "Read";
            book.read = true;
        } else {
            readStatusSwitch.previousSibling.lastChild.textContent = "Not read";
            book.read = false;
        }
    });

    bookTitle.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = book.pages;

    bookImageContainer.classList.add(generateRandomStyle());
    bookImageContainer.classList.add("book-card--image");
    bookCard.classList.add("book-card");

    bookCard.appendChild(bookImageContainer);
    bookCard.appendChild(bookInfoContainer);
    bookCard.appendChild(bookOptionsContainer);

    bookInfoContainer.appendChild(bookTitle);
    bookInfoContainer.appendChild(bookAuthor);
    bookInfoContainer.appendChild(bookPages);
    readStatus.appendChild(readStatusPara);
    readStatus.appendChild(readStatusSwitch);
    bookInfoContainer.appendChild(readStatus);

    bookOptionsContainer.appendChild(deleteBtn);

    library.appendChild(bookCard);

}