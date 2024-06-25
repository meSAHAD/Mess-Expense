document.addEventListener("DOMContentLoaded", () => {
    openPage('deposit');
});

function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function openDepositDetails(personId) {
    const details = document.getElementById(`${personId}-details`);
    if (details.innerHTML === '') {
        for (let i = 1; i <= 31; i++) {
            details.innerHTML += `<input type="number" id="${personId}-day-${i}" placeholder="${i}" /> `;
        }
    }
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function openMealDetails(personId) {
    const details = document.getElementById(`${personId}-details`);
    if (details.innerHTML === '') {
        for (let i = 1; i <= 31; i++) {
            details.innerHTML += `<input type="number" id="${personId}-meal-${i}" placeholder="${i}" step="0.5" min="0" /> `;
        }
    }
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function addBazarRow() {
    const tbody = document.getElementById('bazar-table-body');
    const newRow = tbody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = '<input type="text" />';
    cell2.innerHTML = '<input type="number" />';
}

function updateStatus() {
    // This function will be used to calculate and update the status
    // Implementation will depend on the specific logic and data structure
}
