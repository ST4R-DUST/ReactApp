import React,{ Component} from 'react';
import './css/Card.css';
import './css/App.css';
import { Card } from './Component/Card';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './Component/NavBar';
import Slideshow from './Component/Slideshow';



export default class App extends Component {

  render(){

  let list_series = [
      {
        id: 1,
        text: 'Breaking Bad',
        years: 2014,
      },
      {
        id: 2,
        text: 'Los Sopranos',
        years: 1998,
      },
      {
        id: 3,
        text: 'The Wire',
        years: 1995,
      }
  ];

  return (
      <header>
        <NavBar list_series = {list_series}/>
        
        <body className="App-body">
          <h1 className="App-centeredHeading"> The Kino DB </h1>
          <div className="App-paddedSlideshow">
            <Slideshow/>
          </div>
          
            <div className="grid-container">
              <Card 
                imgName={"br.jpg"}
                name={"Blade Runner 2049"}
                desc={"Ubicada treinta años después de la película original, la historia describe a un blade runner replicante llamado K descubriendo los restos de una mujer replicante que en algún momento del pasado estuvo embarazada, lo cual es aparentemente imposible. Para evitar una posible guerra entre humanos y replicantes, K se encarga secretamente de encontrar al niño y destruir toda evidencia relacionada con él, llevándolo a descubrir que este está vinculado al desaparecido blade runner Deckard. "}
              />
              <Card 
                imgName={"spoder.jpg"}
                name={"Spiderman: Far From Home"}
                desc={"Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente."}
              />
              <Card 
                imgName={"ts4.jpg"}
                name={"Toy Story 4"}
                desc={"Woody siempre ha tenido claro cuál es su labor en el mundo: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando el juguete Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura que no olvidarán jamás durante un viaje por carretera."}
              />
              <Card 
                imgName={"rambo.jpg"}
                name={"Rambo: Last Blood"}
                desc={"John Rambo está en horas bajas y viviendo en un rancho en Arizona, pero cuando recibe la noticia de que su nieta ha desaparecido, tras haber cruzado la frontera a México para ir a una fiesta, Rambo decide ir en su búsqueda."}
              />
              <Card 
                imgName={"jw.jpg"}
                name={"John Wick: Chapter 3 - Parabellum"}
                desc={"John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización."}
              />
              <Card 
                imgName={"ae.jpg"}
                name={"Avengers: Endgame"}
                desc={"Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo."}
              />
              <Card 
                imgName={"al.jpg"}
                name={"Aladdin"}
                desc={"Aladdin es un ladronzuelo que se enamora de la hija del Sultán, la princesa Jasmine. Para poder conquistarla aceptará un desafío de Jafar. Aladdín tendrá que entrar en una cueva en mitad del desierto y conseguir una lámpara mágica que contiene al Genio que será el encargado de concederle todos sus deseos."}
              />
              <Card 
                imgName={"gz.jpg"}
                name={"Godzilla: Rey de los monstruos"}
                desc={"Los criptozoólogos de la agencia Monarch tratan de enfrentrarse a un grupo de enormes monstruos, incluyendo el propio Godzilla. Entre todos intentan resistir a las embestidas de Mothra, Rodan o del último némesis de la humanidad: King Ghidorah. Estas ancianas criaturas harán todo lo posible por sobrevivir, poniendo en riesgo la existencia del ser humano en el planeta."}
              />
              <Card 
                imgName={"tlk.jpg"}
                name={"El Rey León"}
                desc={"Tras el asesinato de su padre, un joven león abandona su reino para descubrir el auténtico significado de la responsabilidad y de la valentía."}
              />
            </div>
          </body>
      </header>
  );
  } 
}


