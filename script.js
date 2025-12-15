const videosData = [
  {
    title: "Демо видео 1",
    thumb: "https://picsum.photos/400/220?1",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    title: "Демо видео 2",
    thumb: "https://picsum.photos/400/220?2",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    title: "Демо видео 3",
    thumb: "https://picsum.photos/400/220?3",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }
];

const videos = document.getElementById("videos");
const player = document.getElementById("player");
const video = document.getElementById("video");

function render(list) {
  videos.innerHTML = "";
  list.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${v.thumb}">
      <div class="info">${v.title}</div>
    `;
    card.onclick = () => openVideo(v.src);
    videos.appendChild(card);
  });
}

function openVideo(src) {
  video.src = src;
  player.style.display = "flex";
  video.play();
}

function closePlayer() {
  video.pause();
  player.style.display = "none";
}

function search() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  render(videosData.filter(v => v.title.toLowerCase().includes(q)));
}

render(videosData);
