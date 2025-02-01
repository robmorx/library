const myLibrary = [];

function Book(name, author, numPages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.numPages = numPages;
}

function addBookToLibrary(book) {
  // do stuff here
    myLibrary.splice(-1,0,book) 
}
const book1= new Book("Daily Bugle", "JJJ","20");
addBookToLibrary(book1);

