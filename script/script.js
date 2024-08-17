const details = document.querySelectorAll("details");

details.forEach(det => {
    det.addEventListener("click", () => {
        details.forEach(d => d.removeAttribute("open"));
    })
})