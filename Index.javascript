// 1. Data Object for the activities
const activities = [
  { name: 'Football', category: 'Games and Sports', schedule: 'Morning', img: 'football.jpg' },
  { name: 'Netball', category: 'Games and Sports', schedule: 'Afternoon', img: 'netball.jpg' },
  { name: 'Volleyball', category: 'Games and Sports', schedule: 'Evening', img: 'volleyball.jpg' }
];

// 2. Function to render the table
function loadActivities() {
  const tableBody = document.getElementById('tableBody');
  
  tableBody.innerHTML = activities.map(item => `
    <tr>
      <td>
        <img src="${item.img}" alt="${item.name}" 
             style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
      </td>
      <td><strong>${item.name}</strong></td>
      <td><span class="badge">${item.category}</span></td>
      <td>${item.schedule}</td>
    </tr>
  `).join('');
}

// Run the function when the page loads
window.onload = loadActivities;
   
