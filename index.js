let books = [];

let button = document.getElementById('submit');
button.addEventListener('click', saveBook);

let book = document.getElementById('input');

function saveBook() {
  books.push(book.value);
  localStorage.setItem('book', JSON.stringify(books));
  document.getElementById('title').innerHTML = book.value;
  book.value = '';
  let parser = JSON.parse(localStorage.getItem('book'));
  console.log(parser);
}
