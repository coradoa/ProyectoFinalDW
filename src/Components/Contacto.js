// Importa React y el hook useState desde las bibliotecas de React
import React, { useState } from 'react';

// Importa un archivo CSS llamado 'Contacto.css' para estilizar el componente
import './Contacto.css';

// Importa la librería 'animate.css', que probablemente se use para agregar animaciones a elementos en la página
import 'animate.css';

// Define un componente de React llamado 'Contacto'
function Contacto() {
    // Utiliza el hook useState para establecer un estado local llamado 'formData'
    const [formData, setFormData] = useState({
        mensaje: '' // Inicializa 'mensaje' en un string vacío
    });

    // Define una función 'handleInputChange' para manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado 'formData' copiando el objeto existente y sobrescribiendo el campo correspondiente con el nuevo valor
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Define una función 'handleSubmit' que se llama cuando se envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado de recargar la página al enviar el formulario
        // Imprime el contenido del objeto 'formData' en la consola
        console.log(formData);
        // Muestra una alerta indicando que el mensaje se ha enviado
        alert("Mensaje enviado!");
        // Restablece el estado 'formData' para que el campo 'mensaje' quede vacío
        setFormData({
            mensaje: ''
        });
    }

    // El componente se renderiza como una estructura HTML utilizando etiquetas JSX
    return (
        <div>
            <div className="contacto-container">
                <h1 class="animate__bounceInRight">Contacto</h1> {/*Título de la página*/} 
                <p class="pa">Puedes contactarme a través de:</p> {/*Párrafo informativo */} 
                <ul>
                    <li>Email: andreacorado@gmail.com</li> {/*Información de contacto*/} 
                    <li>Teléfono: 41224025</li> {/*Información de contacto*/} 
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/tu-usuario/">coradoa</a></li> {/*Enlace a LinkedIn*/}
                    <li>GitHub: <a href="https://github.com/coradoa">coradoa</a></li> {/* Enlace a GitHub*/}
                </ul>
                <p class="pa">Puedes dejarme un comentario para mejorar la página web:</p> {/*Párrafo informativo*/}
                <div className='div-centrado'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Comentario:</label> {/*Etiqueta para el campo de texto*/}
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} required /> {/*Campo de texto con enlace a estado y función de cambio*/}
                        </div>
                        <button type="submit">Enviar</button> {/*Botón para enviar el formulario*/}
                    </form>
                </div>  
            </div>
        </div>
    );
}

// Exporta el componente 'Contacto' para que pueda ser utilizado en otros lugares
export default Contacto;
