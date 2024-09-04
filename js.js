let title = document.getElementById("title");
let note = document.getElementById("note");
let btn = document.getElementById('btn');
let rightdiv = document.getElementById("rightdiv");

// Load saved data from local storage
window.onload = function() {
    if (localStorage.getItem('savedData')) {
        rightdiv.innerHTML = localStorage.getItem('savedData');
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(title.value);
    console.log(note.value);
    rightdiv.innerHTML += `<div>
        <h2>${title.value}</h2>
        <p>${note.value}</p>
        <i class='bx bxs-edit bx-flashing bx-sm'></i>
        <i class='bx bx-trash bx-tada bx-sm'></i>
    </div>`;
    title.value = '';
    note.value = '';

    // Save data to local storage
    localStorage.setItem('savedData', rightdiv.innerHTML);
    addEventListenersToNewElement(rightdiv.lastElementChild);

    // Add event listeners for delete and edit buttons
    addEventListeners();
});

// Function to add event listeners for delete and edit buttons
function addEventListeners() {
    let dbtns = document.getElementsByClassName('bx-trash');
    for (let i = 0; i < dbtns.length; i++) {
        dbtns[i].addEventListener('click', () => {
            dbtns[i].parentElement.style.display = "none";
            // Update saved data in local storage after deletion
            localStorage.setItem('savedData', rightdiv.innerHTML);
        });
    }

    let ebtns = document.getElementsByClassName('bxs-edit');
    for (let i = 0; i < ebtns.length; i++) {
        ebtns[i].addEventListener('click', () => {
            title.value = ebtns[i].parentElement.childNodes[1].innerText;
            note.value = ebtns[i].parentElement.childNodes[3].innerText;
            ebtns[i].parentElement.style.display = "none";
            // Update saved data in local storage after editing
            localStorage.setItem('savedData', rightdiv.innerHTML);
        });
    }
}

// Call the function to add event listeners when the page loads
addEventListeners();

function addEventListenersToNewElement(element) {
    let dbtn = element.querySelector('.bx-trash');
    dbtn.addEventListener('click', () => {
        element.style.display = "none";
        // Update saved data in local storage after deletion
        localStorage.setItem('savedData', rightdiv.innerHTML);
    });

    let ebtn = element.querySelector('.bxs-edit');
    ebtn.addEventListener('click', () => {
        title.value = element.querySelector('h2').innerText;
        note.value = element.querySelector('p').innerText;
        element.style.display = "none";
        // Update saved data in local storage after editing
        localStorage.setItem('savedData', rightdiv.innerHTML);
    });
}






