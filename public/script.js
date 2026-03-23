// Toggle project accordion
document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project-title');
  
  projects.forEach(function(title) {
    title.addEventListener('click', function() {
      this.parentElement.classList.toggle('open');
    });
  });
});
