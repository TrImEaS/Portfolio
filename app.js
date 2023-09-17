//Effect TypeWriter function for welcome txt every page load 

document.addEventListener('DOMContentLoaded', () => {
    let i = 0;

    function typeWriter() {
        let txt = 'Frontend Developer';
        let speed = 60;

        if (i < txt.length) {
            document.getElementById("typewriter").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    } setTimeout(typeWriter, 0);
})

//Hover for logo

function setLogoStyles(color, borderColor) {
    const logo = document.getElementById('nav_logo_t');
    logo.style.color = color;
    logo.style.borderColor = borderColor;
}

let hero = document.getElementById('nav_hero');

hero.addEventListener('mouseover', () => {
    setLogoStyles("#5cd9e2", "#5cd9e2");
});

hero.addEventListener('mouseleave', () => {
    setLogoStyles("#fff", "#fff");
});


//Changes nav when user isn't in top

window.addEventListener('scroll', () =>{
    let nav = document.getElementById('nav');
    if (window.scrollY > 100) {nav.style.backgroundColor = '#080c18';} 
    else {nav.style.backgroundColor = 'transparent';}
});

