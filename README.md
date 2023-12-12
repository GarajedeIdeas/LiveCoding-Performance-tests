# LiveCoding: Performance tests

Haz que tu aplicación sufra con Grafana k6 en un entorno controlado para que cuando llegue un Black Friday esté preparada para dar la mejor experiencia de usuario.

[El taller](https://www.youtube.com/watch?v=dolbA6dG9Cc) será impartido por [Félix Blanco Sánchez](https://www.linkedin.com/in/felixblancos/), Ingeniero de software especializado en Frontend con más de 10 años de experiencia. Actualmente trabaja en [Klarna](https://www.klarna.com/) verificando que los usuarios son realmente quienes dicen ser.

Si quieres saber más de Garaje Live Coding [¡Apúntate en la comunidad!](https://livecoding.garajedeideas.com/) para enterarte de los próximos talleres y recibir todos los archivos de los directos en tu correo.

## Instalación

Instala las dependencias con tu gestor de paquetes preferido e [instala k6 de manera global o mediante la imagen oficial de Docker](https://k6.io/docs/get-started/installation/)

## Corriendo los test

Simplemente ejecuta `k6 run [fichero]` para empezar a correr dicho test, en la raíz de la carpeta `src/` hay unos cuantos que corresponden a diferentes tipos. Todos por defecto apuntan al escenario simple.

```
k6 run src/smoke.js -v
```

El parámetro `-v` hará que puedas ver en consola un debug de la ejecución del test en tiempo real.

## Ecenarios

Se incluyen dos escenarios a modo de referencia que presenden representar el comportamiento de un usuario real utilizando el servicio.

### Simple

Basado en la [documentación oficial](https://k6.io/docs/using-k6/checks/#check-for-http-response-code), es un test lo más simple posible, un usuario visita un endpoint y se comprueba que devuelve un status = 200.

### Purchase

Basado en un [proyecto del equipo de grafana](https://github.com/grafana/k6-example-woocommerce/), este escenario pretende recrear el proceso de compra de un usuario.