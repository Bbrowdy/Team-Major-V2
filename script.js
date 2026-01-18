// Placeholder YouTube API Key and Channel ID
const API_KEY = "YOUR_API_KEY_HERE"; // Replace later
const CHANNEL_ID = "UCrzb75rvct1bcwIA4v2qxHQ";

// Fetch latest videos
async function loadVideos() {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`);
  const data = await response.json();
  const videosDiv = document.getElementById("youtube-videos");
  videosDiv.innerHTML = "";

  data.items.forEach(item => {
    const videoId = item.id.videoId;
    if (!videoId) return;
    const videoElem = document.createElement("div");
    videoElem.innerHTML = `
      <iframe width="300" height="170" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
      <p>${item.snippet.title}</p>
    `;
    videosDiv.appendChild(videoElem);
  });
}

loadVideos();
