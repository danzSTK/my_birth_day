const diasEmMs =1000 * 60 * 60 * 24,
    horasEmMs = 1000 * 60 * 60,
    minutosEmMs = 1000 * 60;


function CriaEvento(dataDoEvento){
    const evento = new Date(dataDoEvento);
    const eventEmMs = evento.getTime();
    
    this.iniciaEvento = function() { 
        const contador = setInterval(function(){
            const dataAtual = new Date();
            const dataAtualEmMs = dataAtual.getTime();
            const distanciaAteOEvento = eventEmMs - dataAtualEmMs;
            
            const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
            const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
            const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
            const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs)/ 1000);
            
            document.getElementById('contador').innerHTML = `<strong>${diasAteOEvento}<br><b>dias</b></strong> : <strong>${horasAteOEvento}<br><b>horas</b></strong> : <strong>${minutosAteOEvento}<br><b>min</b></strong> : <strong>${segundosAteOEvento}<br><b>seg</b></strong>`
            
            if(distanciaAteOEvento < 0){
                clearInterval(contador)
                document.getElementById('contador').innerText = `Evento Expirado`
            }
            }, 1000)
    }
}

const evento1 = new CriaEvento('feb 7, 2025 00:00:00');

evento1.iniciaEvento()



