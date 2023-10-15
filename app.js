// Effect TypeWriter function for welcome txt every page load

document.addEventListener('DOMContentLoaded', () => {
  let i = 0

  function typeWriter () {
    const txt = 'Frontend Developer'
    const speed = 60

    if (i < txt.length) {
      document.getElementById('typewriter').textContent += txt.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    }
  }
  setTimeout(typeWriter, 0)
})

// Hover for logo

function setLogoStyles (color, borderColor) {
  const logo = document.getElementById('nav_logo_t')
  logo.style.color = color
  logo.style.borderColor = borderColor
}

const hero = document.getElementById('nav_hero')

hero.addEventListener('mouseover', () => {
  setLogoStyles('#c9cefc', '#c9cefc')
})

hero.addEventListener('mouseleave', () => {
  setLogoStyles('#fff', '#fff')
})

// Changes nav when user isn't in top

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav')
  if (window.scrollY > 100) {
    nav.style.backgroundColor = '#080c18'
  } else {
    nav.style.backgroundColor = 'transparent'
  }
})

// Scroll function id to id
function scrollNav (scrollButtonId, toScrollId) {
  const scrollButton = document.getElementById(scrollButtonId)
  const toScroll = document.getElementById(toScrollId)

  if (scrollButton && toScroll) {
    scrollButton.addEventListener('click', function () {
      toScroll.scrollIntoView({ behavior: 'smooth' })
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  scrollNav('home', 'intro_container')
  scrollNav('about', 'about_scroll')
  scrollNav('skills', 'skills_scroll')
  scrollNav('projects', 'projects_scroll')
  scrollNav('contact', 'contact_container')
  scrollNav('top-btn', 'intro_container')
})
