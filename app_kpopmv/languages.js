$.lang={};
$.lang.en={
	lang:'en',
  title:'kpop music video',
  broadcast:'broadcast',
  agency:'agency',
  celebrity:'celebrity',
	youtuber:'youtuber',
	viewall:'view all',
};
$.lang.ko={
	lang:'ko',
	title:'kpop music video',
  broadcast:'broadcast',
  agency:'agency',
  celebrity:'celebrity',
	youtuber:'youtuber',
	viewall:'view all',
};
$.lang.ja={
	lang:'ja',
	title:'kpop music video',
  broadcast:'broadcast',
  agency:'agency',
  celebrity:'celebrity',
	youtuber:'youtuber',
	viewall:'view all',
};
$.lang.zh={
	title:'kpop music video',
  broadcast:'broadcast',
  agency:'agency',
  celebrity:'celebrity',
	youtuber:'youtuber',
	viewall:'view all',
};

if(location.href.indexOf('lang=')<0) $.lang=$.lang.en;
else if(!$.lang[location.href.split('lang=')[1].split('&')[0]]) $.lang=$.lang.en;
else $.lang=$.lang[location.href.split('lang=')[1].split('&')[0]];

$(document).ready(function(){
    $('[data-lang]').each(function() {
        $(this).html($.lang[$(this).data('lang')]);
    });
});
