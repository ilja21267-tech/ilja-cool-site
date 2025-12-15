const videos = document.getElementById("videos");

const data = Array.from({ length: 12 }).map((_, i) => ({
  title: `Видео ${i + 1}`,
  channel: `Канал ${i + 1}`,
  views: `${(i + 1) * 12} тыс. просмотров`,
  thumb: `https://picsum.photos/seed/${i}/480/270`
}));

data.forEach(v => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="thumb" src="${v.thumb}">
    <div class="info">
      <div class="channel"></div>
      <div class="text">
        <h4>${v.title}</h4>
        <p>${v.channel}</p>
        <p>${v.views}</p>
      </div>
    </div>
  `;

  videos.appendChild(card);
});

