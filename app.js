const counters = document.querySelectorAll(".counter")
let page = [1, 2, 3, 4, 5]
let pageName = ["index.html", "page2.html", "page3.html", "page4.html"]
counters.forEach((counter, index) => {
    counter.addEventListener('click', () => {
        rows = index % 5;
        counter.style.filter = "Brightness(75%)";
        window.location.href = pageName[rows]
    })
})
