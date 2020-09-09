var data = new Date();
var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
var dsem = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");

document.write(dsem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear());

function movRel(){
    var tempo = new Date();
    var hora = tempo.getHours();
    var min = tempo.getMinutes();
    var seg = tempo.getSeconds();

    if(hora<10){
    hora = "0"+ tempo.getHours();
    }
    if(min<10){
        min = "0"+ tempo.getMinutes();
    }
    if(seg<10){
        seg = "0"+ tempo.getSeconds();
    }
    var impHoras = hora + ":" + min + ":" + seg;

    document.frel.rel.value = impHoras;

    setTimeout("movRel()",1000);
}
