import App from 'next/app';
import Firebase, { FirebaseContext } from '../firebase';
import useAtenticacion from '../hooks/useAutenticacion';

const MyApp = props => {
    /* const usuario = useAtenticacion(); */
    

    const { Component, pageProps } = props;


    return ( 
    <FirebaseContext.Provider
        value={{
            Firebase,
            /* usuario */
        }}
    
    >

        <Component {...pageProps} />

    </FirebaseContext.Provider>
     );
}
 
export default MyApp;