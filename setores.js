document.addEventListener('DOMContentLoaded', (event) => {
    let carrinhoFlutuante = document.querySelector('div.carrinho-flutuante');
    let carrinhoQuantidade = carrinhoFlutuante.querySelector('.carrinho-container .carrinho-items:first-child .text-value span');
    let carrinhoTotal = carrinhoFlutuante.querySelector('.carrinho-container .carrinho-items:last-child .text-value span');
     // Certifique-se de que este é o span correto para o total

    // Atualiza a quantidade e o total no carrinho
    function updateCarrinho() {
        let totalItems = 0;
        let totalPrice = 0;

        document.querySelectorAll('.seletor-options').forEach((option) => {
            let quantidade = parseInt(option.querySelector('.dimadd-value').textContent);
            let preco = parseFloat(option.querySelector('p').textContent.replace('R$', '').replace(',', '.').replace(/[^0-9.-]+/g,""));
            totalItems += quantidade;
            totalPrice += quantidade * preco;
        });

        // Atualiza o texto da quantidade e do total
        carrinhoQuantidade.textContent = totalItems + (totalItems === 1 ? ' Item' : ' Itens'); // Adiciona 'Item' ou 'Itens' dependendo da quantidade
        carrinhoTotal.textContent = 'R$ ' + totalPrice.toFixed(2).replace('.', ',');

        // Mostra ou esconde o carrinho baseado na quantidade de itens
        if (totalItems > 0) {
            carrinhoFlutuante.classList.remove('hide');
        } else {
            carrinhoFlutuante.classList.add('hide');
        }
    }

    // Adiciona eventos de clique para os ícones de adição e subtração
    document.querySelectorAll('.seletor-options').forEach((option) => {
        let addIcon = option.querySelector('.addicon');
        let dimIcon = option.querySelector('.dimicon');
        let valueElement = option.querySelector('.dimadd-value');

        addIcon.addEventListener('click', () => {
            let value = parseInt(valueElement.textContent);
            value++;
            valueElement.textContent = value.toString();
            updateCarrinho();
        });

        dimIcon.addEventListener('click', () => {
            let value = parseInt(valueElement.textContent);
            if (value > 0) {
                value--;
                valueElement.textContent = value.toString();
                updateCarrinho();
            }
        });
    });
});
function updateCarrinho() {
    // ...código para atualizar o carrinho...
    localStorage.setItem('totalCarrinho', totalPrice.toFixed(2));
}