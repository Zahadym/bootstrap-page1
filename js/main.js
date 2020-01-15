// function setHeiHeight() {
//     $('.header').css({
//         height: $(window).height() + 'px'
//     });
// }
// setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
// $(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)
})