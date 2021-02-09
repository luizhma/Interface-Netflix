$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
var eventList = ["click", "mouseover"];

for (event of eventList){

    document.getElementById("item1").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e a Pedra Filosofal"
        document.getElementById("descricao").innerHTML = "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item1-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item2").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e o Cálice de Fogo"
        document.getElementById("descricao").innerHTML = "Em seu 4º ano na Escola de Magia e Bruxaria de Hogwarts, Harry Potter é misteriosamente selecionado para participar do Torneio Tribruxo, uma competição internacional em que precisará enfrentar alunos mais velhos.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item2-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item3").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e o Enigma do Príncipe"
        document.getElementById("descricao").innerHTML = "No sexto ano de Harry em Hogwarts, Lord Voldemort e seus Comensais da Morte estão criando o terror nos mundos bruxo e trouxa. Dumbledore convence seu velho amigo Horácio Slughorn para retornar a Hogwarts.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item3-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item4").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e a Câmara Secreta"
        document.getElementById("descricao").innerHTML = "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item4-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item5").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e o Prisioneiro de Azkaban"
        document.getElementById("descricao").innerHTML = "O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black fugiu da prisão de Azkaban, considerada até então como à prova de fugas.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/harry-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item6").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e a Ordem da Fênix"
        document.getElementById("descricao").innerHTML = "Harry Potter está em seu quinto ano em Hogwarts e acaba ouvindo que muitos não sabem a verdade sobre seu encontro com Lord Voldemort. O Ministro de Mágica, Cornelius Fudge, indica Dolores Umbridge.";
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item6-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item7").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e as Relíquias da Morte - Parte 2"
        document.getElementById("descricao").innerHTML = "Harry Potter e seus amigos Rony Weasley e Hermione Granger seguem à procura das horcruxes. O objetivo do trio é encontrá-las e, em seguida, destruí-las, de forma a eliminar lorde Voldemort de uma vez por todas."
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item7-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });

    document.getElementById("item8").addEventListener(event, function(){
        document.getElementById("titulo").innerHTML = "Harry Potter e as Relíquias da Morte - Parte 1"
        document.getElementById("descricao").innerHTML = "Sem a orientação e proteção de seus professores, Harry, Rony e Hermione iniciam uma missão para destruir as horcruxes, que são as fontes da imortalidade de Voldemort. Embora devam confiar um no outro mais do que nunca."
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/item8-capa.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
    });
}