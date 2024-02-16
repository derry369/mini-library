let myLibrary = [];

// constructor function to create a new book object
function Book(title, author, content, readStatus, dateMod) {
    this.Title = title,
    this.Author = author,
    this.Content = content,
    this.readStatus = readStatus,
    this.dateMod = dateMod
}

// 'add new book' dialog form open
const newBook = document.querySelector('.add-book')
const dialog = document.querySelector('dialog')
    newBook.addEventListener("click", () => {
    dialog.showModal();
});


// add 'submit' event listener
const newBookForm = document.querySelector('#newbk-form')
newBookForm.addEventListener('submit', (e) => {
    addBookToLibrary();
    newBookForm.reset();
});



function addBookToLibrary() {
    //copy form inputs into variables
    const title = newBookForm.elements[0].value;
    const author = newBookForm.elements[1].value;
    const numPages = newBookForm.elements[2].value;
    const readSt = newBookForm.elements[3].value;
    
    // make new book object with constructor
    const myDate = new Date();
    const myBook = new Book(title, author, `${numPages} pages`, readSt, myDate)
    
    // add new book object to myLibrary array
    myLibrary.push(myBook);
    
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
    cell5.textContent = book.dateMod;

    let cell6 = document.createElement('td')

    const checkMark = document.createElement('img');
    checkMark.setAttribute('src', 'succ.png'); 
    checkMark.setAttribute('alt', 'READ');

    const notMark = document.createElement('img');
    notMark.setAttribute('src', 'not.png'); 
    notMark.setAttribute('alt', 'NOT READ');

    if(book.readStatus === 'true') {
        cell6.appendChild(checkMark); 
    } else if(book.readStatus === 'false') {
        cell6.appendChild(notMark)
    }    

    let cell7 = document.createElement('td')
   
    tableBody.appendChild(row)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)
    row.appendChild(cell6)
    row.appendChild(cell7)

    //delete book feature
    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete Book';
    delBtn.setAttribute('id', index)
    cell7.appendChild(delBtn);

    delBtn.addEventListener('click', function() {
        delete myLibrary[index];
        fillTable();

    })

    // change read status feature
    let editcell = document.createElement('div');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Change Read Status'
    cell7.appendChild(editcell);
    editcell.appendChild(editBtn);   
    
    editBtn.addEventListener('click', function() {
        if(myLibrary[index].readStatus === 'true') {
            myLibrary[index].readStatus = 'false'
            myLibrary[index].dateMod = new Date();
            fillTable()
        } else {
            myLibrary[index].readStatus = 'true'
            myLibrary[index].dateMod = new Date();
            fillTable()
        }
    } )
    
}





