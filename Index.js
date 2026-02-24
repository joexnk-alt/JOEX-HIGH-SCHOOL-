// 1. Data Object (Added an 'image' property to match your <img> tag logic)
const activities = [
    { name: 'Football', category: 'Field', img: 'https://via.placeholder.com/30' },
    { name: 'Netball', category: 'Court', img: 'https://via.placeholder.com/30' },
    { name: 'Volleyball', category: 'Court', img: 'https://via.placeholder.com/30' }
];

// 2. The Function
function loadSchoolPortal() {
    // Set the Heading
    const header = document.getElementById('header-container');
    if (header) {
        header.innerHTML = "<h1>School Activities Portal</h1>";
    }

    // Populate the Table
    const tableBody = document.getElementById('activities-table-body');
    
    if (tableBody) {
        // FIX: Added .map() to loop through the array
        tableBody.innerHTML = activities.map(item => `
            <tr>
                <td><img src="${item.img}" alt="${item.name}" style="margin-right:10px;"> ${item.name}</td>
                <td>${item.category}</td>
            </tr>
        `).join(''); // Joins the array of strings into one big HTML string
    }
}

// 3. Run it
window.onload = loadSchoolPortal;
