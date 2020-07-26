import Flickity from 'flickity';

let optionsFeed = {
  watchCSS: false,
  wrapAround: true,
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false
}

if (matchMedia('screen and (min-width: 768px)').matches) {
  optionsFeed.watchCSS = true
}

let feedMaincarousel = new Flickity('.content__wrapper', optionsFeed);