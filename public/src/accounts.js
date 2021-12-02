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
  const booksOut = [];
  books.forEach(book=>{
    if (book.borrows.find(borrow =>borrow.id === account.id && !borrow.returned)) {
      booksOut.push(book);
    }
  })
  return booksOut.map(book=>{
    const author = authors.find(author => author.id === book.authorId);
    return {...book,author}
  })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
