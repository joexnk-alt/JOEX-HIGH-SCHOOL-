// 1. Data Object
const activities = [
  { name: 'Football', category: 'Field Sports', img: 'https://via.placeholder.com/50' },
  { name: 'Netball', category: 'Court Sports', img: 'https://via.placeholder.com/50' },
  { name: 'Volleyball', category: 'Court Sports', img: 'https://via.placeholder.com/50' }
];

// 2. The Function
function loadSchoolPortal() {
    // Set the Heading
    const header = document.getElementById('main-header');
    if(header) header.innerHTML = "<h1>JOEX HIGH SCHOOL</h1>";

    // Populate the Table
    const tableBody = document.getElementById('activitiesTableBody');
    if(tableBody) {
        tableBody.innerHTML = activities.map(item => `
            <tr>
                <td><img src="${item.img}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>${item.category}</td>
            </tr>
        `).join('');
    }
}

// 3. Run it
window.onload = loadSchoolPortal;
