let valorTotal = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let item = document.getElementById('produto').value;
    let nomeItem = item.split('-')[0];
    let valorItem = item.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
        //calcular o preço, o nosso subtotal
    let preco = quantidade * valorItem;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem} <span class="texto-azul">R${preco}</span>
  </section>`;
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

