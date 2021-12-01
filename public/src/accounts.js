function findAccountById(accounts, id) {
  let found = accounts.find((acc)=>acc.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  let byLastName= accounts.sort((sortA,sortB)=>sortA.name.last>sortB.name.last ?1:-1)
  return byLastName
}

function getTotalNumberOfBorrows(accounts, books) {
  const acc = accounts.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => acc === borrow.id && total++));
  return total;
}
function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = [];
  books.forEach(book=>{
    if (book.borrows.find(items=>items.id === account.id && !items.returned)) {
      booksOut.push(book);
    }
  })
  booksOut.forEach(book=>{
    let author = authors.find(borrower => borrower.id === book.authorId);
    book['author'] = author;
  })
  return booksOut;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
