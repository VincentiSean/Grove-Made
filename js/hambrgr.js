function toggleHam() {
    let hmbrgr = document.getElementById("hambrgr-icon");
    hmbrgr.classList.toggle("open");

    let menu = document.getElementById('menu-section');
    menu.classList.toggle('open-menu');
    menu.classList.toggle('fadeout');
}