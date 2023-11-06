// Importa React desde la biblioteca de React
import React from 'react';

// Importa un archivo CSS llamado 'App.css' para estilizar la aplicación
import './App.css';

// Importa la librería 'animate.css', que probablemente se utiliza para agregar animaciones a elementos en la página
import 'animate.css';

// Importa varios elementos desde 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Importa el componente 'MainRoutes' desde su ubicación específica
import MainRoutes from './Routes/MainRoutes';

// Importa una imagen desde una ubicación específica
import logo from './Imagenes/LogoWeb.png';

// Define un componente de función llamado 'App'
function App() {
    return (
        <Router> {/*Define el componente de enrutamiento */}
            <div>
                <div>
                    <nav>  {/*Barra de navegación */}
                        <ul>
                            <img id="miImagen" src={logo} alt='LOGO'></img>  {/*Logo de la página*/} 
                            <li></li>
                            <li><Link to="/">Inicio</Link></li>  {/*Enlace a la página de inicio*/}
                            <li><Link to="/sobre-mi">Sobre mí</Link></li>  {/*Enlace a la página "Sobre Mí" */}
                            <li><Link to="/proyectos">Proyectos</Link></li>  {/*Enlace a la página de proyectos*/}
                            <li><Link to="/contacto">Contacto</Link></li> {/*Enlace a la página de contacto */}
                        </ul>
                    </nav>
                </div>
                    <MainRoutes/>  {/* Componente que define las rutas de las páginas web */}
                <div>
                </div>
            </div>
        </Router>
    );
}

// Exporta el componente 'App' para que pueda ser utilizado en otros lugares
export default App;
