function shopMenu() {
    clearChevs();
    let chevron = document.getElementById('shop-chev');
    chevron.classList.toggle('rotated');

    clearDivs();
    let div = document.getElementById('shop-div');
    div.style.display = 'block';
}

function deskMenu() {
    clearChevs();
    let chevron = document.getElementById('desk-chev');
    chevron.classList.toggle('rotated');

    clearDivs();
    let div = document.getElementById('desk-div');
    div.style.display = 'block';
}

function toolMenu() {
    clearChevs();
    let chevron = document.getElementById('tool-chev');
    chevron.classList.toggle('rotated');
    
    clearDivs();
    let div = document.getElementById('tool-div');
    div.style.display = 'block';
}

function officeMenu() {
    clearChevs();
    let chevron = document.getElementById('office-chev');
    chevron.classList.toggle('rotated');
    
    clearDivs();
    let div = document.getElementById('office-div');
    div.style.display = 'block';
}

function clearChevs() {
    // Clear all other rotated chevrons
    let chevs = document.getElementsByClassName('rotated');
    let i;
    for (i = 0; i < chevs.length; i++) {
        chevs[i].classList.toggle('rotated');
    }

    // Special case for main 'Shop' chevron
    let shopChev = document.getElementById('shop-chev');
    if (!shopChev.classList.contains('rotated')) {
        shopChev.classList.toggle('rotated');
    }
}

function clearDivs() {
    let divs = document.getElementsByClassName('menu-divs');
    let i;
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
}
