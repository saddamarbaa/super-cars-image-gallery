const overlay = document.querySelector(".overlay");
const galleryImages = document.querySelectorAll(".gallery__image");
const overlayClose = document.querySelector(".close");

const handleClick = (event) => {
  // get src of the clicked image
  // const src = event.target.src;
  const src = event.currentTarget.querySelector("img").src;
  // console.log(src);

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
  overlayClose.addEventListener("click", closeImage);
});
