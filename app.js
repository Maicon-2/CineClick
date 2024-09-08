function buscar() {
  // Seleciona a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById('resultados-pesquisa');
  let campoPesquisa = document.getElementById('campo-pesquisa').value;
  console.log(campoPesquisa);

  if (campoPesquisa == "") {
    section.innerHTML = `<div class="item-resultado"> <p class="descricao-meta" style = "text-align: center;">Desculpa! busca vazia :( </p>
</div>`;
    return;
  }

  // Inicializa uma string vazia para armazenar o HTML dos resultados.
  let resultados = "";
  campoPesquisa = campoPesquisa.toLowerCase();
  // Itera sobre cada item de dados e constrói o HTML para cada resultado.
  for (let dado of filmesESeries) {

    if (dado.título.toLowerCase().includes(campoPesquisa) ) {
      // ...
    } else {
      for (let i = 0; i < dado.gênero.length; i++) {
        if (dado.gênero[i].toLowerCase().includes(campoPesquisa)) {
        
          break; // Para a execução do loop se encontrar uma correspondência
        }
      }
    };
    if (dado.título.toLowerCase().includes(campoPesquisa) || dado.gênero.some(genero => genero.toLowerCase().includes(campoPesquisa)) )  
    {
      //Cria um novo elemento HTML para o resultado atual.
      resultados += `
      <div class="item-resultado">
      <a href="${dado.link2}" target="_blank"><img src="${dado.link}" class="capa"></a>
      <h2><a href="${dado.link2}" target="_blank">${dado.título}</a></h2>
      <p class="descricao-meta"><strong>Gênero</strong>: ${dado.gênero}</p>
      <p class="descricao-meta"><strong>Lançamento</strong>: ${dado.anoDeLançamento}</p>
      <p class="descricao-meta"><strong>Diretor</strong>: ${dado.diretor}</p>
      <p class="descricao-meta"><strong>Elenco</strong>: ${dado.elencoPrincipal}</p>
      <p class="descricao-meta"><strong>Sinopse</strong>: ${dado.sinopse}</p>
      <p class="descricao-meta"><strong>Nota</strong>: ${dado.nota}</p>
      <p class="descricao-meta"><strong>Duração</strong>: ${dado.duração}</p>
      <p class="descricao-meta"><strong>Plataforma</strong>: ${dado.plataforma}</p>
  </div>`;
    }
  };
  if (!resultados) {
    resultados = `<div class="item-resultado"> <p class="descricao-meta" style = "text-align: center;">Desculpa! Pesquisa não corresponde a busca. :( </p>
</div>`;
};

  // Atualiza o conteúdo da seção HTML com os resultados construídos.
  section.innerHTML = resultados;
};