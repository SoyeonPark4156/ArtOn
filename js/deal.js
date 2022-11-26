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
    

    //header, 탭메뉴 따라다니게
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
    $('.tabs li').click(function(){

        let tab_id = $(this).attr('data-tab');

		$('.tab_content').removeClass('tab_current');
        $("#"+tab_id).addClass('tab_current');

        $('.tab_title').removeClass('tab_border_bot');
        $(this).addClass('tab_border_bot');
        
	})
 
});

function tab_style(){
    
}