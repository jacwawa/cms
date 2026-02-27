const page = document.body.getAttribute("data-page");
if (page) {
  document.querySelectorAll('.nav a[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
