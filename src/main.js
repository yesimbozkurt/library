const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const addButton = document.querySelector("#addBook");
const bookList = document.getElementById("bookList");

let books = []

function addBook() {
  const name = bookName.value.trim();
  const author = authorName.value.trim();
  if (name === "" || author === "") {
    alert("Lütfen kitap adı veya yazar adı giriniz.")
    return;
  }
  const book = {
    name: name,
    author: author,
  }
  books.push(book);
  saveBooks();

  const li = document.createElement("li");
  li.textContent = `${book.name} - ${book.author}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "sil";

  li.appendChild(deleteBtn);
  bookList.appendChild(li);

  deleteBtn.addEventListener("click", e => {
    books = books.filter(b => b.name !== book.name);
    li.remove();
  });

  // Inputları temizle
  bookName.value = "";
  authorName.value = "";

}

addButton.addEventListener("click", addBook);

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}
function loadBooks() {
  const savedBooks = localStorage.getItem("books")
  if (savedBooks) {
    books = JSON.parse(savedBooks)
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.name} - ${book.author}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "sil";

      li.appendChild(deleteBtn);
      bookList.appendChild(li);

      deleteBtn.addEventListener("click", e => {
        books = books.filter(b => b.name !== book.name);
        li.remove();
      });

    });
  }
}
loadBooks();
window.addEventListener("beforeunload", saveBooks);