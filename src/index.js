import menuBase from './menu.json';
import cardManuTpl from './templates/card-menu.hbs';

const menuContainer = document.querySelector('.js-menu');
const checkBoxEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// bodyEl.classList.add(Theme.LIGHT);
// bodyEl.classList.add(
//   localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
// );
menuContainer.insertAdjacentHTML('beforeend', createCardMarkup(menuBase));

function createCardMarkup(menuBase) {
  return menuBase.map(cardManuTpl).join('');
}

checkBoxEl.addEventListener('change', onCheckBoxClick);

bodyEl.classList.add(
  localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);

function onCheckBoxClick(e) {
  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    return;
  }
  localStorage.setItem('theme', Theme.LIGHT);
  bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
}
localStorage.getItem('theme') === Theme.DARK
  ? (checkBoxEl.checked = true)
  : (checkBoxEl.checked = false);
