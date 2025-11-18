document.getElementById("nav_items").innerHTML += `<li><a href="">Building</a></li>
        <li><a href="">Window 1</a></li>
        <li><a href="">Window 2</a></li>
        <li><a href="">Window 3</a></li>
        <li><a href="">Window 4</a></li>`

let sound_btn = document.getElementById("sound_toggle");
let audioElements = document.querySelectorAll("audio");

sound_btn.addEventListener("click", () => {
  audioElements.forEach(a => {
    a.muted = !a.muted;   
  });
});


document.getElementById("titles").innerHTML += `
<h1>SONDER</h1>
<h2>Every window holds a story we rarely notice.</h2>`

let windows = [
    {
        label: "Window 1",
        title: "A MESSAGE SHE CAN’T BRING HERSELF TO SEND…",
        link: "#window1_section"
    },
    {
        label: "Window 2",
        title: "TWO VOICES, ONE BREAKING POINT",
        link: "#window2_section"
    },
    {
        label: "Window 3",
        title: "PAGES WORN, STORIES NEVER FORGOTTEN.",
        link: "#window3_section"
    },
    {
        label: "Window 4",
        title: "ONE LETTER. ONE DREAM REALIZED",
        link: "#window4_section"
    }
];

document.getElementById("building_grid").innerHTML += "";

for (let i = 0; i < windows.length; i++) {
    document.getElementById("building_grid").innerHTML += 
    `
    <div class="window_cell">
        <div class="window_overlay">
            <p class="window_label">${windows[i].label}</p>
            <h3>${windows[i].title}</h3>
            <a href="${windows[i].link}" class="window_btn">Open Window</a>
        </div>
    </div>
    `;
}
