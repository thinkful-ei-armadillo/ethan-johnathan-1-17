'use strict';

const addItem = function (event) {

  event.preventDefault();

  const itemInput = $('#shopping-list-entry');
  const itemList = $('.shopping-list');

  itemList.append(
    `<li>
    <span class="shopping-item">${itemInput.val()}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button>
    </div>
    </li>`
  );

  itemInput.val('');
};

const toggleItem = function (event) {

  const button = $(event.currentTarget);

  const label = button.parents('.shopping-item-controls').prev();

  label.toggleClass('shopping-item__checked');
};

const removeItem = function (event) {

  const button = $(event.currentTarget);

  const item = button.parents('li');

  item.remove();


};

const main = function () {

  // attach event for add
  $('#js-shopping-list-form').on('submit', addItem);

  $('.shopping-list').on('click', 'button', (event) => {

    const button = $(event.target);

    console.log(button.text());

    if (button.hasClass('shopping-item-toggle') || button.find('.button-label').text('check')) {
      toggleItem(event);
    }

    // Not sure why we need to use else here, actually the else causes problems too

    else if (button.hasClass('shopping-item-delete') || button.find('.button-label').text('delete')) {
      removeItem(event);

    }
  });

};

$(main);
