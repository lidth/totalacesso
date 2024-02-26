document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens do acordeão
    var accordionItems = document.querySelectorAll('.accordion-item');

    // Adiciona um ouvinte de evento de clique a cada item do acordeão
    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Encontra o ícone dentro do item atual
            var icon = item.querySelector('.material-symbols-outlined');

            // Verifica se o item já está aberto
            const isOpen = item.classList.contains('active');

            // Fecha todos os itens e atualiza os ícones para 'keyboard_arrow_down'
            accordionItems.forEach(function(i) {
                i.classList.remove('active');
                i.nextElementSibling.classList.add('hide');
                i.querySelector('.material-symbols-outlined').textContent = 'keyboard_arrow_down';
            });

            // Se o item clicado não estava aberto, abre-o e atualiza o ícone para 'keyboard_arrow_left'
            if (!isOpen) {
                item.classList.add('active');
                item.nextElementSibling.classList.remove('hide');
                icon.textContent = 'keyboard_arrow_left';
            } else {
                // Se o item estava aberto e é clicado novamente, fecha-o e atualiza o ícone para 'keyboard_arrow_down'
                icon.textContent = 'keyboard_arrow_down';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.lineup button');
    // Seleciona os elementos de parágrafo pela classe específica
    const p1 = document.querySelector('.lineup-value-1');
    const p2 = document.querySelector('.lineup-value-2');

    buttons.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            // Remove a classe 'lineup-btn-active' de todos os botões
            buttons.forEach(b => b.classList.replace('lineup-btn-active', 'lineup-btn'));
            
            // Adiciona a classe 'lineup-btn-active' ao botão clicado
            this.classList.replace('lineup-btn', 'lineup-btn-active');

            // Mostra o primeiro texto e esconde o segundo se o primeiro botão for clicado
            if (index === 0) { // Primeiro botão
                p1.classList.remove('hide');
                p2.classList.add('hide');
            } else if (index === 1) { // Segundo botão
                p1.classList.add('hide');
                p2.classList.remove('hide');
            }
        });
    });
});

let menuopen = document.querySelector('span.menuopenicon');
let menu = document.querySelector('div.menu-burg');
let menuclose = document.querySelector('span.menucloseicon');

function abrirmenu(){
    menu.classList.remove('hide')
    document.body.style.overflow = 'hidden';
}
function fecharmenu(){
    menu.classList.add('hide')
    document.body.style.overflow = '';

}

menuopen.addEventListener("click", abrirmenu)
menuclose.addEventListener("click", fecharmenu)


let ajudabtn = document.getElementById('ajuda-btn');
let ajudamenu = document.getElementById('dajuda');

ajudabtn.addEventListener("click", function(){
    if (ajudamenu.classList.contains('hide')) {
        ajudamenu.classList.remove('hide');
    } else {
        ajudamenu.classList.add('hide');
    }
});