$(function () {

    // 스크롤
    $(window).scroll(function () {

        // 조건문 : 해당 요소(window)의 스크롤 위치가 20px 이상이면,
        if ($(this).scrollTop() > 20) {

            // .header한테 scrolled라는 클래스를 추가한다.
            $(".top").addClass("active");
            $(".header").addClass("scrolled");

        } else {

            // 그렇지 않을 경우, .header한테서 scrolled라는 클래스를 지운다.
            $(".top").removeClass("active");
            $(".header").removeClass("scrolled");
        }
    });

});