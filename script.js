function loadUsers() {
  const userContainer = document.getElementById('users');
  const errorDiv = document.getElementById('error');
  
  userContainer.innerHTML = '';
  errorDiv.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user';
        div.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        userContainer.appendChild(div);
      });
    })
    .catch(err => {
      errorDiv.textContent = '❌ Failed to load users: ' + err.message;
    });
}

// Load on first visit
window.onload = loadUsers;
