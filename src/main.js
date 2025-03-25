const bookName = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const addButton = document.querySelector("#addBook");
const bookList = document.getElementById("bookList");

function addBook(event) {
  const name = bookName.value.trim();
  const author = authorName.value.trim();
  if (name === "" || author === "") {
    alert("Lütfen kitap adı veya yazar adı giriniz.")
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${name} - ${author}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "sil";

  li.appendChild(deleteBtn);
  bookList.appendChild(li);

  deleteBtn.addEventListener("click", e => {
    li.remove();
  });

  // Inputları temizle
  bookName.value = "";
  authorName.value = "";

}

addButton.addEventListener("click", addBook);

function saveBooks(bookName, authorName) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.push({ bookName, authorName });
  localStorage.setItem("books", JSON.stringify(books));
}