'use strict';

const addItem = function (event) {

  event.preventDefault();

  const itemInput = $('#shopping-list-entry');
  const itemList = $('.shopping-list');
  
  if (itemInput.val().length === 0) {
    return
  }

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


  $('#js-shopping-list-form').on('submit', addItem);

  $('.shopping-list').on('click', 'button', (event) => {

    const button = $(event.currentTarget);

    if (button.hasClass('shopping-item-toggle')) {
      toggleItem(event);
    }

    if (button.hasClass('shopping-item-delete')) {
      removeItem(event);
    }
  });

};

$(main);
