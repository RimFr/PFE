function logout() { if (confirm('Are you sure you want to log out?')) alert('Logged out. Goodbye!'); }

// Highlight active nav item based on current page
(function(){
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    if (el.getAttribute('data-page') === page) el.classList.add('active');
  });
})();
