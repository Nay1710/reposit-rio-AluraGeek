// Arquivo: js/buscarProdutos.js

async function buscarProdutos() {
    try {
      const response = await fetch('http://localhost:3000/produtos');
      const produtos = await response.json();
      console.log(produtos); // Aqui você pode verificar no console se os produtos estão sendo retornados corretamente
      return produtos; // Retorna a lista de produtos
    } catch (erro) {
      console.error('Erro ao buscar os produtos:', erro);
    }
  }
  