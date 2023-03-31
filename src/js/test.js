import itemsTemplate from '../templates/gallery-items.hbs';


// const markup = itemsTemplate({items: ['html', 'css', 'js', 'react']});
const markup = itemsTemplate(['html', 'css', 'js', 'react']);

const gallery = document.querySelector('.js-gallery');

gallery.insertAdjacentHTML('afterbegin', markup);