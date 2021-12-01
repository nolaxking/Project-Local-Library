function findAuthorById(authors, id) {    
  const found = authors.find((author)=>author.id === id );
  return found
}

function findBookById(books, id) {
  const foundBook = books.find((book)=>book.id === id );
  return foundBook
}

function partitionBooksByBorrowedStatus(books) {
  let notReturned = books.filter((book) => book.borrows.some((bok) => bok.returned === false));
  let isReturned = books.filter((book) => book.borrows.every((bok) => bok.returned === true));
  let twoArr =[notReturned,isReturned];
  return twoArr
}


function getBorrowersForBook(book, accounts) {
  let borrowArr = book.borrows;  
  let result =  borrowArr.map(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let arr = account;
    arr['returned'] =  borrow.returned;
    return arr;
  })
  return result.slice(0,10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
