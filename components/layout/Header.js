import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/dist/client/link';




const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p>Homar</p>

                    {/**Buscador Aqui */}
                    <Buscar/>



                    <Navegacion/>
                </div>

                <div>
                    <p>Hola: Darnel Montero</p>
                    <button type="button">Cerrar Sessión</button>

                    <Link href="/">Login</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;