import React from 'react';
import Layout from '../components/layout/Layout';
import { Campo, Formulario, InputSubmit, Error } from '../components/ui/Formulario';
import { css } from '@emotion/react';


// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';


const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}



const CrearCuenta = () => {

    const {valores, errores, submitForm, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta );

    const { nombre, email, password } = valores;

    function crearCuenta() {
        console.log('creando cuenta...');
    }


    return ( 
        <>
        
            <Layout>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                        color: rgba(86, 91, 97, 0.84);
                    `}
                >Crear Cuenta</h1>
                <Formulario
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errores.nombre && <Error>{errores.nombre}</Error>}
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre"
                            placeholder="Tu Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </Campo>
                    {errores.email && <Error>{errores.email}</Error>}
                    <Campo>
                    <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </Campo>
                    {errores.password && <Error>{errores.password}</Error>}
                    <Campo>
                    <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Tu Password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </Campo>
                    

                    

                    <InputSubmit
                        type="submit"
                        value="Crear Cuenta"
                    />                     
                        
                </Formulario>
            </Layout>
            
        </>

     );
}
 
export default CrearCuenta;