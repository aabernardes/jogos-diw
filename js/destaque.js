const TMDB_ENDPOINT_BASE = 'https://api.rawg.io/api';

var resp;
var qnt = 0;
var texto = '';
function jogoDestaque() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + "/games?key=bda910ffe2854e3c9b1c51588b07f4b3",
  }).done(function (data) {
    resp = data;
    qnt = 1;

    for (i = 0; i < 4; i++) {
      let imagem = data.results[i].background_image;
      let titulo = data.results[i].name;
      let aval = data.results[i].rating;
      let genres = (data.results[i].genres.length > 0 ? data.results[i].genres[0].name : "N/A") + ", " + (data.results[i].genres.length > 1 ? data.results[i].genres[1].name : "");
      let released = data.results[i].released;
      const value = data.results[i].id;
      const valueEncode = encodeURI(data.results[i].name);
      const link = 'detalhe.html?q=' + valueEncode;
      texto += `
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-4">
      <div class="card film-card" width="100%">
        <img src="${imagem}" class="card-img-top" alt="${titulo}">
        <div class="card-body">
          <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
          <p class="card-text">Generos: ${genres}</p
          <p class="card-data"><b>Avaliação:</b> ${aval}</p>
          <p class="card-data"><b>Lançamento:</b> ${released}</p>
          <a href="${link}" class="btn btn-sm leia-btn" style="float:right;">Leia mais</a>
        </div>
      </div>
    </div>
      `;
    }
    $('#lista-destaques').html(texto);
  });
}

function carregarMais(){
  data = resp;
  for (i = 4*qnt; i < 4*(qnt+1); i++) {
    
    imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
    descricao = data.results[i].overview.substring(0,50) + "...";
    titulo = data.results[i].original_title;
    aval = data.results[i].vote_average;
    date = data.results[i].release_date;
    const value = data.results[i].id;
    const valueEncode = encodeURI(value);
    const link = 'destaque.html?q=' + valueEncode;
    texto += `
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-2">
          <div class="card film-card" width="100%">
            <img src="${imagem}" class="card-img-top" alt="${titulo}">
            <div class="card-body">
              <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
              <p class="card-text">${descricao}</p
              <p class="card-data"><b>Avaliação:</b> ${aval}</p>
              <p class="card-data"><b>Lançamento:</b> ${date}</p>
              <a href="${link}" class="btn btn-sm leia-btn" style="float:right;">Leia mais</a>
            </div>
          </div>
        </div>
    `;
  }
  qnt++;
  if(12 <= 4*(qnt)){
    console.log("Aqui!");
    $('#btnCarregaMaisDestaque').prop("disabled",true);
    $('#btnCarregaMaisDestaque').hide();
  }
  $('#lista-destaques').html(texto);
}

$(document).ready(function () {
  jogoDestaque();
});
