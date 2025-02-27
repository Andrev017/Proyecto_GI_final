import { useState } from "react";
import apiService from "../../services/conexio";
import { useNavigate } from "react-router-dom";
import "../../styles/registro.css"

const Registro = () => {
    const navigation = useNavigate();
    
    const [data, setData] = useState({
        nombre_usuario: "",
        apellido_usuario: "",
        email_usuario: "",
        contra_usuario: "",
        rol_usuarios: "",
        celular_usuarios: "",
        ci_usuarios: "",
        direccion_usuarios: "",
    });

    const ingresar = async () => {
        console.log(data);
        const resepcion = await apiService.fetchData(
            "POST",
            "login",
            data,
            undefined
        );
        if (resepcion.data.message === "Usuario Valido") {
            navigation("/Home");
        } else {
            alert(resepcion.data.message);
        }
    };

    return (
        <div className="padre_registro">
            <section className="contenedor_registro">
                <h1 style={{textAlign:"center"}}>Registrarse</h1>

                <form action="" className="form-controles">
                    <input
                    className="input_regist"
                        type="text"
                        name="nombre"
                        placeholder="Nombre" required 
                        maxLength="100" minLength="5"
                        value={data.nombre_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, nombre_usuario: e.target.value }))
                        }
                    />
                    <input
                    className="input_regist"
                        type="text"
                        name="apellido"
                        required
                        placeholder="Apellido" 
                        maxLength="250" minLength="4"
                        value={data.apellido_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, apellido_usuario: e.target.value }))
                        }
                    />
                    <input
                    className="input_regist"
                        type="email"
                        name="email"
                        required
                        placeholder="Gmail"
                        title="Debe contener una @"
                        value={data.email_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, email_usuario: e.target.value }))
                        }
                    />
                    <input
                    className="input_regist"
                        type="number"
                        placeholder="Número de celular"
                        value={data.numeroCelular}
                        onChange={(e) =>
                            setData((old) => ({ ...old, numeroCelular: e.target.value }))
                        }
                    />


                    <input
                    className="input_regist"
                        type="password"
                        name="contraseña"
                        required
                        placeholder="Contraseña" 
                        maxLength="10" 
                        minLength="6"
                        value={data.contra_usuario}
                        onChange={(e) =>
                            setData((old) => ({ ...old, contra_usuario: e.target.value }))
                        }
                    />
                </form>

                <p>
                    Ya tengo un cuenta{" "}
                    <p onClick={() => navigation("/Inicio sesion")} style={{color:"#219ebc"}}>Iniciar Sesion</p>
                </p>

                <button onClick={() => ingresar()} className="btn_registro">Registrarme </button>
            </section>
        </div>
    );
};

export default Registro;
