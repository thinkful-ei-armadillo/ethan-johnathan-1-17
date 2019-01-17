'use strict';

const main = function () {

  const bigImage    = $('.hero img');
  const smallImages = $('.thumbnail');

  smallImages.on('focus', (event) => {

    const url = $(event.currentTarget).find('img').attr('src');
    const alt = $(event.currentTarget).find('img').attr('alt');

    bigImage.attr('src', url).attr('alt', alt);

  });
};

$(main);
