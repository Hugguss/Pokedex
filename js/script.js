
  // ALERT
  Swal.fire({
    title: 'POKEDEX',
    text: 'Hecho por Hugo Fernandez',
    imageUrl: './img/pokedex.png',
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: 'Custom image',
  })

  document.getElementById('selector').addEventListener('change', () => {
    getPokedex();
  });
  function printPokedex(pokedex) {
    let content = document.querySelector('#contenido');
    content.innerHTML = '';
    var filtro = document.getElementById("selector").value;
    for (let pokemon of pokedex) {
      if ((filtro == "Todos") || 
              ((pokemon.type.indexOf(filtro)) == 0)){
        content.innerHTML += `
        <div id="center">
          <div class="full">
            <div class="col-md-4"> <img src="${pokemon.img}" id="img"> </div>
            <div>
              <div class="card">
                <article class="attrib">Nombre:</article>
                <p id="squad-nombre">${pokemon.name}</p>
              </div> 
              <div class="card">
                <article class="attrib">Tipo:</article>
                <p id="squad-number">${pokemon.type[0]}</p>
              </div>
              <div class="card">
                <article class="attrib">Base:</article>
                <div id="lista">
                  <div class="attrib"> <b> HP: </b>  ${pokemon.base.HP}</div> 
                  <div> <b> Attack: </b>  ${pokemon.base.Attack}</div>
                  <div> <b> Defense: </b> ${pokemon.base.Defense}</div>
                  <div> <b> Sp_Attack: </b> ${pokemon.base.Sp_Attack}</div>
                  <div> <b> Sp_Defense: </b> ${pokemon.base.Sp_Defense}</div>
                  <div> <b> Speed: </b> ${pokemon.base.Speed}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    };
    };
  };
  //un archivo, un fetch, se ejecutan a la vez las dos promesas
  function getPokedex() {
    fetch('data/pokedex.json')
        .then(result => result.json())
        .then((data) => {
          printPokedex(data);
        })
        .catch(error=>console.log("no",error));      
  }
  getPokedex();
