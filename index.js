async function fetchUserData() {
  try {
    const response = await fetch('/myproject/users.json');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
}



async function login(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = await fetchUserData();
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    window.location.href = './dashboard.html'
  } else {
    alert('Invalid credentials. Please try again.');
  }
  
}

var form = document.getElementById("btn3");
form.addEventListener("click", login )