

function jogoLancamento() {
  $.ajax({
    url: TMDB_ENDPOINT_BASE + "/games?key=bda910ffe2854e3c9b1c51588b07f4b3",
    data: {
      ordering: "released"
    }
  }).done(function (data) {
    var texto = '';
    var texto2 = '';
    var textoButtons = '';
    for (i = 0; i < 8; i++) {
      let imagem = data.results[i].background_image;
      let titulo = data.results[i].name;
      let aval = data.results[i].rating;
      let genres = (data.results[i].genres.length > 0 ? data.results[i].genres[0].name : "N/A") + ", " + (data.results[i].genres.length > 1 ? data.results[i].genres[1].name : "");
      let released = data.results[i].released;
      const value = data.results[i].name;
      const valueEncode = encodeURI(value);
      const link = 'destaque.html?q=' + valueEncode;
      textoButtons += i == 0 
      ? ('<button type="button" data-bs-target="#carousel-releases" data-bs-slide-to="'+i+'" class="active" aria-current="true" aria-label="Slide '+i+'"></button>')
      : ('<button type="button" data-bs-target="#carousel-releases" data-bs-slide-to="'+i+'" class="active" aria-label="Slide '+i+'"></button>')

      texto += i == 0 
      ? ('<div class="carousel-item active">')
      : ('<div class="carousel-item">')

      texto += `
                  <div class="row" style="margin-bottom: 35px;">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" style="height: 400px; display: flex; align-items: center;" height="100%">
                            <img src="${imagem}" class="card-img-top" alt="${titulo}" style="width: unset; max-height:400px; margin: auto; max-width: 450px;">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 film-description" >
                      <h3 height="100% ">
                        ${titulo}
                      </h3>
                      <div class="col-12">
                        <p><span class="section-span">Gêneros: </span> ${genres}</p>
                      </div>
                      <div class="row ">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                          <p><span class="section-span">Lançamento: </span> ${released}</p>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <p><span class="section-span">Avaliação:</span> ${aval}</p>
                      </div>
                    </div>
                  </div>
                </div>
      `;
      switch(i){
        case 0:
          texto2 +=
          ` <div class="container">
              <div class="row" style="margin-bottom: 1.5rem;">
                <div class="col-xs-12 col-11 col-md-4 ">
                  <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                </div>
                <div class="col-xs-12 col-12 col-md-6 ">
                  <h5>${titulo}</h5>
                  <p class="news-description">${genres}</p>
                  <span class="badge bg-dark news-badge">${aval}</span>
                </div>
              </div>
            </div>
          `;
          break;
        case 1:
          texto2 +=
          ` <div class="container">
              <div class="row" id="medium-news">
                <div class="col-xs-12 col-11 col-md-4 ">
                  <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                </div>
                <div class="col-xs-12 col-12 col-md-6 ">
                  <h5>${titulo}</h5>
                  <p class="news-description">${genres}</p>
                  <span class="badge bg-dark news-badge">${aval}</span>
                </div>
              </div>
            </div>
          `;
          break;
        case 2:
            texto2 +=
            ` <div class="container">
                <div class="row" id="last-news">
                  <div class="col-xs-12 col-11 col-md-4 ">
                    <img style="float:right; max-height: 120px; margin:auto;"  src="${imagem}" alt="${titulo}">
                  </div>
                  <div class="col-xs-12 col-12 col-md-6 ">
                    <h5>${titulo}</h5>
                    <p class="news-description">${genres}</p>
                    <span class="badge bg-dark news-badge">${aval}</span>
                  </div>
                </div>
              </div>
            `;
            break;
          default:
            break;

      }
    }
    $('#news-data').html(texto2);
    $('#indicators').html(textoButtons);
    $('#carousel-destaques').html(texto);
  });
}

$(document).ready(function () {
  jogoLancamento();
 // $('#bt_pesquisa').click(pesquisajogos);
});
