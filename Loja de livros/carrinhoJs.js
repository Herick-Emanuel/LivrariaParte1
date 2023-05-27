
// Recebe os livros adicionados ao carrinho da localStorage
var livrosAdicionados = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];

// Verifica se há livros adicionados
if (livrosAdicionados.length > 0) {
    var divLivrosCarrinho = document.getElementById('livros-carrinho');

    // Cria elementos HTML para cada livro adicionado e adiciona-os à div
    livrosAdicionados.forEach(function(livro) {
        var livroElement = document.createElement('div');
        livroElement.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}" width="200">
            <p>Título: ${livro.titulo}</p>
            <p>Preço: ${livro.preco}</p>
        `;
        divLivrosCarrinho.appendChild(livroElement);
    });
} else {
    // Caso não haja livros adicionados, exibe uma mensagem
    document.write('<p>Nenhum livro adicionado ao carrinho.</p>');
}

function adicionarAoCarrinho(titulo, imagem, preco) {
    // Verifica se já existe algum item no carrinho no localStorage
    var livrosCarrinho = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];

    // Verifica se o livro já está no carrinho
    var livroExistente = livrosCarrinho.find(function(livro) {
        return livro.titulo === titulo;
    });

    if (livroExistente) {
        alert('Este livro já está no carrinho!');
        return;
    }

    // Cria um objeto com os dados do livro
    var livro = {
        titulo: titulo,
        imagem: imagem,
        preco: preco
    };

    // Adiciona o livro ao array do carrinho
    livrosCarrinho.push(livro);

    // Salva o array atualizado no localStorage
    localStorage.setItem('livrosCarrinho', JSON.stringify(livrosCarrinho));

    // Atualiza a exibição do carrinho
    atualizarExibicaoCarrinho();
}

function atualizarExibicaoCarrinho() {
    var divLivrosCarrinho = document.getElementById('livros-carrinho');
    divLivrosCarrinho.innerHTML = '';

    // Recebe os livros do carrinho do localStorage
    var livrosCarrinho = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];

    // Verifica se tem livros no carrinho
    if (livrosCarrinho.length > 0) {
        // Cria elementos HTML para cada livro adicionado e adiciona-os à div
        livrosCarrinho.forEach(function(livro) {
            var livroElement = document.createElement('div');
            livroElement.innerHTML = `
                <img src="${livro.imagem}" alt="${livro.titulo}" width="200">
                <p>Título: ${livro.titulo}</p>
                <p>Preço: ${livro.preco}</p>
            `;
            divLivrosCarrinho.appendChild(livroElement);
        });
    } else {
        // Caso não tenha livros adicionados exibe:
        divLivrosCarrinho.innerHTML = '<p>Nenhum livro adicionado ao carrinho.</p>';
    }
}

// Recebe a função e atualiza a exibição do carrinho
atualizarExibicaoCarrinho();``

function removerDoCarrinho(index) {
    // Reçebe os livros do carrinho do localStorage
    var livrosCarrinho = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];

    // Verifica se o índice é válido
    if (index >= 0 && index < livrosCarrinho.length) {
        // Remove o livro do array do carrinho com base no índice
        livrosCarrinho.splice(index, 1);

        // Salva o array atualizado no localStorage
        localStorage.setItem('livrosCarrinho', JSON.stringify(livrosCarrinho));

        // Atualiza a exibição do carrinho
        atualizarExibicaoCarrinho();
    }
}