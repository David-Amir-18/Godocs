const input = document.querySelector('.search-box input');
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        window.location.href="search.html";
    }
})

console.log("hello world");

// i tried something but did not work