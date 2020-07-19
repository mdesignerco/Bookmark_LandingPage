const tab = document.getElementsByClassName('features__tab__navtab__item');
const tabActive = document.getElementsByClassName('active');
const tabContent = document.getElementsByClassName('features__tab__section__item');
const cards = document.getElementsByClassName('features__download__item');
const accordion = document.getElementsByClassName('features__accordion__item');

document.onreadystatechange = () => {
  let margin = 80;
  for ( let i = 0; i < cards.length ; i++) {
    cards[i].style.marginTop = `${margin}px`;
    margin = margin*2;
  }
}

for ( let i = 0; i < tab.length; i++ ) {
  accordion[i].addEventListener ('click', () => {
    
  })
  tab[i].addEventListener ('click', () => {
      removeClass();
      addClass(tab[i], i);
  });
};

const removeClass = () => {
  for ( let i = 0; i < tabActive.length; i++ ) {
    tabActive[i].classList.remove('active');
  }
  for ( let i = 0; i < tabActive.length; i++ ) {
    tabActive[i].classList.remove('active');
  }
};

const addClass = (element, index) => {
  element.classList.add('active');
  tabContent[index].classList.add('active');
};
