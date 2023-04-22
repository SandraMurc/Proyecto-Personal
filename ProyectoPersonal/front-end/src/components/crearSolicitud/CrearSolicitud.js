import { useState } from "react";
import axios from 'axios';


const CrearSolicitud = () => {
    const [mensaje, setMensaje] = useState();
    const [nombre, setNombre] = useState();
    const [telefono, setTelefono] = useState();
    const [email, setEmail] = useState();
    const [detalle, setDetalle] = useState();


    const crearSolicitud = (ev) => {
        ev.preventDefault();

        if(ev.target.nombre == ""){
            setMensaje("Ingresa el nombre");
            return;
        } else if(ev.target.telefono == ""){
            setMensaje("Ingresa el número de teléfono");
            return;
        } else if(ev.target.email == ""){
            setMensaje("Ingresa el email");
            return;
        } else if(ev.target.detalle == ""){
            setMensaje("Ingresa el detalle de tu solicitud");
            return;
        }

        var data = {
            nombre: ev.target.nombre,
            telefono: ev.target.telefono,
            email: ev.target.email,
            detalle: ev.target.detalle
        }

        axios.post("http://localhost:8000/sstIntegral", data)
        .then(result => {
            setMensaje("Solicitud Creada!");
        })
        .catch(error => console.log(error));
    }

    return(
        <section>
            <div className="container">
                <h4>Formulario para Crear tu Solicitud</h4>
                <form onSubmit={crearSolicitud} className="form-horizontal" action="/action_page.php">
                    <div className="form-group">
                        <label for="disabledTextInput" className="control-label col-sm-2">Nombre</label>
                        <br/>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="disabledTextInput" onChange={ev => setNombre(ev.target.nombre)} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="disabledTextInput" className="control-label col-sm-2">Teléfono de Contacto</label>
                        <br/>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="disabledTextInput" onChange={ev => setTelefono(ev.target.telefono)} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="email" className="control-label col-sm-2">Email</label>
                        <br/>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" onChange={ev => setEmail(ev.target.email)} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="fname" className="control-label col-sm-2">Descripción de tu solicitud</label>
                        <br/>
                        <div className="col-sm-10">
                        <textarea className="form-control" id="detalle" onChange={ev => setDetalle(ev.target.detalle)} />
                        </div>
                    </div>
                    <br/>
                    {mensaje}
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-info">Crear Solicitud</button>
                        </div>
                    </div>
                    <br/>
                </form>
            </div>
        </section>
    );
}

export default CrearSolicitud;