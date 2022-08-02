'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// stop form refreshing page on submit
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  e.target.reset();
}
);
