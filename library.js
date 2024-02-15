let myLibrary = [];

// constructor function to create a new book object
function Book(title, author, content, readStatus) {
    this.Title = title,
    this.Author = author,
    this.Content = content,
    this.readStatus = readStatus
}

// 'add new book' dialog form open
const newBook = document.querySelector('.add-book')
    const dialog = document.querySelector('dialog')

    newBook.addEventListener("click", () => {
    newBookForm.reset();
    dialog.showModal();
});


// add 'submit' event listener
const newBookForm = document.querySelector('#newbk-form')
newBookForm.addEventListener('submit', (e) => {
    addBookToLibrary();
});



function addBookToLibrary() {
    //copy form inputs into variables
    const  title = newBookForm.elements[0].value;
    const author = newBookForm.elements[1].value;
    const numPages = newBookForm.elements[2].value;
    const readSt = newBookForm.elements[3].value;
    
    // make new book object with constructor
    const myBook = new Book(title, author, `${numPages} pages`, readSt)
    
    // add new book object to myLibrary array
    myLibrary.push(myBook);

    dialog.close(); 
    
    //fill table with array objects
    fillTable();
}


function fillTable() {
    let existCont = document.querySelector('tbody');
    existCont.innerHTML = '';
    myLibrary.forEach(fillShelve);
}


function fillShelve(book, index) {
    let tableBody = document.querySelector('tbody');

    let row = document.createElement('tr');

    let cell2 = document.createElement('td')
    cell2.textContent = book.Title

    let cell3 = document.createElement('td')
    cell3.textContent = book.Author

    let cell4 = document.createElement('td')
    cell4.textContent = book.Content

    let cell5 = document.createElement('td')
    cell5.textContent = new Date()

    let cell6 = document.createElement('td')
    cell6.textContent = book.readStatus

    let cell7 = document.createElement('td')
   
    tableBody.appendChild(row)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)
    row.appendChild(cell6)
    row.appendChild(cell7)

    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete Book';
    delBtn.classList.add(index)
    cell7.appendChild(delBtn);

    let editcell = document.createElement('div');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Book'

    cell7.appendChild(editcell);
    editcell.appendChild(editBtn);

    delBtn.addEventListener('click', function(e) {
        let delbk = +e.target.classList.value;
        delete myLibrary[delbk];
            fillTable();

    })

}

 




