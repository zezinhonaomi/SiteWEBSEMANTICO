/*FUNÇÃO DO CASSINO*/
function dadoCASSINO(){
    var lado = Math.floor((Math.random()*6)+1);
    var lado1 = Math.floor((Math.random()*6)+1);
    var lado2 = Math.floor((Math.random()*6)+1);
    var sorteio = document.getElementById("demo");
    var sorteio1 = document.getElementById("demo1");
    var sorteio2 = document.getElementById("demo2");
    document.getElementById('texto').innerHTML="NORMAL";
    sorteio.className="dice"+lado;
    sorteio1.className="dice"+lado1;
    sorteio2.className="dice"+lado2;

    if((lado == lado1) && (lado1 == lado2)){
        document.getElementById('texto').innerHTML="ACERTOU, MIZERAVI!";
    }
    
}

/* FUNÇÃO DO JOGO DO DADO*/
function dado(){
    var lado = Math.floor((Math.random()*6)+1);
    var sorteio = document.getElementById("demoD");

    if (lado == 1){
        sorteio.className=('D1');
    }
    if (lado == 2){
        sorteio.className=('D2');
    }
    if (lado == 3){
        sorteio.className=('D3');
    }
    if (lado == 4){
        sorteio.className=('D4');
    }
    if (lado == 5){
        sorteio.className=('D5');
    }
    if (lado == 6){
        sorteio.className=('D6');
    }
}

/*FUNÇÃO DO JOGO DA VELHA*/
var acertos, contador;

function dadoVELHA(){
    acertos=0;

    var lado1 = Math.floor((Math.random()*6)+1);
    var lado2 = Math.floor((Math.random()*6)+1);
    var lado3 = Math.floor((Math.random()*6)+1);
    var lado4 = Math.floor((Math.random()*6)+1);
    var lado5 = Math.floor((Math.random()*6)+1);
    var lado6 = Math.floor((Math.random()*6)+1);
    var lado7 = Math.floor((Math.random()*6)+1);
    var lado8 = Math.floor((Math.random()*6)+1);
    var lado9 = Math.floor((Math.random()*6)+1);
    
    var sorteio  = document.getElementById("demoV");
    var sorteio1 = document.getElementById("demoV1");
    var sorteio2 = document.getElementById("demoV2");
    var sorteio3 = document.getElementById("demoV3");
    var sorteio4 = document.getElementById("demoV4");
    var sorteio5 = document.getElementById("demoV5");
    var sorteio6 = document.getElementById("demoV6");
    var sorteio7 = document.getElementById("demoV7");
    var sorteio8 = document.getElementById("demoV8");

    document.getElementById('textoV').innerHTML="NORMAL";
    
    sorteio.className="dado"+lado1;
    sorteio1.className="dado"+lado2;
    sorteio2.className="dado"+lado3;
    sorteio3.className="dado"+lado4;
    sorteio4.className="dado"+lado5;
    sorteio5.className="dado"+lado6;
    sorteio6.className="dado"+lado7;
    sorteio7.className="dado"+lado8;
    sorteio8.className="dado"+lado9;

    if((lado1 == lado2) && (lado2 == lado3)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado4 == lado5) && (lado5 == lado6)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado7 == lado8) && (lado8 == lado9)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado1 == lado4) && (lado4 == lado7)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado2 == lado5) && (lado5 == lado8)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado3 == lado6) && (lado6 == lado9)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado1 == lado5) && (lado5 == lado9)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
        acertos++;
    }
    if((lado3 == lado5) && (lado5 == lado7)){
        document.getElementById('textoV').innerHTML="Acertou a VELHA!";
         acertos++;
    }
    document.getElementById("acertos").innerHTML= acertos;
    document.getElementById('contador').innerHTML="";
    
}
function contar(){
    contador=0;
    while(acertos<3){
        cont=0;
        dadoVELHA();
        contador++;
    }
    acertos=0;
    document.getElementById('contador').innerHTML=contador;
}

