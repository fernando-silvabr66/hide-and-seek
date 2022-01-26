const myMenu = document.querySelector('.my-mob-menu');
const myMenuBtn = document.querySelector('.my-baricon');
const myCloseBtn = document.querySelector('.my-close-menu');
const myPortfolioBtn = document.querySelector('.my-btn-Portfolio');
const myAboutBtn = document.querySelector('.my-btn-About');
const myContactBtn = document.querySelector('.my-btn-Contact');

function showMyMobMenu(e) {
  e.preventDefault();
  myMenu.style.display = 'block';
}

function hideMyMobMenu() {
  myMenu.style.display = 'none';
}

myMenuBtn.addEventListener('click', showMyMobMenu);
myCloseBtn.addEventListener('click', hideMyMobMenu);
myPortfolioBtn.addEventListener('click', hideMyMobMenu);
myAboutBtn.addEventListener('click', hideMyMobMenu);
myContactBtn.addEventListener('click', hideMyMobMenu);