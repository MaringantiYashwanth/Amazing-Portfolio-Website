const toggleBtn = document.getElementById('theme-toggle');
document.body.classList.add('dark'); 

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

});
