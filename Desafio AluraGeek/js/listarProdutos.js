// Seleciona o container onde os cards de produtos serão exibidos
const containerProdutos = document.querySelector('.conteudo__Section--Produtos');

// Função para criar o template de um card de produto
function criarCardProduto(produto) {
    // Retorna o HTML do card preenchido com os dados do produto
    return `
        <div class="conteudo__Card">
            <img src="${produto.imagem}" alt="Imagem do produto ${produto.nome}" class="conteudo__Imagem">
            <div class="conteudo__Card--Nome">
                <p>${produto.nome}</p>
                <div class="conteudo__Card--Valor">
                    <p>Preço: $${produto.preco}</p>
                    <img src="./IMG/icone_lixeira.png" alt="Ícone lixeira" class="conteudo__Card--Icone">
                </div>
            </div>
        </div>
    `;
}

// Função para listar produtos dinamicamente
async function listarProdutos() {
    try {
        // Faz uma requisição GET ao servidor fake para obter a lista de produtos
        const resposta = await fetch('http://localhost:3000/produtos');
        const produtos = await resposta.json(); // Converte a resposta para JSON

        // Adiciona cada produto como um card no container
        produtos.forEach(produto => {
            containerProdutos.innerHTML += criarCardProduto(produto);
        });
    } catch (erro) {
        console.error('Erro ao listar os produtos:', erro);
    }
}

// Chama a função para listar os produtos ao carregar o script
listarProdutos();
