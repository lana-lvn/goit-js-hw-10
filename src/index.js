import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Notiflix from "notiflix";


const refs = {
breedEl: document.querySelector(".breed-select"),
 loadingEl: document.querySelector(".loader"),
 errorEl: document.querySelector(".error"),
 catInfoEl: document.querySelector(".cat-info"),

};

refs.breedEl.addEventListener('change', findCatInfo);


fetchBreeds().then(addAllCatsToList).catch(showError);

fetchCatByBreed;

let shownCat = '';

function addAllCatsToList(data) { 
    const catOption = data.map(cat => {
        const catOption = `<option value="${cat.id}">${cat.name}</option>`
        return catOption;
    }).join('');


    refs.breedEl.insertAdjacentHTML('beforeend', catOption);
    
    new SlimSelect({
    select: '.breed-select'
});
refs.breedEl.classList.remove('is-hidden');
};

function findCatInfo(event) {
    const catId = event.currentTarget.value;

    if (catId === shownCat) {
        return;
    }

    makeCatInfoInvisible();
    makeLoadingVisible();
    fetchCatByBreed(catId).then(shownCatInfo).catch(showError);

};

function shownCatInfo(item) { 
    const catImg = item[0];
    const catInfo = catImg.breeds[0];
    makeCatCard(catImg, catInfo);

    makeCatInfoVisible();
    makeLoadingInvisible();
};

function showError(error) { 
if (error) {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    makeLoadingInvisible();
}
};

function makeCatCard(catImg, catInfo) { 

    const markup = `<div class="container">
    <img src="${catImg.url}" alt="${catInfo.name}"/>
    </div>
    <div>
    <h1 class="title">${catInfo.name}</h1>
    <p>${catInfo.description}</p>
    <p class="habits">${catInfo.temperament}</p>
    </div>`;
    
    refs.catInfoEl.innerHTML = markup;
    shownCat = catInfo.id;

};

function makeCatInfoInvisible() { 
    refs.catInfoEl.classList.add('is-hidden');
};

function makeCatInfoVisible() { 
    refs.catInfoEl.classList.remove('is-hidden');

};

function makeLoadingInvisible() { 
    refs.loadingEl.classList.add('is-hidden');
};

function makeLoadingVisible() { refs.loadingEl.classList.remove('is-hidden'); };