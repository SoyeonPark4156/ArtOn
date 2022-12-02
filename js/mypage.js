$(document).ready(function(){

    //헤더 따라다니게 하기
        $(window).scroll(function(){
            let header_bot = $(window).scrollTop();
            let header_height = $('.header').height();
            if(header_height <= header_bot){
                $('.header').addClass('header_event')
                $("#wrap").css({
                    paddingTop: header_height
                })
            }
            else if(header_height >= header_bot){
                $('.header').removeClass('header_event')
                $("#wrap").css({
                    paddingTop: 0
                })
            }
        });


    let myticket = `<tr>
                        <td class="buy_date">2022.12.01</td>
                        <td class="per_info">
                            <div class="thumb_img">
                                <a href="">
                                    <img src="./img/poster1.jpg" alt="">
                                </a>
                            </div>
                            <div class="info_text">
                                <div class="perf_title">하리보 골드베렌 100주년 생일 기념전</div>
                                <div class="perf_date">2022.10.13 ~ 2023.03.12</div>
                                <div class="perf_spot">안녕 인사동 B1 인사센트럴뮤지엄</div>
                            </div>
                        </td>
                        <td class="booking_info">
                            <div class="b_i_titles">
                                <div>예약번호</div>
                                <div>관람일</div>
                                <div>매수</div>
                            </div>
                            <div class="b_i_content">
                                <div class="green">M221467118</div>
                                <div>상시</div>
                                <div>1매</div>
                            </div>
                        </td>
                        <td class="status">예매완료(입금완료)</td>
                    </tr>`

    //예매목록 5개만 넣어놓기
    for(let i = 0;i<4;i++){
        $('.mytit_list_tbody').append(myticket);
    }

    //탭!!!!!!!

    $('.mytabs_li').click(function(){

        let tab_id = $(this).attr('data-tab');

		$('.mypage_tab').removeClass('tab_curr');
        $("#"+tab_id).addClass('tab_curr');

        $(this).css({
            color:'#008049'
        })
        $(this).siblings().css({
            color: '#000'
        })

        $(this).siblings().children('span').css({
            width: '0'
        })
        $(this).children('span').css({
            width : '100%'
        })
        
	});

    $('li[data-tab="mytab_mypage"]').trigger('click');
});