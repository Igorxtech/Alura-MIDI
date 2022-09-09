


const listaDeTeclas = document.querySelectorAll('.tecla');

const listaDeSons = document.querySelectorAll('audio');

function tocaSom() {
    listaDeTeclas.forEach(element => {
        var i = 0;
        if(element.onclick){
            listaDeSons[i].play;
        }
        i++;
    });
}

onload = tocaSom();