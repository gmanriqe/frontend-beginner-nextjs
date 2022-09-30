// Instalacion
/*
    Node
    Npm
    
    - yarn (npm install --global yarn)
    yarn -- version

    - Docker destop (https://www.docker.com/products/docker-desktop/) instalarlo
    $docker --version = Docker version > 20.10.11
    $docker-compose --version = Docker-compose version > 1.29.2

    - snippet
    NEXTJS Snippets tsx and jsx
*/

//===============================================================
// https://nextjs.org/
//===============================================================

// NextJS - ¿Qué es Next.js?
/*
    - Framework poderoso para servir contenido estatico y generado desde el lado del servidor
    - Basado en React (todo lo que puedes hacer en React, lo podremos utilizar en Next)
    - Mejora de rendimiento, ya que solo se puede cargar lo que se necesita para luego rehidratar y realizar lazy loading de otros modulos
    - SEO frendly
    - Router integrado
    - Trae herramientas de forma nativas ya que es un framework
    - Nos permite trabajar con Node desde el backend
    - Nos permite trabajar SPA utilizando "Server Site-Rendering" Y/o "Generacion estatica"
        SSR_ Server-side rendering
        SSG_ Static-site generation
        CSR_ client Side rendering
        ISR_ incremental static regeneration
        DR_ dynamic routing

    - SEO: Impacto que nuestro sitio web o aplicacion web va tener en la red.
*/

// Creacion de proyecto
/*
    - https://nextjs.org/docs/getting-started#automatic-setup
*/

// Static generation vs Server-side rendering
/*
    - Next utilizara por defecto el static generation
    - La diferencia es donde se construye basado en la solicitud
    - Como sabe next si utilizaras SG o SSR? Mediante funciones
*/