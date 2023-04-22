import { useEffect, useState } from "react";
import axios from 'axios';
import "./HomeSstIntegral.css";
import CrearSolicitud from "../crearSolicitud/CrearSolicitud";
import imagenSST from "../imagen/imagenSST.jpg";



const HomeSstIntegral = () => {
    const [homeSstIntegral, setHomeSstIntegral] = useState([{}]);

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get("http://localhost:8000/SstIntegral").then(result => {
            console.log(result.data);
            setHomeSstIntegral(result.data);
        });
    }, []);


    return(
        <div style={{"textAlign": "center"}} className="HomeSstIntegral">
            <div className="Encabezado">
                <div className="imagen">
                    <img src={imagenSST} className="img-rounded" alt="imagen SST" />
                </div>
                <div className="titulo">
                    <h1>SST INTEGRAL</h1>
                </div>
            </div>
            <br/>
            <div>
                <h6>Bienvenido a SST INTEGRAL, es un gusto para nosotros atender tus necesidades respecto a SST (SST se refiere a la seguridad y salud en el trabajo) 
                    para tu empresa, a continuación te mostramos nuestro portafolio de servicios el cual realizamos con personal idóneo, competente y certificado. 
                </h6>
            </div>
            <div className="Container">
                <div className="SubContainer">
                    <h4>Asesoría</h4>
                    <p>La asesoría SST  es la responsable de diseñar, implementar y ejecutar el Sistema de gestión de seguridad y salud en el trabajo (SGSST) para tu empresa, de tal manera que se cumpla lo establecido
                        en la normatividad vigente para el sector al que haga parte tu empresa como para tus empleados en general, preparando tu empresa con una revisión exhaustiva del SGSST que implementas, 
                        de tal manera que cumplas con los requisitos necesarios a la hora de ser objeto de una auditoría. 
                    </p>
                </div>
                <div className="SubContainer">
                    <h4>Auditoría</h4>
                    <p>De manera general, podemos identificar los siguientes pasos en una auditoría de Seguridad y Salud en el Trabajo para tu empresa:
                        la Planificación, en esta primera etapa definimos el equipo, el alcance y los objetivos, seguidamente realizamos la ejecución de la auditoría,
                        posterior a ello, realizamos la recopilación de evidencias, los informes de auditoría y finalmente comunicaremos a tu compañía los resultados.
                    </p>
                </div>
            </div>
            <br/>
            <div>
                <h6>Si estás interesado en nuestros servicios, déjanos saber en el siguiente formulario y nosotros te contactamos!</h6>
            </div>
            <br/>
            <div className="Container2">
                <CrearSolicitud></CrearSolicitud>
            </div>
        </div>
    );
}

export default HomeSstIntegral;