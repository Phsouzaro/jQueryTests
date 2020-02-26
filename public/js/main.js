var frase = $('.frase').text();
var numPalavras = frase.split(' ').length;
var tamanhoFrase = $('#tamanho-frase').text(numPalavras);
var campo = $('.campo-digitacao');
var tempoRestante = $('#tempo-digitacao').text();

campo.on('input', function(){
    contadorPalavras();
    contadorCaracteres();
});
campo.one('focus', function(){
  contadorTempo();
});

function contadorCaracteres(){
  var conteudo = campo.val();
  qtdCaracteres = conteudo.length;
  $('#contador-caracteres').text(qtdCaracteres);
}
function contadorPalavras(){
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length -1;
  $('#contador-palavras').text(qtdPalavras);
}
function contadorTempo(){
  var cronometroID = setInterval(function(){
    tempoRestante--;
    $('#tempo-digitacao').text(tempoRestante);
    if(tempoRestante < 1){
      campo.attr('disabled',true);
      clearInterval(cronometroID);
    }
  },1000);
}
