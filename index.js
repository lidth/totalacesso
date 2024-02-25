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
