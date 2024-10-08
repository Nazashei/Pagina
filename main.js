const videoLinks = [
    { url: "https://www.youtube.com/watch?v=3CILIGwoEBQ", title: "Pensamientos", thumbnail: "./Images/pensamientos.webp" },
    { url: "https://www.youtube.com/watch?v=H-O_0ssVs90", title: "Solo Aquí", thumbnail: "./Images/soloAqui.jpg" },
    { url: "https://www.youtube.com/watch?v=Xz5UqJOpSLw", title: "Intoxicarme", thumbnail: "./Images/intoxicarme.webp" },
    { url: "https://www.youtube.com/watch?v=_hCUGKId9Sk", title: "Cadenas", thumbnail: "./Images/voragine.webp" },
    { url: "https://www.youtube.com/watch?v=mg4U3QjYqww", title: "Huracan", thumbnail: "./Images/huracan.webp" },
    { url: "https://www.youtube.com/watch?v=XDsYh91e35s&pp=ygUVbGliZXJ0YWQgY292ZXIgYWlyYmFn", title: "Libertad", thumbnail: "./Images/libertad.jpg" },
    { url: "https://www.youtube.com/watch?v=M63VNT56CWE", title: "Kamikaze", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=IGxDFTRYpf4&t=10s", title: "Mamba Negra", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=Ty8SHrirMr8", title: "Sube Sube", thumbnail: "./Images/libertad.jpg" },
    { url: "https://www.youtube.com/watch?v=kF4hPxj6MPo", title: "Mecanismos de control", thumbnail: "./Images/voragine.webp" },
    { url: "https://www.youtube.com/watch?v=o4b3xCPgfHc", title: "Relampagos", thumbnail: "./Images/huracan.webp" },
    { url: "https://www.youtube.com/watch?v=BAHJiB-BXKk", title: "Cuchillos Guantanamera", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=AUjEHYpW2A0", title: "Motor Enfermo", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=EXQVC1viLW0", title: "Diez Dias Despues", thumbnail: "./Images/voragine.webp" },
    { url: "https://www.youtube.com/watch?v=kj_x7q6Vvic", title: "Perdido", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=nSiYoou1kHo", title: "Mi Sensacion", thumbnail: "./Images/unahora.jpg" },
    { url: "https://www.youtube.com/watch?v=tFsbEVZEQ1Q", title: "Colombiana", thumbnail: "./Images/huracan.webp" },
    { url: "https://www.youtube.com/watch?v=3OySvc1VspU", title: "Uber puber", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=VNj4zRhmx7w", title: "Jinetes Cromados", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=R_wB2PVVNrI", title: "Culpables", thumbnail: "./Images/huracan.webp" },
    { url: "https://www.youtube.com/watch?v=6aJnaPBO7pM", title: "Encerrada En El Placard", thumbnail: "./Images/voragine.webp" },
    { url: "https://www.youtube.com/watch?v=DgQuWCSrKU4", title: "Kalashnikov", thumbnail: "./Images/libertad.jpg" },
    { url: "https://www.youtube.com/watch?v=uLrt5O0Fk6Q", title: "Como Un Diamante", thumbnail: "./Images/alpa.jpg" },
    { url: "https://www.youtube.com/watch?v=mEo43CCyeQs", title: "Por Mil Noches", thumbnail: "./Images/libertad.jpg" },
    { url: "https://www.youtube.com/watch?v=S9BGjtbG9Fo", title: "Vivamos El Momento", thumbnail: "./Images/huracan.webp" },
    { url: "https://www.youtube.com/watch?v=DpFAiLGPU90", title: "Nunca Lo Olvides", thumbnail: "./Images/nunca.jpg" },
    { url: "https://www.youtube.com/watch?v=IFagRLy-G4Q", title: "Bajos Instintos", thumbnail: "./Images/voragine.webp" },
    { url: "https://www.youtube.com/watch?v=j43ROkzAmTQ&t=4s", title: "Mujer Amante", thumbnail: "./Images/mujer.jpg" },
    { url: "https://www.youtube.com/watch?v=Qh47eaKWXvA", title: "El Ultimo Ataque", thumbnail: "./Images/rata.jpg" },
    { url: "https://www.youtube.com/watch?v=JDhixIol9-4", title: "Preludio Obsesivo", thumbnail: "./Images/rata.jpg" },
    { url: "https://www.youtube.com/watch?v=kll5b0bYi3Q", title: "Apocalipsis Confort", thumbnail: "./Images/huracan.webp" }
];

let currentVideoIndex = 0;
let videosPerPage = 1; 


function adjustVideosPerPage() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        videosPerPage = 1; 
    } else if (screenWidth >= 600 && screenWidth < 1024) {
        videosPerPage = 2; 
    } else {
        videosPerPage = 4; 
    }
}

function updateVideoDisplay(filteredVideos = videoLinks) {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '';

    const start = currentVideoIndex;
    const end = Math.min(currentVideoIndex + videosPerPage, filteredVideos.length);

    for (let i = start; i < end; i++) {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const videoLink = document.createElement('a');
        videoLink.href = filteredVideos[i].url;
        videoLink.target = "_blank";

        const thumbnail = document.createElement('img');
        thumbnail.src = filteredVideos[i].thumbnail;
        thumbnail.alt = filteredVideos[i].title;
        thumbnail.classList.add('video-thumbnail');

        const title = document.createElement('h3');
        title.textContent = filteredVideos[i].title;

        videoLink.appendChild(thumbnail);
        videoLink.appendChild(title);
        videoItem.appendChild(videoLink);
        videoContainer.appendChild(videoItem);
    }
}

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex -= videosPerPage;
        updateVideoDisplay();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentVideoIndex + videosPerPage < videoLinks.length) {
        currentVideoIndex += videosPerPage;
        updateVideoDisplay();
    }
});


document.getElementById('search').addEventListener('input', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videoLinks.filter(video => video.title.toLowerCase().includes(query));
    currentVideoIndex = 0; 
    updateVideoDisplay(filteredVideos);
});


window.addEventListener('resize', () => {
    adjustVideosPerPage();
    updateVideoDisplay();
});

adjustVideosPerPage();
updateVideoDisplay();
