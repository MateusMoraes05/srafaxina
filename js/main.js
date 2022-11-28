

//SCRIPT DO MENU

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg"

    }
}
// FINAL SCRIPT DO MENU

// Smooth Scrolling
$("#navbar a #funcmenu .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.8;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

function goToAnotherPage() {
    window.location = 'https://api.whatsapp.com/send?phone=5511948250899&text=Olá, tenho interesse em trabalhar com vocês.'
}








