const tab = document.getElementsByClassName('features__tab__navtab__item');
const cards = document.getElementsByClassName('features__download__item');
const tabContent = document.getElementsByClassName('features__tab__section__item');
const tabActive = document.getElementsByClassName('active');
const accordionOpen = document.getElementsByClassName('open');
const accordion = document.getElementsByClassName('features__accordion__item');
const accordionItem = document.getElementsByClassName('features__collapse');
const buttonRegister = document.getElementById('registerButton');
const inputEmail = document.getElementById('register');
const registerGroup = document.getElementById('registerGroup');
const logo = document.getElementById('logo');

let width = screen.availWidth;

let errorMessage = `
  <input
    id="register"
    type="text"
    placeholder="Enter your email address"
    required
  />
  <span class="input-message">Whoops, make sure it's an email</span>`;

let confirmationMessage = `
  <input
    id="register"
    type="text"
    placeholder="Enter your email address"
    required
  />
  <span class="input-message">Great!, You email has been send </span>`;

if( width <= '1024') {
  logo.src = './Assets/images/logo-bookmark-white.svg';
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
    addClass( accordion[i],'open' );
    addClass( accordionItem[i] ,'open' );
  });
};

for ( let i = 0; i < tab.length; i++ ) {
  tab[i].addEventListener ('click', () => {
      removeClass(tabActive, 'active');
      addClass(tab[i], 'active');
      addClass(tabContent[i], 'active');
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

const addClass = (elementHead, className) => {
  elementHead.classList.add(className);
};

const validateEmail = () => {
  let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let email = inputEmail.value;
  if (!expr.test(email)) {
    addClass(registerGroup, 'input__group-error');
    registerGroup.innerHTML = errorMessage;
  } else {
    addClass( registerGroup, 'input__group-great');
    registerGroup.innerHTML = confirmationMessage;
  };
};

buttonRegister.addEventListener ('click', validateEmail );