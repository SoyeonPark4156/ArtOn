$(document).ready(function(){

    $(document).on('click','.choice_btn', function(){
        $(this).css({
            background : '#fcffcb',
            color: '#22974a',
            border : '1px solid #22974a'
        })
    });


    // if(!confirm("삭제하시겠습니까?")) return;
    // 암튼 이런한거 강사님꺼 board.jsp 파일에 적혀있음.
    

    //header, 탭바 따라다니게
    let header_height = $('.header').height();
    let main_o_top = $('.main').offset().top - header_height;
    let tab_height = $('.tabs').height();
    let tab_o_top = $('.tabs').offset().top - tab_height;
    
    $(window).scroll(function(){
        let header_bot = $(window).scrollTop();
 
        if(main_o_top<= header_bot){
            $('.header').addClass('header_event')
            $("#wrap").css({
                paddingTop: header_height
            })
        }
        else if(main_o_top >= header_bot){
            $('.header').removeClass('header_event')
            $("#wrap").css({
                paddingTop: 0
            })
        };

        if(header_bot >= tab_o_top){
            $('.header').removeClass('header_event')
            $('.tabs').addClass('tab_event')
            $('#wrap').css({
                paddingTop : tab_height
            })
        }
        else if(header_bot <= tab_o_top){
            $('.tabs').removeClass('tab_event')
            $('#wrap').css({
                paddingTop : 0
            })
        };

    });

    //상단으로 이동시켜주는 버튼 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000){
            $('.btn_gotop').show();
        } else{
            $('.btn_gotop').hide();
        }
    });
    $('.btn_gotop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

    //탭메뉴 클릭시 탭 변환
    $('.tab_title').click(function(){

        let tab_id = $(this).attr('data-tab');

		$('.tab_content').removeClass('tab_current');
        $("#"+tab_id).addClass('tab_current');

        $('.tab_title').removeClass('tab_border_bot');
        $(this).addClass('tab_border_bot');
        
	});

    //리뷰탭 - 별점
    $('input[name="rating"]').click(function(){
        let rating_score = $(this).val();
        $('#input_rating').text(rating_score);
    });
    
    //리뷰탭 - 글 작성할 때 글자수 실시간 coount 해주는거
    $('#review_content').keyup(function(){
        let content_cnt = $(this).val().length;
        $('#text_counter').text(content_cnt);
    });

    //리뷰 작성칸에 사용자가 마우스 클릭하면 로그인된 회원만 후기 작성 가능하다고 알람띄우기
    $('#review_content').click(function(){
        alert("로그인한 회원만 작성가능합니다.")
        
    });

    //리뷰탭 - 후기 작성시 유효성 검사
    // rv_content => 예매한 사람만 작성할 수 있다고 alert 띄워주기.
    // 등록하기 할 때 디비 연동해서 유효성 검사할 것.

    //리뷰 등록하기
    $('#btn_submit_review').click(function(){

        let content_cnt = $('#review_content').val().length;
        let content = $('#review_content').val();
        let date = new Date();
        let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

        if(content_cnt <= 10){
            alert("10자 이상 입력해주세요!")
        }
        else if(content_cnt >= 500){
            alert("최대 500자까지 입력 가능합니다.")
        }
        else{
            alert("후기가 등록되었습니다.")
        
        $('.review_list').append(
                                `<div class="rv_list_box">
                                    <div class="rv_user_id">soy_4156</div>
                                    <div class="rv_uploaded_box">
                                        <div class="rv_uploaded"><span id="rv_upload_date">${today}</span></div>
                                        <div class="rv_uploaded"><span id="rv_uploaded_content">${content}</span></div>
                                    </div>
                                    <div class="rv_right_box">
                                        <div class="rv_star_rating">★★★★★</div>
                                        <div class="rv_modify_delete">
                                            <div class="rv_modify_btn">수정</div> |
                                            <div class="rv_delete_btn">삭제</div>
                                        </div>
                                    </div>
                                </div>`
        );
        }
    });


    //리뷰 리스트에서 리뷰 "수정" 버튼 누르면 수정할 수 있는 폼 보이게 하기
    $('.rv_modify_btn').click(function(){
        let rv_box = $(this).parents('.rv_list_box');
        

        rv_box.css({
            display : 'none'
        })
        $('.rv_modify_box').css({
            display : 'block'
        });

    })

    

});


