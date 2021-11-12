import React from 'react';
import Link from 'next/link';


const Navegacion = () => {
    return ( 
        
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Pendientes</Link>
            <Link href="/">Nuevo Pedido</Link>
        </nav>

     );
}
 
export default Navegacion;