function tocaSom(seletorAudio){
     const elemento = document.querySelector(seletorAudio);
     if (elemento!=null && elemento.localName==='audio'){
elemento.play()
     }else{
alert('Elemento não encontradom ou seltor inválido')
     }
         
    const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];

const idAudio = `#son_${instrumento}`;

tecla.onclick = function (){
    tocaSom(idAudio);
}
 tecla.onkeydown = function (evento){
    if(evento.code ==='space' || evento.code === 'Enter'){

    }
}


}
    }
tecla.onkeyup = function (){
 tecla.classList.remove('ativa');
}
