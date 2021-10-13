import cardsFood from "./menu.json"
import foodCardsTpl from "../templates/gallery_foods.hbs"



const listFoodEl = document.querySelector('.js-menu');


const createMurkup = createMurkupList(cardsFood);
listFoodEl.insertAdjacentHTML('afterbegin', createMurkup);

function createMurkupList (cardsFood) {
    return foodCardsTpl(cardsFood);
}

console.log(listFoodEl);