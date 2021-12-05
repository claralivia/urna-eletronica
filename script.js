// VARIÁVEIS DE CONTROLE DE INTERFACE
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//VARIÁVEIS DE AMBIENTE
let etapaAtual = 0;
let numero ='';

//FUNÇÕES
function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }
        else{
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }
        else{
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.name}<br/>Partido: ${candidato.partido}`;
        aviso.style.display = 'block';
        
        let fotosHtml = '';
        for (let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt=""/> ${candidato.fotos[i].legenda}</div>`;
        }

        lateral.innerHTML = fotosHtml;
    }


    console.log("Candidato", candidato);

}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero!==null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }
        else{
            atualizaInterface();
        }
    }
}
function branco(){
    alert("Clicou em BRANCO!");
}
function corrige(){
    alert("Clicou em CORRIGE!");
}function confirma(){
    alert("Clicou em CONFIRMA!");
}

comecarEtapa();