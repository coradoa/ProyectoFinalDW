import React from 'react'; // Importa React desde la biblioteca de React

// Importa Link, Route y Routes desde la biblioteca 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom';

// Importa un archivo CSS llamado 'SobreMi.css' para estilizar el componente
import './SobreMi.css';

// Importa el componente 'Contacto' desde su ubicación específica
import Contacto from '../Components/Contacto';

// Importa varias imágenes desde ubicaciones específicas
import imagen from '../Imagenes/avatar3.jpeg';
import imagen1 from '../Imagenes/avatar4.jpeg';
import imagen2 from '../Imagenes/avatar5.jpeg';
import imagen3 from '../Imagenes/avatar6.jpeg';
import imagen4 from '../Imagenes/avatar7.jpeg';
import imagen5 from '../Imagenes/Foto para ingles.jpg';

// Define un componente de función llamado 'SobreMi'
const SobreMi = () => {
  return (
    <div className="sobre-mi"> {/*Contenedor principal con la clase CSS 'sobre-mi'*/}
      <header>
        <div style={{ textAlign: 'left', marginLeft: '10px' }} className='container1'> {/*Encabezado */}
          <div className="iconoCanal">  {/*Contenedor para una imagen */} 
            <img src={imagen5} alt='avatar3' id="imagen"/> {/*Imagen relacionada con el canal */} 
          </div>
          <div className="iconoCanal"> {/*Contenedor para información personal */} 
            <h1 class="animate__bounceInRight">Andrea Cecilia Corado Paiz</h1> {/*Nombre */}
            <h4 class="animate__bounceInLeft">Desarrolladora Web</h4> {/*Título */}
          </div>
        </div>
      </header>

      <div className='table-container'> {/*Contenedor para contenido principal */}
        <section className='intro-section'> {/*Sección introductoria */}
          <table>
            <tr>
              <td>
                <h3>Sobre Mí</h3> {/*Título*/}
                <p class="skills-list">
                  Soy una estudiante de 8vo. semestre de la Universidad Mariano Galvez de Guatemala.<br/> {/* Información personal */}
                  Soy una apasionada aprendiz desarrolladora web con experiencia en la creación de aplicaciones web utilizando tecnologías como React, HTML, CSS y JavaScript.<br/> // Experiencia
                  Mi objetivo es crear soluciones elegantes y funcionales para los desafíos que encuentro.
                </p>
              </td>
              <td>
                <h3>Experiencia laboral</h3> {/* Título*/}
                <ul class="skills-list"> {/*Lista de habilidades */}
                  <p class="skills-list">1. Prácticas en el Ministerio de Desarrollo Social (MIDES). Los deberes que hacía en este son:</p>
                  <li>a. Realización de manuales técnicos.</li> {/*Descripción de tareas */}
                  <li>b. Realización de manuales de usuarios.</li> {/*Descripción de tareas */}
                  <li>c. Digitalizadora de datos.</li> {/*Descripción de tareas */}
                  <li>d. Tester del sistema del ministerio.</li> {/*Descripción de tareas */}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Habilidades</h3> {/* Título*/}
                <ul class="skills-list"> {/*Lista de habilidades */}
                  <li>React</li> 
                  <li>HTML</li> 
                  <li>CSS</li>
                  <li>JavaScript</li> 
                  <li>C#</li> 
                  <li>C++</li> 
                  <li>Analista de Sistemas</li> 
                </ul>
              </td>
              <td>
                <h3>Educación</h3> {/* Titulo*/}
                <ul class="skills-list"> {/* Lista de educación */}
                  <li><strong>Preprimaria</strong> - Casita de Chocolate, prekinder</li> 
                  <li><strong>Preprimaria</strong> - Campo alto, kinder y preparatoria</li> 
                  <li><strong>Primaria</strong> - Colegio Mixto Episcopal Canterbury, Primero a Sexto</li> 
                  <li><strong>Básicos</strong> - Colegio San Jose de la Encarnación, Primero a Tercero</li> 
                  <li><strong>Diversificado</strong> - Colegio San Jose de la Encarnación, Cuarto y Quinto</li> 
                  <li><strong>Graduada de</strong> - Bachillerato en Computación Orientado en Científica</li> 
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Contacto</h3> {/* Titulo*/}
                <li><Link to="/contacto">Contacto</Link></li> {/*Enlace a la página de contacto */}
                <Routes> {/*Definición de rutas anidadas*/}
                  <Route path="/contacto" element={<Contacto></Contacto>} /> {/*Ruta a la página de contacto con el componente 'Contacto' */}
                </Routes>
              </td>
              <td>
                <h3>Pasatiempos</h3> {/* Titulo*/}
                <div className='container1'> {/*Contenedor para imágenes */} 
                    <div className="iconoCanal">
                        <img src={imagen} alt='avatar3' id="imagen"/> 
                    </div>
                    <div className="iconoCanal">
                        <img src={imagen1} alt='avatar4' id="imagen"/> 
                    </div>
                    <div className="iconoCanal">
                        <img src={imagen2} alt='avatar5' id="imagen"/> 
                    </div>
                    <div className="iconoCanal">
                        <img src={imagen3} alt='avatar6' id="imagen"/> 
                    </div>
                    <div className="iconoCanal">
                        <img src={imagen4} alt='avatar6' id="imagen"/> 
                    </div>
                </div>
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
}

// Exporta el componente 'SobreMi' para que pueda ser utilizado en otros lugares
export default SobreMi;
