const panels = document.querySelectorAll(".panel");

function toggleActive() {
    console.log("Toi da bam duoc hinh roi");
}

toggleActive();

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", toggleActive);
}