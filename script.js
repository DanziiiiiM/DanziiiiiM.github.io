
  // Finder den knap der åbner og lukker menuen
  const menuButton = document.querySelector('.menu-knap');
  // Den finder selve menu id 
  const menu = document.getElementById('menu');
// den kigger efter om der bliver trykket på noget 
  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
//Hvis der bliver trykker skifter den siden eller lukker den menuner

//Denne retuerner true, hvis Toggle() bliver tilføjet 
const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
//Den opdater arialabal så der tilgængelighed 
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', false);
    }
  });
//Den finder scrollx
  const container = document.querySelector('.scrollx');
  // Finder de forskellige 
  const items = container.querySelectorAll('a');
  // Denne knappen til højre og venstre.
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');
  // Holder styr på hvilket item vi er på
  let currentIndex = 0;

  function scrollToItem(index) {
    // Finder det item, vi vil scrolle til
    const item = items[index];
     // Scroller 
    container.scrollTo({
      left: item.offsetLeft,
      behavior: 'smooth'
    });
  }
// laver pilen til højre 
  btnRight.addEventListener('click', () => {
    // tjekker at det ikke er sidste item. 
    if (currentIndex < items.length - 1) {
      //Går frem
      currentIndex++;
      //scroller til det næste item
      scrollToItem(currentIndex);
    }
  });
// laver pilen til venstre 
  btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      // Går tilbage 
      currentIndex--;
      //scroller til det tidligere item
      scrollToItem(currentIndex);
    }
  });
