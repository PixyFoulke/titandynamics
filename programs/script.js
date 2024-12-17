window.onload = function() {
    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');
  
    // If username exists, display it in the top bar
    if (username) {
      document.getElementById('username-display').textContent = username;
    }
  }
  