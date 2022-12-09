const itemCounter = require('./itemsConter.js');

describe('calculate the list item of homepage', () => {
  test('result should get the number of item', () => {
    document.body.innerHTML = `
    <ul id="list">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    `;
    const list = document.getElementById('list');
    const result = itemCounter(list);

    expect((result)).toBe(5);
  });

  test('result should get the number of item', () => {
    document.body.innerHTML = `
    <ul id="list"></ul>
    `;
    const list = document.getElementById('list');
    const result = itemCounter(list);

    expect((result)).toBe(0);
  });
});