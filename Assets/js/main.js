const tab = document.getElementsByClassName('features__tab__navtab__item');
const cards = document.getElementsByClassName('features__download__item');
const tabContent = document.getElementsByClassName('features__tab__section__item');
const tabActive = document.getElementsByClassName('active');
const accordionOpen = document.getElementsByClassName('open');
const accordion = document.getElementsByClassName('features__accordion__item');
const accordionItem = document.getElementsByClassName('features__collapse');
let width = screen.availWidth;

if( width <= '1024') {

} else {
  document.onreadystatechange = () => {
    let margin = 80;
    for ( let i = 0; i < cards.length; i++ ) {
      cards[i].style.marginTop = `${margin}px`;
      margin = margin*2;
    };
  };
}




for ( let i = 0; i < accordion.length; i++ ) {
  accordion[i].addEventListener('click', () => {
    removeClass(accordionOpen, 'open');
    addClass(accordion[i], accordionItem[i] ,'open');
  });
};

for ( let i = 0; i < tab.length; i++ ) {
  tab[i].addEventListener ('click', () => {
      removeClass(tabActive, 'active');
      addClass(tab[i],tabContent[i], 'active');
  });
};

const removeClass = ( elementItem, className ) => {
  for ( let i = 0; i < elementItem.length; i++ ) {
    elementItem[i].classList.remove(className);
  };
  for ( let i = 0; i < elementItem.length; i++ ) {
    elementItem[i].classList.remove(className);
  };
};

const addClass = (elementHead, elementItem, className) => {
  elementHead.classList.add(className);
  elementItem.classList.add(className);
};