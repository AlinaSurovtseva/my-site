let articles = document.querySelectorAll('.articles-item');
let filter = document.querySelector('select');

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('visually-hidden');
    } else {
      article.classList.remove('visually-hidden');
    }
  }
};