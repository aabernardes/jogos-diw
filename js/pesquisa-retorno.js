const TMDB_ENDPOINT_BASE = 'https://api.rawg.io/api';

function onLoad() {
  const value = decodeURI(window.location.href.split('?q=')[1]);
  $.ajax({
    url: TMDB_ENDPOINT_BASE + "/games?key=bda910ffe2854e3c9b1c51588b07f4b3",
    data: {
      search: value,
      search_exact: true
    }
  }).done(function (data) {
    let texto = '';
    
    for (i = 0; i < 1; i++) {
      let imagem = data.results[i].background_image;
      let titulo = data.results[i].name;
      let aval = data.results[i].rating;
      let genres = (data.results[i].genres.length > 0 ? data.results[i].genres[0].name : "N/A") + ", " + (data.results[i].genres.length > 1 ? data.results[i].genres[1].name : "");
      let released = data.results[i].released;
      const value = data.results[i].id;
      texto += `<div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-5 mb-5" style="display: flex; align-items: center;" height="100%">
      <img src="${imagem}" class="card-img-top" alt="${titulo}" width="100%">
  </div>
  <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-5 mb-7">

      <h3 height="100% ">
          ${titulo}
        </h3>
        <div class="col-12">
          <p><span class="section-span">Sinopse:</span>${genres}</p>
        </div>
        <div class="row ">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <p><span class="section-span">Direção:</span> Hideaki Anno, Kazuya Tsurumaki</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <p><span class="section-span">Lançamento:</span> ${released}</p>
          </div>
        </div>
        <div class="col-12">
          <p><span class="section-span">Avaliação:</span> ${aval}</p>
        </div>
  </div>`;
    }
    $('#data-jogo').html(texto);
  });
}


window.onload = function () {
  onLoad();

}