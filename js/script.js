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

    // 메뉴(li)에만 반응
    // .gnb li에 마우스를 갖다댔을 때,
    $(".gnb > li").on("mouseenter", function () {

        // 해당되는 요소(.gnb li)에 home이라는 클래스가 있으면
        if (!$(this).hasClass("home")) {

            // 이전 동작을 멈추고, .blur_box를 fadeIn 한다.
            $(".blur_box").stop().fadeIn(200);
        } else {

            // 아니면 이전 동작을 멈추고, .blur_box를 fadeOut 한다.
            $(".blur_box").stop().fadeOut(0);
        }

    });

    // nav 전체에서 벗어나면 끄기
    $(".gnb > li").on("mouseleave", function () {
        $(".blur_box").stop().fadeOut(200);
    });

});