let myLibrary = [];

const bookInput = {
  title: document.querySelector("input[name='title']"),
  author: document.querySelector("input[name='author']"),
  pages: document.querySelector("input[name='pages']"),
  read: document.querySelector("input[name='read']"),
};
const submitButton = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const newBookButton = document.querySelector(".newBookButton");
const closeButton = document.querySelector(".close-button");
const bookDisplay = document.querySelector(".library");

submitButton.addEventListener("click", submitClick, false);
newBookButton.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);
window.addEventListener("click", windowOnClick);

function submitClick(event) {
  event.preventDefault();
  addBookToLibrary();
  hideModal();
  displayBooks();
  resetInput();
}

function showModal() {
  modal.classList.add("show-modal");
  modal.classList.remove("hide-modal");
}

function hideModal() {
  modal.classList.add("hide-modal");
  modal.classList.remove("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    hideModal();
  }
}

function resetInput() {
  bookInput.title.value = "";
  bookInput.author.value = "";
  bookInput.pages.value = "";
  bookInput.read.checked = false;
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary() {
  let title = bookInput.title.value;
  let author = bookInput.author.value;
  let pages = bookInput.pages.value;
  let read = bookInput.read.checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book, index) => {
    let selector = `.card[data-index='${index}']`;
    if (document.querySelector(selector) || book === undefined) {
      return;
    }
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("p");
    title.textContent = `"${book.title}"`;
    let author = document.createElement("p");
    author.textContent = book.author;
    let pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;
    let read = document.createElement("button");
    if (book.read) {
      read.classList.add("read");
      read.textContent = "Read";
    } else {
      read.classList.add("not-read");
      read.textContent = "Not read";
    }
    read.addEventListener("click", function (event) {
      book.changeRead();
      let button = event.target;
      if (book.read) {
        button.classList.add("read");
        button.classList.remove("not-read");
        button.textContent = "Read";
      } else {
        button.classList.add("not-read");
        button.classList.remove("read");
        button.textContent = "Not read";
      }
    });
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", deleteBook);

    let buttonGroup = document.createElement("div");
    buttonGroup.classList.add("buttonGroup");
    buttonGroup.appendChild(read);
    buttonGroup.appendChild(deleteButton);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(buttonGroup);

    card.setAttribute("data-index", index);

    bookDisplay.appendChild(card);
  });
}

function deleteBook(event) {
  let book = event.target.parentNode.parentNode;
  let index = book.dataset.index;
  delete myLibrary[index];
  bookDisplay.removeChild(book);
}

displayBooks();
