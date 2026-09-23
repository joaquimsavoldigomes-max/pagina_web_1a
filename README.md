<!DOCTYPE html>

<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PaginaWeb</title>
  <style>
    img {
    width: 80px;
    height: 80px;
    }
    header {
    background-color: #183C63;
    color: #FFFFFF;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    }
    main {
    background-color: #FFFFFF;
    color: #183C63;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    }
    article {
    display: flex;
    }
    div p {
    font-weight: bold;
    }
    .artigo-autor {
    font-weight: bold;
    }
  </style>
</head>
<body>
  <header>
<h1>PaginaWeb</h1>
<p>Modelo de Protótipo</p>
</header>
<main>
  <article>
<img src="  " alt=" Primeira Imagem ">

<div>
<h2>Primeiro tópico ou item da pesquisa</h2>
<p class="artigo-autor">Por: Nome do Aluno </p>
<p>Paragrafo com as informações esquisadas</p>
<button>❤️<span>0</span></button>
<button>👍<span>0</span></button>
</div>
  </article>
  <article>
<img src="  " alt=" Segunda Imagem  ">

<div>
<h2>Segundo Tópico ou  assunto da pesquisa</h2>
<p class="artigo-autor">Por: Nome do Aluno</p>
<p>Paragrafo com as informações pesquisadas</p>
<button>❤️<span>0</span></button>
<button>👍<span>0</span></button>
</div>
  </article>
</main>
</body>
  <script>
  const botoes = document.querySelectorAll("button");
  botoes.forEach(function(botao) { 
  let curtiu = false;
  
  botao.addEventListener("click", botaoClicado);
 
  function botaoClicado() {
  console.log("fui clicado");
  let texto = botao.querySelector("span");
 
  if (curtiu === false) {
  texto.textContent++;
  curtiu = true;
  } else {
  texto.textContent--;
  curtiu = false;
    }
  }
  });
  </script>
</html>
