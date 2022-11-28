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

    //리뷰탭 - 후기 작성시 유효성 검사
    $('#btn_submit_review').click(function(){
        let content_cnt = $('#review_content').val().length;
        if(content_cnt <= 10){
            alert("10자 이상 적어주세요!")
        }
        else if(content_cnt >= 500){
            alert("최대 500자까지 입력 가능합니다.")
        }

    alert("후기가 등록되었습니다.")
    });
});


