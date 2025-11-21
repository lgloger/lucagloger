document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("packOne");

  const images = [
    "../assets/wallpapers/White-Black-Wallpaper-Preview.png",
    "../assets/wallpapers/Dark_Blue-Black-Wallpaper-Preview.png",
    "../assets/wallpapers/Blue-Black-Wallpaper-Preview.png",
  ];

  let idx = 0;

  const showNext = () => {
    img.style.backgroundImage = `url('${images[idx]}')`;
    idx = (idx + 1) % images.length;
  }

  showNext();
  setInterval(showNext, 5000);
});
