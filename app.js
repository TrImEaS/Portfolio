//Effect TypeWriter function for welcome txt every page load 

document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    function typeWriter() {
        let txt = 'Web Developer';
        let speed = 60;
        if (i < txt.length) {
            document.getElementById("typewriter").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    } setTimeout(typeWriter, 900)
})