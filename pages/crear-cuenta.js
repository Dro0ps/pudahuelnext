import React from 'react';
import Layout from '../components/layout/Layout';

const CrearCuenta = () => {
    return ( 
        <>
            <Layout>
                <h1>Crear Cuenta</h1>
                <form>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre"
                            placeholder="Tu Nombre"
                            name="nombre"
                        />
                        <label htmlFor="email">Tu email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                        />
                        
                    </div>
                </form>
            </Layout>
            
        </>

     );
}
 
export default CrearCuenta;