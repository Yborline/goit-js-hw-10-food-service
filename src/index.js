import cardsFood from "./menu.json"

import toggleTheme from "./createTheme"
import createMurkupList from "./createMurkup"


const listFoodEl = document.querySelector('.js-menu');


const createMurkup = createMurkupList(cardsFood);
listFoodEl.insertAdjacentHTML('afterbegin', createMurkup);

const sevedTheme = localStorage.getItem('createTheme');
  document.body.classList.add('light-theme')

const toggleSwitchTheme = document.querySelector('#theme-switch-toggle')

toggleSwitchTheme.addEventListener('click', toggleTheme);

// сonsole.log(document.body.className);
