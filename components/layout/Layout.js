import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head';






const Layout = ( props ) => {
    return ( 
        <>

        <Global
            styles={css`
                :root {
                    --gris: #3d3d3d;
                    --gris2: #6f6f6f;
                    --gris3: #e1e1e1;
                    --naranja: #da556f;
                }

                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                *, **:before, *::after {
                    box-sizing: inherit;
                }
                body {
                    font-size: 1.6rem;
                    line-height: 1.5;
                }
                h1, h2, h3 {
                    margin: 0 0 2rem 0;
                    line-height: 1.5;
                }
                h1, h2 {
                    font-family:'Roboto Slab', serif;
                    font-weight: 700;
                }
                h3 {
                    font-family: 'PT-Sans', sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                }
            
            
            `}

        />

        <Head>
            <title>Gestión de Despacho</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            <link href="/static/css/app.css" rel="stylesheet"/>
            
        </Head>
            <Header/>
            

            <main>
                {props.children}
            </main>
        
        </>
    );
}
 
export default Layout;