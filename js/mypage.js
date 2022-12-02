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

        //탭!!!!!!!!
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
    
            // $(this).siblings().children('span').css({
            //     display:'none'
            // })
            // $(this).children('span').css({
            //     display:'block'
            // })
            
        });
        $('li[data-tab="mytab_tit_chk"]').trigger('click');


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

    //예매목록 3개만 넣어놓기
    for(let i = 0;i<2;i++){
        $('.tab1').append(myticket);
    }
    //예매확인탭에는 5개!!! 5개 이상부터는 페이지 나뉘어지게, 페이지네이션 활성화..이건 어떻게?
    for(let i = 0;i<4;i++){
        $('.tab2').append(myticket);
    }
    

    //예매내역이 있는 회원이라면 예매내역이 보이게 하고, 없는 회원이라면 "예매내역이 없습니다." 라는 멘트가 적힌 박스가 보이게
    //이것도 물어봐야겠다~
    $('#reserv_chk').click(function(){
        $('.mytit_null_box span').text("예매")

        $('.my_sort_btn').removeClass('zindex')
        $(this).addClass('zindex')

        $('.mytit_null_box').css({
            display : 'none'
        })
        $('.mytit_list_table').css({
            display : 'block'
        })

    });

    $('#reserv_cancel').click(function(){
        $('.mytit_null_box span').text("취소")

        $('.my_sort_btn').removeClass('zindex')
        $(this).addClass('zindex')

        $('.mytit_list_table').css({
            display : 'none'
        })
        $('.mytit_null_box').css({
            display : 'block'
        })
    });
    
});