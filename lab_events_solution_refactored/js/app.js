document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  renderList();
});

const getList = function(){
  if (JSON.parse(localStorage.getItem('books')) !== null){
    return JSON.parse(localStorage.getItem('books'));
  } else {
    return [];
  }
};

const handleFormSubmit = function(event){
  event.preventDefault();
  readingList = getList();
  const newBook = {
    title: event.target.title.value,
    author: event.target.author.value,
    category: event.target.category.value
  };

  readingList.push(newBook);

  localStorage.setItem('books', JSON.stringify(readingList));
  renderList();
  event.target.reset();
};

const buildList = function(book){
  const bookUl = document.createElement('ul');
  const titleLi = document.createElement('li');
  titleLi.textContent = `Title: ${book.title}`;
  const authorLi = document.createElement('li');
  authorLi.textContent = `Author: ${book.author}`;
  const categoryLi = document.createElement('li');
  categoryLi.textContent = `Category: ${book.category}`;

  bookUl.appendChild(titleLi);
  bookUl.appendChild(authorLi);
  bookUl.appendChild(categoryLi);

  return bookUl;
}

const renderList = function(){
    const readingDiv = document.querySelector('#reading-list');
    readingDiv.innerHTML = "";
  const bookList = getList();
  bookList.forEach((book) => {
    bookUl = buildList(book);
    readingDiv.appendChild(bookUl);

  });


}
