import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
  
  function createGalleryItems() {
      const galleryMarkup = galleryItems.map(({ original, preview, description }) => {
          return `<a class="gallery__item" href=${original}>
          <img class="gallery__image" src=${preview} alt=${description} title=${description}"/>
        </a>`
      }
      ).join('');
      return galleryMarkup;
      
  }
let gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", function () {
  gallery.options.captionDelay = 250;
});