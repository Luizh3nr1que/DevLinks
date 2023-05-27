const mode = document.getElementById('toggleClick');
const html = document.documentElement;

mode.addEventListener('click', () => {
    if (html.classList.contains('light')) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
})



const progressBar = document.querySelector('.progress');
const links = document.querySelectorAll("a")

links.forEach(links => {
    links.addEventListener("mouseover", () => {
        progressBar.style.width = "100%";
    });

    links.addEventListener("mouseout", () => {
        progressBar.style.width = "0%";
    });
});