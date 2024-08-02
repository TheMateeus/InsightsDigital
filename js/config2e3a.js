$(document).ready(function(){
    resolucao();
	
    $('a.botaoCTA').click(function(e){ 
        e.preventDefault(); $('body').addClass('janelaAtiva');

        $('.formJanela:not(.formCarregado)').append('<div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/5VFKUdZISF86ueFd2yIM2GHVPgIo42VEvhOWzZ4odFc52sf52LYapIRgxfjvZvOzN9"><script src="https://webforms.pipedrive.com/f/loader"></script></div>');

        $('.formJanela').addClass('formCarregado');

        return false;
    });
    $('.formJanela a.fechar').click(function(e){ e.preventDefault(); $('body').removeClass('janelaAtiva'); return false;});
    	
});

$(document).keydown(function(e){ if(e.keyCode === 27){ $('body').removeClass('janelaAtiva'); }});
$(document).mouseup(function(e){ var janelaIframe = $('.formJanela');  if (!janelaIframe.is(e.target) && janelaIframe.has(e.target).length === 0){ $('body').removeClass('janelaAtiva'); }});

$(window).scroll(function(){   
	if ($(this).scrollTop() > $('main').position().top ) {$('body').addClass('_flut');} else {$('body').removeClass('_flut');}
});

$(window).resize(function(){ resolucao(); });
	
function resolucao(){
	if($(this).width() <= 1000){ $('html').addClass('_320'); }else{ $('html').removeClass('_320'); }
	if($(this).width() > 1000){ $('html').addClass('_1000');  }else{ $('html').removeClass('_1000'); }    
}