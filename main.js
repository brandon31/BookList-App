function closeModal() {
    overlay.style.visibility = 'hidden';
    bookModal.style.visibility = 'hidden';
    bookModal.style.top = '2%';
    bookModal.style.transform = 'translate(-50%, -50%) scale(0.1)';
}

function addNewBook() {
    const table = document.getElementsByTagName('table')[0];
    
    overlay.style.visibility = 'visible';
    bookModal.style.visibility = 'visible';
    bookModal.style.top = '50%';
    bookModal.style.transform = 'translate(-50%, -50%) scale(1)';
    
    if (titleInput.value.trim() != 0 && authorInput.value.trim() != 0 && isbnInput.value.trim() != 0){
        let bookRow = table.insertRow(1);
        
        bookRow.classList.add('row');
        
        let title = bookRow.insertCell(0);
        let author = bookRow.insertCell(1);
        let iSBN = bookRow.insertCell(2);
        let action = bookRow.insertCell(3);
        
        title.classList.add('data');
        author.classList.add('data');
        iSBN.classList.add('data');
        
        title.innerHTML = titleInput.value;
        author.innerHTML = authorInput.value;
        iSBN.innerHTML = isbnInput.value;
        action.innerHTML = `
        <button style="width: 1.2rem; padding: .1rem; border: none; border-radius: .2rem; background-color: #ff5656; color: #fff; margin-left: 1rem; cursor: pointer;">x</button>
        `;
        
        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";
        addButton.disabled = true;
        addButton.style.backgroundColor = '#557aa1';
        
        action.addEventListener('click', () => {
            bookRow.remove(1);
        })
        
    } else {
        alert("please fill the inputs.");
        overlay.style.visibility = 'hidden';
        bookModal.style.visibility = 'hidden';
        bookModal.style.top = '50%';
        bookModal.style.transform = 'translate(-50%, -50%) scale(0.1)';
    }
}

const addButton = document.getElementById('add-book');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

const isbnInput = document.getElementById('isbn');
let bookModal = document.getElementById('book-added');

const overlay = document.getElementById('overlay');

const closeButton = document.getElementById('close').addEventListener('click', closeModal);

let confirmationModal = document.getElementById('confirm');

addButton.addEventListener('click', addNewBook);

titleInput.addEventListener('keyup', () => {
    if (titleInput.value == "") {
        addButton.disabled = true;
        addButton.style.backgroundColor = '#557aa1';
    } else {
        addButton.disabled = false;
        addButton.style.backgroundColor = '#0f263f';
    }
});

authorInput.addEventListener('keyup', () => {
    if (authorInput.value == "") {
        addButton.disabled = true;
        addButton.style.backgroundColor = '#557aa1';
    } else {
        addButton.disabled = false;
        addButton.style.backgroundColor = '#0f263f';
    }
});

isbnInput.addEventListener('keyup', () => {
    if (isbnInput.value == "") {
        addButton.disabled = true;
        addButton.style.backgroundColor = '#557aa1';
    } else {
        addButton.disabled = false;
        addButton.style.backgroundColor = '#0f263f';
    }
});