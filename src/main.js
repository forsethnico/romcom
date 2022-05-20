// Create variables targetting the relevant DOM elements here 👇
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoverButton = document.querySelector(".view-saved-button");
var makeNewCoverButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var mainCover = document.querySelector(".main-cover");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var makeNewBookButton = document.querySelector('.create-new-book-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', showNewRandomCover);
randomCoverButton.addEventListener('click', showNewRandomCover)
makeNewCoverButton.addEventListener('click', viewFormView);
viewSavedCoverButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', viewHomeView)
makeNewBookButton.addEventListener('click', makeMyBook)


// Create your event handlers and other functions here 👇
function showNewRandomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function viewFormView() {
  mainCover.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function viewSavedCovers() {
  mainCover.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
}

function viewHomeView() {
  mainCover.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
}

function makeMyBook(event) {
  var userCover = document.querySelector("#cover").value;
  var userTitle = document.querySelector("#title").value;
  var userDesc1 = document.querySelector("#descriptor1").value;
  var userDesc2 = document.querySelector("#descriptor2").value;
  covers.push(userCover);
  titles.push(userTitle);
  descriptors.push(userDesc1);
  descriptors.push(userDesc2);
  currentCover = new Cover(userCover, userTitle, userDesc1, userDesc2);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  viewHomeView();
  event.preventDefault();
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
