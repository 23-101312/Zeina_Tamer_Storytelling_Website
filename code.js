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