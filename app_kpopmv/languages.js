$.lang={};
$.lang.en={
	lang:'en',
  title:'kpop music video',
  broadcast:'broad<br/>cast',
  agency:'agency',
  celebrity:'celeb<br/>rity',
	youtuber:'youtu<br/>ber',
	viewall:'view<br/>all',
};
$.lang.ko={
	lang:'ko',
	title:'kpop music video',
  broadcast:'broad<br/>cast',
  agency:'agency',
  celebrity:'celeb<br/>rity',
	youtuber:'youtu<br/>ber',
	viewall:'view<br/>all',
};
$.lang.ja={
	lang:'ja',
	title:'kpop music video',
  broadcast:'broad<br/>cast',
  agency:'agency',
  celebrity:'celeb<br/>rity',
	youtuber:'youtu<br/>ber',
	viewall:'view<br/>all',
};
$.lang.zh={
	lang:'zh',
	title:'kpop music video',
  broadcast:'broad<br/>cast',
  agency:'agency',
  celebrity:'celeb<br/>rity',
	youtuber:'youtu<br/>ber',
	viewall:'view<br/>all',
};

if(location.href.indexOf('lang=')<0) $.lang=$.lang.en;
else if(!$.lang[location.href.split('lang=')[1].split('&')[0]]) $.lang=$.lang.en;
else $.lang=$.lang[location.href.split('lang=')[1].split('&')[0]];

$(document).ready(function(){
    $('[data-lang]').each(function() {
        $(this).html($.lang[$(this).data('lang')]);
    });
});
