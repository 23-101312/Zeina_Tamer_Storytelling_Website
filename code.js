document.getElementById("nav_items").innerHTML += `
        <li><a href="#section_2">Building</a></li>
        <li><a href="#window1_section">Window 1</a></li>
        <li><a href="#window2_section">Window 2</a></li>
        <li><a href="#window3_section">Window 3</a></li>
        <li><a href="#window4_section">Window 4</a></li>`

let sound_btn = document.getElementById("sound_toggle");
let audioElements = document.querySelectorAll("audio");

sound_btn.addEventListener("click", () => {
  audioElements.forEach(a => {
    a.muted = !a.muted;   
  });
});

let introAudio = document.getElementById("intro_audio");
let section1 = document.querySelector(".section_1");

section1.addEventListener("mouseenter", () => {
  introAudio.currentTime = 0;
  introAudio.play();
});

section1.addEventListener("mouseleave", () => {
  introAudio.pause();
  introAudio.currentTime = 0;
});

let crowdAudio = document.getElementById("crowd_audio");
let section2 = document.querySelector(".section_2");

section2.addEventListener("mouseenter", () => {
  crowdAudio.currentTime = 0;
  crowdAudio.play();
});

section2.addEventListener("mouseleave", () => {
  crowdAudio.pause();
  crowdAudio.currentTime = 0;
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
};

let stories = [
  [
    {
      img: "assets/1_1.png",
      text: "I've written these words so many times... but they never feel right.",
      audio: "assets/letter1.mp3"
    },
    {
      img: "assets/1_2.png",
      text: "If I finish this... everything changes.",
      audio: "assets/letter2.mp3"
    },
    {
      img: "assets/1_3.png",
      text: "Maybe tomorrow... when it feels a little less heavy.",
      audio: "assets/letter3.mp3"
    }
  ],
  [
    {
      img: "assets/2_1.png",
      text: "You never actually hear what I'm trying to say.",
      audio: "assets/argument1.mp4"
    },
    {
      img: "assets/2_2.png",
      text: "I'm talking, but you only hear the parts that scare you.",
      audio: "assets/argument2.mp3"
    },
    {
      img: "assets/2_3.png",
      text: "I don't even know when we stopped understanding each other.",
      audio: "assets/argument3.mp3"
    }
  ],
  [
    {
      img: "assets/3_1.png",
      text: "I almost forgot how young we all were.",
      audio: "assets/grandpa1.mp3"
    },
    {
      img: "assets/3_3.png",
      text: "They all look so alive here... I remember their voices.",
      audio: "assets/grandpa2.mp3"
    },
    {
      img: "assets/3_2.png",
      text: "Time moves fast... sometimes I wish I could visit it again.",
      audio: "assets/grandpa3.mp3"
    }
  ],
  [
    {
      img: "assets/4_1.png",
      text: "Is this real...? Did I actually get in?",
      audio: "assets/happy1.mp3"
    },
    {
      img: "assets/4_2.png",
      text: "I can't believe this... all those nights actually meant something.",
      audio: "assets/happy2.mp3"
    },
    {
      img: "assets/4_3.png",
      text: "Everything's about to change... and I'm still taking it in.",
      audio: "assets/happy3.mp3"
    }
  ]
];

let currentFrame = [0, 0, 0, 0];

let nextIndex = [
  [1, 2, 0],
  [1, 2, 0],
  [1, 2, 0],
  [1, 2, 0]
];

let prevIndex = [
  [2, 0, 1],
  [2, 0, 1],
  [2, 0, 1],
  [2, 0, 1]
];

function showFrame(storyIndex) {
  let frameIndex = currentFrame[storyIndex];
  let frame = stories[storyIndex][frameIndex];

  let img = document.getElementById("w" + (storyIndex + 1) + "_img");
  let text = document.getElementById("w" + (storyIndex + 1) + "_text");
  let audio = document.getElementById("w" + (storyIndex + 1) + "_audio");

  img.src = frame.img;
  text.innerHTML = frame.text;
  audio.src = frame.audio;
}

function nextFrame(storyIndex) {
  currentFrame[storyIndex] = nextIndex[storyIndex][currentFrame[storyIndex]];
  showFrame(storyIndex);
}

function prevFrame(storyIndex) {
  currentFrame[storyIndex] = prevIndex[storyIndex][currentFrame[storyIndex]];
  showFrame(storyIndex);
}

function playAudio(storyIndex) {
  let audio = document.getElementById("w" + (storyIndex + 1) + "_audio");
  audio.play();
}

function stopAudio(storyIndex) {
  let audio = document.getElementById("w" + (storyIndex + 1) + "_audio");
  audio.pause();
  audio.currentTime = 0;
}

for (let i = 0; i < stories.length; i++) {
  showFrame(i);
}


document.getElementById("footer_container").innerHTML += `
<div id="footer_section">
      <h3>Follow Us</h3>
      <div class="social_links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
      </div>
    </div>

    <div id="footer_section">
      <h3>Contact</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +20 123 456 7890</p>
      <p>Address: Cairo, Egypt</p>
    </div>

    <div id="footer_section">
      <h3>Newsletter</h3>
      <p>Subscribe to stay updated.</p>
      <form class="newsletter_form">
        <input type="email" placeholder="Enter your email" required>
        <button type="submit">Subscribe</button>
      </form>
    </div>`


document.getElementById("footer_copy").innerHTML += `  © 2025 Your Website. All rights reserved.`  
