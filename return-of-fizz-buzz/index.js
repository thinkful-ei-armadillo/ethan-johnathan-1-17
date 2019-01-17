'use strict';

const fizzBuzz = function (number) {

  if (number % 15 === 0) { return 'fizzbuzz' }
  if (number % 5 === 0) { return 'buzz' }
  if (number % 3 === 0) { return 'fizz' }

  return number;
};

const createHTML = function (data) {

  let html = '';

  switch (data) {

  case 'fizz':
    html += `
      <div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`;
    break;

  case 'buzz':
    html += `
      <div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`;
    break;

  case 'fizzbuzz':
    html += `
      <div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`;
    break;

  default:
    html += `
      <div class="fizz-buzz-item">
        <span>${data}</span>
      </div>`;
    break;
  }

  return html;
}

const init = function () {

  $('#number-chooser').on('submit', (event) => {

    const count = $('#number-choice').val();

    event.target.reset();

    let results = '';

    for (let i = 1; i <= count; i++) {
      results += createHTML(fizzBuzz(i));
    }

    $('.js-results').html(results);

    event.preventDefault();
  });
};

$(init);
