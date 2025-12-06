const monke = document.getElementById('monke');

// Make sparkles
for (let i = 0; i < 30; i++) {
    let s = document.createElement("div");
    s.classList.add("sparkle");
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() * 6 + "s";
    s.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.body.appendChild(s);
}

// Move monke when tapped or clicked
function moveMonke(e) {
    let x = e.clientX || e.touches?.[0]?.clientX;
    let y = e.clientY || e.touches?.[0]?.clientY;

    monke.style.transition = "transform 0.4s ease-out";

    monke.style.transform = `
        translate(${x - 90}px, ${y - 90}px)
    `;
}

document.addEventListener("click", moveMonke);
document.addEventListener("touchstart", moveMonke);
