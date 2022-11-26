const TMDB_ENDPOINT_BASE = 'https://api.rawg.io/api';
function onLoad(){
  const value = decodeURI(window.location.href.split('?q=')[1]);
  $.ajax({
    url: TMDB_ENDPOINT_BASE + "/games?key=bda910ffe2854e3c9b1c51588b07f4b3",
    data: {
        search: value,
    }
}).done(function (data) {
    let texto = '';
    if(data.results.length ==0){
      texto = '<h2> Nenhum resultado encontrado :c </h2>'
    }
    for (i = 0; i < data.results.length; i++) {
      console.log(data.results[i]);
        let imagem = data.results[i].background_image;
        let titulo = data.results[i].name;
        let aval = data.results[i].rating;
        let genres = (data.results[i].genres.length > 0 ? data.results[i].genres[0].name : "N/A") + ", " + (data.results[i].genres.length > 1 ? data.results[i].genres[1].name : "");
        let released = data.results[i].released;
        const valueEncode = encodeURI(data.results[i].name);
        const link = 'detalhe.html?q=' + valueEncode;
        texto += `
        
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mt-3 mb-5">
        <div class="card film-card" width="100%" style="background-color:#151a21;">
          <img src="${imagem}" class="card-img-top" alt="${titulo}">
          <div class="card-body">
            <p class="card-title" style="font-size: 10px"><b>${titulo}</b></p>
            <p class="card-text">Generos: ${genres}</p
            <p class="card-data"><b>Avaliação:</b> ${aval}</p>
            <p class="card-data"><b>Lançamento:</b> ${released}</p>
            <a href="${link}" class="btn btn-sm leia-btn" style="float:right;">Leia mais</a>
          </div>
        </div>
      </div>`;

    }
    $('#lista-pesquisa').html(texto);
});
}

window.onload = function () {
  onLoad();
}