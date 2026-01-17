// Very basic component loader (for development)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => response.text())
      .then(html => {
        el.outerHTML = html;
      })
      .catch(err => console.error('Error loading component:', err));
  });
});
