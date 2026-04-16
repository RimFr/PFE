/* ── NAVIGATION ── */
function logout() { window.location.href = 'login.html'; }

/* ── NOTIFICATIONS ── */
function toggleNotif() {
  document.getElementById('notifPanel').classList.toggle('open');
}
document.addEventListener('click', e => {
  const panel = document.getElementById('notifPanel');
  const btn = document.querySelector('.notif-btn');
  if (!panel.contains(e.target) && !btn.contains(e.target)) panel.classList.remove('open');
});
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(i => i.classList.remove('unread'));
  const badge = document.getElementById('notifCount');
  badge.textContent = '0';
  badge.style.display = 'none';
}

/* ── HIGHLIGHT ACTIVE SIDEBAR LINK ── */
(function(){
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar ul li[data-page]').forEach(li => {
    if(li.getAttribute('data-page') === page) li.classList.add('active');
  });
  
})();
