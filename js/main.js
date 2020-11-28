'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 5);

    switch (n) {
      case 0:
        btn.textContent = 'HELLO!!';
        break;
      case 1:
        btn.textContent = 'こんにちは！';
        break;
      case 2:
        btn.textContent = 'THANK YOU!';
        break;
      case 3:
        btn.textContent = 'ありがとう！';
        break;
      case 4:
        btn.textContent = 'CONTACT ME!!';
        break;
    }

  });
}