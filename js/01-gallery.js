import { galleryItems } from './gallery-items.js';


// Change code below this line

// console.log(galleryItems);

const galeryEl = document.querySelector('.gallery');
// console.log(galeryEl)

galeryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
  
  function createGalleryItems() {
      const galleryMarkup = galleryItems.map(({ original, preview, description }) => {
          return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source="${original}" 
                  alt="${description}"/>
              </a>
          </div>`
      }
      ).join('');
      return galleryMarkup;
      
  }
 
  galeryEl.addEventListener('click', onGalleryContainerClick);
  
  function onGalleryContainerClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
      return;
    } 

  let urlOriginalImg;
  urlOriginalImg = e.target.dataset.source;
  const modalImg = basicLightbox.create(`
      <img src="${urlOriginalImg}" width="800" height="600">
  `);

  modalImg.show();
  
  //закрытие по Esc

  const escPress = function (e) {
    if (e.key !== "Escape") {
      console.log("escPress ~ e.key", e.key);
      return;
    }
    modalImg.close();
    galeryEl.removeEventListener("keydown", escPress);
  };

  galeryEl.addEventListener("keydown", escPress);
};

galeryEl.addEventListener("click", onGalleryContainerClick);