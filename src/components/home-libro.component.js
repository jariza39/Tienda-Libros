import React, { Component } from "react";

export default class HomeLibro extends Component {
  render() {
    return (
      <container class="container xl" id="cont">
        <img src="fondo.jpg" alt="io" width="100%" id="fondo" />
        <div class="container xl" id="hom">
          <div id="bienve">
            <h1>Bienvenidos a nuestra tienda de libros</h1>
            <p>
              Somos una pequeña librería independiente con una gran pasión por
              los libros. Ofrecemos una selección cuidada de títulos de todos
              los géneros, desde bestsellers hasta libros de autores menos
              conocidos. ¡Esperamos que encuentres algo que te interese!
            </p>
          </div>
          <div class="container" id="destacados">
            <h2>Destacados</h2>
            <br></br>
            <div class="row" >
              <div class="col-4">
                <div class="card">
                  <img
                    src="BALLENA.jpg"
                    class="card-img-top"
                    alt="Imagen libro 1"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Harry Potter</h5>
                    <p class="card-text">J. K. Rowling</p>
                    <button class="btn btn-primary">$60.000</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <img
                    src="coronel.jpg"
                    class="card-img-top"
                    alt="Imagen libro 2"
                    width="50%"
                  />
                  <div class="card-body">
                    <h5 class="card-title">El coronel</h5>
                    <p class="card-text" >Gabriel Garcia </p>
                    <button class="btn btn-primary">$50.000</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <img
                    src="principito.jpg"
                    class="card-img-top"
                    alt="Imagen libro 3"
                  />
                  <div class="card-body">
                    <h5 class="card-title">El principito</h5>
                    <p class="card-text">Jaime Lopez</p>
                    <button class="btn btn-primary">$30.000</button>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <img
                    src="naranja.jpg"
                    class="card-img-top"
                    alt="Imagen libro 3"
                  />
                  <div class="card-body">
                    <h6 class="card-title">Naranja mecanica</h6>
                    <p class="card-text">Jaime Lopez</p>
                    <button class="btn btn-primary">$30.000</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="container" id="cata">
            <img src="cat.png" alt="p" width="100%" id="x"/> 
            <p>
              Visita nuestro catálogo completo para ver todos los libros
              disponibles. ¡Gracias por visitarnos!
            </p>
            <a href="/lista-libro" class="btn btn-primary btn-lg">
              Ver catálogo completo
            </a>
          </div>
        </div>
      </container>
    );
  }
}
