// Importa React desde la biblioteca de React
import React from 'react';

// Importa un archivo CSS llamado 'Proyecto.css' para estilizar el componente
import './Proyecto.css';

// Importa la librería 'animate.css', que probablemente se utiliza para agregar animaciones a elementos en la página
import 'animate.css';

// Importa tres imágenes desde ubicaciones específicas
import imagen1 from '../Imagenes/youtube.jpg'; // Imagen relacionada con YouTube
import imagen2 from '../Imagenes/mongoDB.jpg'; // Imagen relacionada con MongoDB
import imagen3 from '../Imagenes/instagram.jpg'; // Imagen relacionada con Instagram

// Define un componente de React llamado 'Proyecto'
function Proyecto() {
    return (
        <div> {/*Crea un contenedor principal */} 
           <div class="github-container"> {/* Contenedor con la clase CSS 'github-container' */}
                <h1 class="animate__bounceInRight">Proyectos</h1> {/* Título con animación de rebote*/} 
                <section class="github-container"> {/*Sección con la clase CSS 'github-container' */} 
                    <h2>Proyecto Contenedor de Youtube</h2> {/*Título del proyecto */}
                    <p>En este proyecto se verá similar a los contenedores que están en dicha página.</p> {/*Descripción del proyecto*/} 
                    <a href="https://github.com/coradoa/Proyecto-contenedor-de-youtube" class="github-link" target="_blank"> {/* Enlace al repositorio de GitHub*/}
                        <img src={imagen1} alt="GitHub logo"/> {/*Imagen relacionada con el proyecto */}
                    </a>
                </section>
                <section class="github-container"> {/*Otra sección con la clase CSS 'github-container' */}
                    <h2>Proyecto con MongoDB</h2> {/* Título del proyecto */}
                    <p>En el proyecto se ve la inserción, modificación, eliminación y actualización. Con la ayuda de Postman.</p> {/*Descripción del proyecto */}
                    <a href="https://github.com/coradoa/Proyecto-MongoDB" class="github-link" target="_blank"> {/* Enlace al repositorio de GitHub */}
                        <img src={imagen2} alt="GitHub logo"/> {/*Imagen relacionada con el proyecto */}
                    </a>
                </section>
                <section class="github-container"> {/*Otra sección con la clase CSS 'github-container' */} 
                    <h2>Publicación en Instagram</h2> {/*Título del proyecto*/}
                    <p>En el proyecto se ve como una publicación de Instagram con sus likes, comentarios y enviar la historia.</p> {/*Descripción del proyecto */}
                    <a href="https://github.com/coradoa/Proyecto-de-publicaci-n-de-instagram" class="github-link" target="_blank"> {/* Enlace al repositorio de GitHub */}
                        <img src={imagen3} alt="GitHub logo"/> {/*Imagen relacionada con el proyecto */} 
                    </a>
                </section>
           </div>     
        </div>
    );   
}

// Exporta el componente 'Proyecto' para que pueda ser utilizado en otros lugares
export default Proyecto;
