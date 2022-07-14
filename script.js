let myLibrary = [];

const bookInput = {
  title: document.querySelector("input[name='title']"),
  author: document.querySelector("input[name='author']"),
  pages: document.querySelector("input[name='pages']"),
  read: document.querySelector("input[name='read']")
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let readAnswer = this.read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readAnswer}`;
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