document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);

      const spans = navToggle.querySelectorAll('span');
      if (isExpanded) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Like button logic for articles
  const likeBtn = document.getElementById('like-btn');
  const likeCount = document.getElementById('like-count');

  if (likeBtn && likeCount) {
    // Use the current path as a unique key for the article
    const articleKey = 'likes_' + window.location.pathname;
    // Initialize like count from localStorage
    let count = parseInt(localStorage.getItem(articleKey)) || 0;
    likeCount.textContent = count;

    likeBtn.addEventListener('click', () => {
      count++;
      likeCount.textContent = count;
      localStorage.setItem(articleKey, count);
      // Animation feedback
      likeBtn.style.transform = 'scale(1.15)';
      setTimeout(() => {
        likeBtn.style.transform = '';
      }, 120);
    });
  }
});