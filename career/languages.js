$.lang={};
$.lang.en={
	lang:'en',
    main_title:'Currency Calculation',
    info_title:'Currency Calculation',
    info_data:'Currency Data',
    info_date:'Currency Date',
	alert_error:'No exchange rate information.',
};
$.lang.ko={
	lang:'ko',
    main_title:'환율 계산',
    info_title:'환율 계산',
    info_data:'환율 데이터',
    info_date:'환율 날짜',
	alert_error:'환율정보가 없습니다.',
};
$.lang.ja={
	lang:'ja',
    main_title:'為替レート計算',
    info_title:'為替レート計算',
    info_data:'為替レートデータ',
    info_date:'為替レートの日付',
	alert_error:'為替レートの情報がありません。',
};
$.lang.zh={
	lang:'zh',
    main_title:'货币计算',
    info_title:'货币计算',
    info_data:'货币数据',
    info_date:'货币日期',
	alert_error:'没有汇率信息。',
};

if(location.href.indexOf('lang=')<0) $.lang=$.lang.en;
else if(!$.lang[location.href.split('lang=')[1].split('&')[0]]) $.lang=$.lang.en;
else $.lang=$.lang[location.href.split('lang=')[1].split('&')[0]];

$(document).ready(function(){
    $('[data-lang]').each(function() {
        $(this).html($.lang[$(this).data('lang')]);
    });
});