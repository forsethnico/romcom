// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button");
var createNewCoverButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var mainCover = document.querySelector(".main-cover");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var makeNewBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');
var userCover = document.querySelector("#cover");
var userTitle = document.querySelector("#title");
var userDesc1 = document.querySelector("#descriptor1");
var userDesc2 = document.querySelector("#descriptor2");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', showNewRandomCover);
randomCoverButton.addEventListener('click', showNewRandomCover);
createNewCoverButton.addEventListener('click', viewFormView);
viewSavedCoverButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', viewHomeView);
makeNewBookButton.addEventListener('click', makeMyBook);
saveCoverButton.addEventListener('click', saveBook);
savedCoversSection.addEventListener('click', printBooks);

// Create your event handlers and other functions here 👇
function showNewRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  assignCoverElements();
}

function viewFormView() {
  mainCover.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function viewSavedCovers() {
  printBooks();
  mainCover.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
}

function viewHomeView() {
  mainCover.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  savedView.classList.add('hidden');
}

function makeMyBook(event) {
  event.preventDefault();
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  assignCoverElements();
  removeInputs();
  viewHomeView();
}

function saveBook() {
  if (!savedCovers.includes(currentCover)) {
  savedCovers.push(currentCover);
  }
}

function printBooks() {
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `<section class="mini-cover" id="${savedCovers[i].id}">
    <img class="cover-image"  src="${savedCovers[i].cover}">
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
    </section>`;
  }
  findMiniCovers();
}

function assignCoverElements() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function findMiniCovers() {
  var miniCovers = document.querySelectorAll('.mini-cover')
  for (var i = 0; i < miniCovers.length; i++) {
    miniCovers[i].addEventListener('dblclick', deleteSavedCover);
  }
}

function deleteSavedCover(event) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (event.currentTarget.id == savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }
  printBooks();
}

function removeInputs() {
  userCover.value = "";
  userTitle.value = "";
  userDesc1.value = "";
  userDesc2.value = "";
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
