const overlay = document.querySelector(".overlay");
const galleryImages = document.querySelectorAll(".gallery__image");

const handleClick = (e) => {
  // get src of clicked image
  const src = e.target.src;

  const overlayImage = overlay.querySelector("img");
  overlayImage.src = src;

  // open overlay
  overlay.classList.add("open");

  // console.log(overlayImage.src);
};
const closeImage = () => {
  overlay.classList.remove("open");
};

galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener("click", handleClick);
  overlay.addEventListener("click", closeImage);
});
