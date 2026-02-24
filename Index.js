
// 1. Data Object with placeholder images
const activities = [
  { name: 'Football', category: 'Sports', img: 'https://via.placeholder.com/50' },
  { name: 'Netball', category: 'Sports', img: 'https://via.placeholder.com/50' },
  { name: 'Volleyball', category: 'Sports', img: 'https://via.placeholder.com/50' }
];

// 2. Function to render the table
function loadActivities() {
  const tableBody = document.getElementById('activitiesTableBody');

  // We map through the array and join the strings together
  tableBody.innerHTML = activities.map(item => `
    <tr>
      <td><img src="${item.img}" alt="${item.name}" width="50"></td>
      <td><strong>${item.name}</strong></td>
      <td>${item.category}</td>
    </tr>
  `).join('');
}

// Run the function when the page loads
window.onload = loadActivities;
