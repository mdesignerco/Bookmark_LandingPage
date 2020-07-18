const tab = document.getElementsByClassName('features__tab__navtab__item');
const tabActive = document.getElementsByClassName('active');
const tabContent = document.getElementsByClassName('features__tab__section__item')

for ( let i = 0; i < tab.length; i++ ) {
  tab[i].addEventListener ('click', ()=>{
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