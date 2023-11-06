// Importa React desde la biblioteca de React
import React from 'react';

// Importa la imagen 'avatar1' desde la ubicación '../Imagenes/avatar1.jpeg'
import avatar1 from '../Imagenes/avatar1.jpeg';

// Importa un archivo CSS llamado 'Inicio.css' para estilizar el componente
import './Inicio.css';

// Importa la librería 'animate.css', que probablemente se utiliza para agregar animaciones a elementos en la página
import 'animate.css';

// Define un componente de React llamado 'Inicio'
function Inicio() {
    return (
        <div className='div1'> {/*Crea un contenedor con la clase CSS 'div1' */} 
            <div>
                <br></br> {/*Agrega un salto de línea en el documento HTML */}  
                <h1 class="animate__animated animate__bounce">¡Hola! mi nombre es Andrea Corado</h1>; {/*Título con animación de rebote*/} 
                <img class="animate__jello" src={avatar1} alt='avatar'></img> {/*Imagen con animación de jello*/}
            </div>      
        </div>
    );
}

// Exporta el componente 'Inicio' para que pueda ser utilizado en otros lugares
export default Inicio;
