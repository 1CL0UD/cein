document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navSidebar = document.querySelector('.nav-sidebar');
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    navSidebar.classList.add = 'show';
  } else {
    navSidebar.style.display = 'none';
  }
  navToggle.addEventListener('click', function () {
    if (navSidebar.style.display === 'flex') {
      navSidebar.style.display = 'none';
    } else {
      navSidebar.style.display = 'flex';
    }
  });

  navToggle.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  document.body.addEventListener('click', function (event) {
    const isClickInsideSidebar = navSidebar.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    if (!isClickInsideSidebar && !isClickOnToggle) {
      navSidebar.style.display = 'none';
    }
  });
});
