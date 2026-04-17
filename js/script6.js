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

    // total 버튼 동작
    const minusBtn = document.querySelector('.plus_btn button:first-child'); // - 버튼 (첫 번째 버튼 선택)
    const plusBtn = document.querySelector('.plus_btn button:last-child'); // + 버튼 (마지막 버튼 선택)
    const countText = document.querySelector('.plus_btn p'); // 가운데 숫자 (수량 표시하는 텍스트)

    const select = document.getElementById('perfume'); // 셀렉트 박스 (향 선택)
    const totalText = document.querySelector('.total p:last-child'); // total 영역 (마지막 p 태그 = 결과 출력 부분)

    let count = 1; // 현재 수량 상태를 저장하는 변수 (기본값 1)
    let selectedName = ""; // 현재 선택된 상품 이름 저장 변수

    // 수량 업데이트 함수
    function updateTotal() {

        // 상품이 선택된 경우
        if (selectedName) {
            // 선택한 상품명 + 수량 표시
            totalText.textContent = `${selectedName} (${count}개)`;
        } else { // 아직 선택 안 했을 경우
            totalText.textContent = `0 (0개)`;
        }
    }

    // + 버튼
    plusBtn.addEventListener('click', () => {
        count++; // 수량 1 증가
        countText.textContent = count; // 화면에 숫자 반영
        updateTotal(); // total 영역 업데이트
    });

    // - 버튼
    minusBtn.addEventListener('click', () => {

        // 수량이 1보다 클 때만 감소 (0 이하 방지)
        if (count > 1) {
            count--;
            // 화면 숫자 업데이트
            countText.textContent = count;
            // total 영역 업데이트
            updateTotal();
        }
    });

    // 셀렉트 선택
    select.addEventListener('change', (e) => {
        // 선택된 option의 텍스트 가져오기
        selectedName = e.target.options[e.target.selectedIndex].text;

        // 수량을 1로 초기화
        count = 1;

        // 화면 숫자도 같이 변경
        countText.textContent = count;

        // total 영역 업데이트
        updateTotal();
    });

    // 코드 실행
    $(function () {

        // 대답 박스 숨김 처리
        $(".answer").hide();

        // 질문 박스 클릭 시 대답 박스가 부드럽게 내려왔다 올라감
        $(".question").click(function () {
            $(this).next().slideToggle();
        });
    });
});