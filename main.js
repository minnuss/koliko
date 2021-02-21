//***************** OPEN MENU ON CLICK HAMB BUTTON
selector(".menu").addEventListener('click', function () {
    this.classList.toggle('open');
    selector('header').classList.toggle('open');
    selector('.overlay').classList.toggle('open');

    // fixing issue with overlay in mobile with gallery
    if (selector('header').classList.contains('open') === false) {
        selector('header').style.width = '0%';
        selector('header').style.right = '2px';
    } else {
        selector('header').style.width = '100%';
        selector('header').style.right = null;
    }
});

function selector(s) {
    return document.querySelector(s)
};

//*****************CLOSE MENU ON CLICK HAMBURGER LINK
let navLink = document.querySelector('nav');
let menu = document.querySelector('.menu');

navLink.addEventListener('click', () => {
    selector(".menu").click();
});

/*****************SHOW BACK TO TOP ARROW ON SCROLL*************** */
let arrowUp = document.querySelector('.uparrow');

window.onscroll = function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        arrowUp.classList.add('arrowShow');
    } else {

        arrowUp.classList.remove('arrowShow');
    }
};


