document.getElementById('open-modal').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('my-modal').classList.add('active');
});

document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('my-modal').classList.remove('active');
});
