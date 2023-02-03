const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", submitClick, false);

function submitClick(event) {
  event.preventDefault();
  addBookToLibrary();
  hideModal();
  displayBooks();
}

const modal = document.querySelector(".modal");
const newBookButton = document.querySelector(".newBookButton");
const closeButton = document.querySelector(".close-button");

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

newBookButton.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);
window.addEventListener("click", windowOnClick);

let myLibrary = [
  {
    title:
      "harry potterfffff fffffffffffff fffffffffffffffffffff ffffffffffffffffff",
    author: "someone",
    pages: "300",
    read: true,
  },
  { title: "molly rotter", author: "noone", pages: "200", read: false },
];

const bookInput = {
  title: document.querySelector("input[name='title']"),
  author: document.querySelector("input[name='author']"),
  pages: document.querySelector("input[name='pages']"),
  read: document.querySelector("input[name='read']"),
};

const bookDisplay = document.querySelector(".library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
  let card;
  let title;
  let author;
  let pages;
  let read;
  let selector;
  myLibrary.forEach((book, index) => {
    selector = `.card[data-index='${index}']`;
    if (document.querySelector(selector)) {
      return;
    }
    card = document.createElement("div");
    card.classList.add("card");

    title = document.createElement("p");
    title.textContent = book.title;
    author = document.createElement("p");
    author.textContent = book.author;
    pages = document.createElement("p");
    pages.textContent = book.pages;
    read = document.createElement("input");
    read.type = "checkbox";
    read.checked = book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    card.setAttribute("data-index", index);

    bookDisplay.appendChild(card);
  });
}

displayBooks();
