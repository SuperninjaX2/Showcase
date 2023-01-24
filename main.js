const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})
const hidden = document.querySelectorAll('.fade');
hidden.forEach((el) => observer.observe(el));

const scroll = document.querySelectorAll('.scroll');
hidden.forEach((el) => observer.observe(el));
