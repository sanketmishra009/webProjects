$(document).ready(() => {
    $(".menu-toggler").on('click', () => {
        console.log("clicked>>>>");
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    })
})