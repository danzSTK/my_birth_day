const diasEmMs =1000 * 60 * 60 * 24,
    horasEmMs = 1000 * 60 * 60,
    minutosEmMs = 1000 * 60;

let armazenaData;

function CriaEvento(dataDoEvento){
    const evento = new Date(dataDoEvento);
    const EventEmMs = evento.getTime();
    
    this.iniciaEvento = function() { 
        const contador = setInterval(function(){
            const dataAtual = new Date();
            const dataAtualEmMs = dataAtual.getTime();
            const distanciaAteOEvento = EventEmMs - dataAtualEmMs;
            armazenaData = distanciaAteOEvento
            
            const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
            const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
            const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
            const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs)/ 1000);
            
            document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
            
            if(distanciaAteOEvento < 0){
                clearInterval(contador)
                document.getElementById('contador').innerText = `Evento Expirado`
            }
            }, 1000)
    }
}

const evento1 = new CriaEvento('feb 7, 2025 00:00:00');

evento1.iniciaEvento()



