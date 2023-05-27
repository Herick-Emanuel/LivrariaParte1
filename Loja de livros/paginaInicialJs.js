    // Função que adiciona um livro ao carrinho
    function adicionarAoCarrinho(imagem, titulo, preco) {
        var livro = { imagem: imagem, titulo: titulo, preco: preco };
        var livrosCarrinho = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];
        livrosCarrinho.push(livro);
        localStorage.setItem('livrosCarrinho', JSON.stringify(livrosCarrinho));
  
        exibirMensagem('Produto adicionado ao carrinho!');
      }
  
      // Função para exibir a mensagem
      function exibirMensagem(mensagem) {
        alert(mensagem) 
      }