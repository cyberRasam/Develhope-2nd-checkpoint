let books = [];
let button = document.getElementById('submit');
button.addEventListener('click', savebook);

// function setBook(input) {
//     let input = document.getElementById("1");

// }

// books.push(book);
let input = document.getElementById('1');

function savebook() {
  books.push(input.value);
  console.log(books);
  localStorage.setItem('books', JSON.stringify(books));
  document.getElementById('title').innerHTML = input.value;
  input.value = '';
  let parser = JSON.parse(localStorage.getItem('books'));
  console.log(parser);
}
