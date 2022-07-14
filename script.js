let myLibrary = [
  { title: "harry potter", author: "someone", pages: "300", read: true },
  { title: "molly rotter", author: "noone", pages: "200", read: false }
];

const bookInput = {
  title: document.querySelector("input[name='title']"),
  author: document.querySelector("input[name='author']"),
  pages: document.querySelector("input[name='pages']"),
  read: document.querySelector("input[name='read']")
}

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
  myLibrary.forEach((book, index) => {
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

    bookDisplay.appendChild(card);
  });
}

displayBooks();