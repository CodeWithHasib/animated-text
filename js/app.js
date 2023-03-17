let paragraph = `A web developer is a skilled professional who designs and builds websites using programming languages such as HTML, CSS, and JavaScript. They create engaging and interactive websites that are user-friendly and optimized for search engines. With a keen eye for design and a deep understanding of web technologies, web developers work collaboratively with designers and clients to ensure that their websites meet the needs of their users. They also stay up-to-date with the latest web trends and technologies, constantly seeking to improve their skills and knowledge. In short, web developers are crucial to the success of any business with an online presence.`
const text = document.getElementById("text-animation");
const textContent =`${paragraph}`;
let index = 0;
text.innerHTML = "<span>" + textContent.charAt(index) + "</span><span class='cursor'></span>";
index++;

const interval = setInterval(() => {
    text.innerHTML = "<span>" + textContent.substring(0, index) + "</span><span class='cursor'></span>";
    index++;
    if (index > textContent.length) {
        clearInterval(interval);
        text.querySelector(".cursor").style.display = "none";
    }
}, 100);
