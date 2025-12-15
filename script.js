const videos = document.getElementById("videos");

const data = Array.from({ length: 20 }).map((_, i) => ({
  title: `Очень интересное видео ${i + 1}`,
  channel: `Канал ${i + 1}`,
  views: `${(i + 1) * 15} тыс. просмотров`,
  time: `${i + 1} день назад`,
  thumb: `https://picsum.photos/seed/youtube${i}/480/270`
}));

data.forEach(v => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="thumbnail" src="${v.thumb}">
    <div class="info">
      <div class="channel"></div>
      <div class="text">
        <h4>${v.title}</h4>
        <p>${v.channel}</p>
        <p>${v.views} • ${v.time}</p>
      </div>
    </div>
  `;

  videos.appendChild(card);
});

