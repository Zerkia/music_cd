//createCD might be a better name
function createTableData() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;

    if (author && title && year) {
        const tableRow = document.createElement('tr');

        const authorCell = document.createElement('td');
        const titleCell = document.createElement('td');
        const yearCell = document.createElement('td');
        const deleteCell = document.createElement('td');
        deleteCell.classList.add("iconCenter");

        authorCell.textContent = author;
        titleCell.textContent = title;
        yearCell.textContent = year;

        yearCell.classList.add('tdAuthor');
        yearCell.classList.add('tdTitle');
        yearCell.classList.add('tdYear');

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash-o', 'tdDelete');
        deleteIcon.addEventListener('click', function () {
            tableRow.remove();
        });

        deleteCell.appendChild(deleteIcon);
        tableRow.appendChild(authorCell);
        tableRow.appendChild(titleCell);
        tableRow.appendChild(yearCell);
        tableRow.appendChild(deleteCell);

        // Insert the finished row correctly
        document.querySelector('#cd-list tbody').appendChild(tableRow);

        // Form reset for next input
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('year').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

// Prevent form submit and thereby html page reload
document.getElementById('cd-form').addEventListener('submit', function (e) {
    e.preventDefault();
    createTableData();
});
