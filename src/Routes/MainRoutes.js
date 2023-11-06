// Importa React desde la biblioteca de React
import React from 'react';

// Importa Route y Routes desde la biblioteca 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

// Importa los componentes desde ubicaciones específicas
import Inicio from '../Components/Inicio';
import SobreMi from '../Components/SobreMi';
import Proyectos from '../Components/Proyecto';
import Contacto from '../Components/Contacto';

// Define un componente de React llamado 'MainRoutes'
function MainRoutes() {
    return (
        <Routes> // Define un conjunto de rutas
            <Route path="/" exact element={<Inicio></Inicio>} /> {/*Ruta para la página de inicio, con el componente 'Inicio' */} 
            <Route path="/sobre-mi" element={<SobreMi></SobreMi>} /> {/*Ruta para la página "Sobre Mí", con el componente 'SobreMi' */} 
            <Route path="/proyectos" element={<Proyectos></Proyectos>} /> {/*Ruta para la página de proyectos, con el componente 'Proyectos' */} 
            <Route path="/contacto" element={<Contacto></Contacto>} /> {/*Ruta para la página de contacto, con el componente 'Contacto' */} 
        </Routes>
    );
}

// Exporta el componente 'MainRoutes' para que pueda ser utilizado en otros lugares
export default MainRoutes;
