$.lang={};
$.lang.en={
	lang:'en',
    title:'Junnam Baby Care',
    child:'Child',
    room:'Room',
    over:'Over',
	less:'Less',
	button_map_naver:'VIEW ON<br/>NaverMap',
	button_map_kakao:'VIEW ON<br/>KakaoMap',
};
$.lang.ko={
	lang:'ko',
    title:'전라남도 어린이집',
    child:'정원',
    room:'교실수',
    over:'이상',
	less:'이하',
	button_map_naver:'네이버지도<br/>에서보기',
	button_map_kakao:'카카오맵<br/>에서보기',
};
$.lang.jaxx={
	lang:'ja',
    title:'Junnam Baby Care',
    child:'Child',
    room:'Room',
    over:'Over',
	less:'Less',
	button_map_naver:'VIEW ON<br/>NaverMap',
	button_map_kakao:'VIEW ON<br/>KakaoMap',
};
$.lang.zhxx={
	lang:'zh',
    title:'Junnam Baby Care',
    child:'Child',
    room:'Room',
    over:'Over',
	less:'Less',
	button_map_naver:'VIEW ON<br/>NaverMap',
	button_map_kakao:'VIEW ON<br/>KakaoMap',
};

if(location.href.indexOf('lang=')<0) $.lang=$.lang.en;
else if(!$.lang[location.href.split('lang=')[1].split('&')[0]]) $.lang=$.lang.en;
else $.lang=$.lang[location.href.split('lang=')[1].split('&')[0]];

$(document).ready(function(){
    $('[data-lang]').each(function() {
        $(this).html($.lang[$(this).data('lang')]);
    });
});