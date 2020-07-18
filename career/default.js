var gData;
var gList;
var gConfmKey='devU01TX0FVVEgyMDIwMDUwNDE0MTM0MjEwOTcyNDQ=';
var gResultType='json';
var gCountPerPage=12;
var gCurrentPage=0;
var gTotalCount;
var gKeyword='';

$(window).resize(resizeWindow=function(){
    $('#content').css({height:$('html').height()-$('#header').height()-$('#footer').height(),visibility:'visible'});
});

$(document).ready(function(){

    $('.inpGender').bind('click',inpGender=function(){
        if(!$('.inpBirth').val()){
            $('.txtMsg').html($.lang['alert_inptBirth_input']);
            return true;
        }
        if($('.inpBirth').val().length!=8){
            $('.txtMsg').html($.lang['alert_inptBirth_yyyymmdd']);
            return true;
        }
        if(isNaN($('.inpBirth').val())){
            $('.txtMsg').html($.lang['alert_inptBirth_number']);
            return true;
        }
        if($('.inpGender:checked').length<1){
            $('.txtMsg').html($.lang['alert_inptGender_select']);
            return true;
        }
        var dateToday=new Date();
        var dateBirth=new Date($('.inpBirth').val().replace(/(\d{4})(\d{2})(\d{2})/g,'$1-$2-$3'));
        if(isNaN(dateBirth)){
            $('.txtMsg').html($.lang['alert_inptBirth_correct']);
            return true;
        }
        years=dateToday.getFullYear()-dateBirth.getFullYear();
        months=dateToday.getMonth()-dateBirth.getMonth();
        days=(dateToday.getDate()-dateBirth.getDate())/30.4;
        lapseMonth=(years*12+months+days).toFixed(0);
        lapseYear=(lapseMonth/12).toFixed(1);
        $('.txtMsg').html($.lang['text_age_prefix']+lapseYear+$.lang['text_age']+', '+lapseMonth+$.lang['text_month']);

        btnCalc();

        return true;
    });

    if(typeof(call)!='undefined'){
        if(call.getSharedPreferences('inpBirth')) $('.inpBirth').val(call.getSharedPreferences('inpBirth'));
        if(call.getSharedPreferences('inpGender')) $('.inpGender[value="'+call.getSharedPreferences('inpGender')+'"]').click();
    }
    if(!$('.inpBirth').val()) $('.txtMsg').html($.lang['alert_inptBirth_input']);
    resizeWindow();

    $('.btnSearchZipcodeRoad').unbind('click').click(searchZipcodeRoad=function(){
        if(gKeyword!=$('input[name="keyword"]').val()){
            $('#content').scrollTop(0);
            gCurrentPage=1;
            $('.areaList').html('');
        }else if(gCountPerPage*gCurrentPage>=gTotalCount){
            alert('마지막입니다.');
            return false;
        }else{
            gCurrentPage++;
        }
        $('#loading').fadeIn(100).fadeTo("fast",0.8)
        $.ajax({
            url:'https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do',
            type:'post',
            dataType:'jsonp',
            data:{
                confmKey:gConfmKey,
                resultType:gResultType,
                countPerPage:gCountPerPage,
                currentPage:gCurrentPage,
                keyword:$('input[name="keyword"]').val(),
            },
            error:function(xhr,status,error){ $('#loading').hide();return; },
            success:function(data){
                /*
                if(this.readyState == 4) {
                    alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
                }
               */
                if(!data){
                    alert('EXCEPTION 입력하신 정보를 다시한번 확인해주세요.');
                    return false;
                }
                gTotalCount=data.results.common.totalCount;
                gKeyword=$('input[name="keyword"]').val();
                gData=data.results.common;
                gList=data.results.juso;

                if(!gList || gList.length<1) return false;
                for(var i=0;i<gList.length;i++){
                    $('.areaList').append('<div class="item">'+
                        '<font><button class="btnCopy"></button>'+gList[i].zipNo+'</font><br/>'+
                        '<font><button class="btnCopy"></button>'+gList[i].roadAddr+'</font><br/>'+
                        '<font><button class="btnCopy"></button>'+gList[i].jibunAddr+'</font><br/>'+
                        '<font><button class="btnCopy"></button>'+gList[i].engAddr+'</font></div>');
                }
                $('.txtTotalCount').html(gData.totalCount);
                $('.txtCurrentCount').html($('.item').length);
                $('.btnCopy').unbind('click').click(function(e){
                    var strCopy=$(this).parent().text();
                    $('input[name="copy"]').val(strCopy);
                    $('input[name="copy"]').select();
                    document.execCommand('copy');
                    alert('복사완료');
                    return false;
                });
                $('#loading').hide();
            }
        }); // $.ajax({

        return false;
    }); // $('.btnSearch').unbind('click').click(function(){


    $('#content').scroll(function(e){
        if($('#loading:visible').length) return false;
        if($('#content').scrollTop()+$('#content').height()>=$('#content').prop('scrollHeight')-10){
            searchZipcodeRoad();
        }
    });


});