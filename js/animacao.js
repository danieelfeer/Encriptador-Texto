function aumentarOpacidadeCadeadoFechado(){
    const iconeCadeadoFechado = document.getElementById('ico-cadeado-fechado');
    iconeCadeadoFechado.style.opacity = 1;
}

function normalizarOpacidadeCadeadoFechado(){
    const iconeCadeadoFechado = document.getElementById('ico-cadeado-fechado');
    iconeCadeadoFechado.style.opacity = 0.8;
}

function mudarCadeadoAberto(){
    const iconeCadeado = document.getElementById('ico-cadeado-fechado');
    iconeCadeado.classList.remove('fa-lock');
    iconeCadeado.classList.add('fa-unlock');
    iconeCadeado.style.opacity = 1; // Aumenta a opacidade quando o cadeado está aberto
}

function mudarCadeadoFechado(){
    const iconeCadeado = document.getElementById('ico-cadeado-fechado');
    iconeCadeado.classList.remove('fa-unlock');
    iconeCadeado.classList.add('fa-lock');
    iconeCadeado.style.opacity = 0.8; // Volta a opacidade normal quando o cadeado está fechado
}