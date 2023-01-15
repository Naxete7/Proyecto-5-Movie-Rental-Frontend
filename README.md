<!-- <a href="https://Movie-Rental-Frontend.netlify.app">Demo</a> -->
</div>

<h1 align="center">Movie-Rental-Frontend</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8">
	@@ -46,21 +46,19 @@

## :dart: About ##

Web de renting de películas desplegada en Amazon Web Service el frontend, Backend (Base de datos y API) desplegados en Railway.

## :sparkles: Features ##

:heavy_check_mark: Registrar  usuarios;

:heavy_check_mark: Iniciar sesión;

:heavy_check_mark: Buscar películas por título y género;

:heavy_check_mark: Alquilar películas si has iniciado sesión;

:heavy_check_mark: Consultar las películas que hemos alquilado (vigentes e histórico);

:heavy_check_mark: El admin puede ver todos los usuarios y todos los pedidos (vigentes e históricos);



	@@ -71,7 +69,6 @@ Web de renting de películas desplegada en Amazon Web Service el frontend, Backe
The following tools were used in this project:


- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Ant-Design](https://ant.design/docs/spec/introduce)
	@@ -80,93 +77,99 @@ The following tools were used in this project:

## :white_check_mark: Register ##

Podrás registrarte con tu correo electrónico, nombre y contraseña.


## :checkered_flag: Log in ##
Podrás iniciar sesión con el correo electrónico y la contraseña


## :office: Orders ##
El usuario podrá realizar pedidos si ha iniciado sesión y comprobar cuando termina el pedido en su perfil


## Descripción ##

En este proyecto hemos realizado una app, para poder alquilar películas. Para ello tenemos una base de datos desplegada en railway, donde se almacenarán tanto las películas que se puedan alquilar, como los usuarios creados para que puedan logearse, y los alquileres realizzados por los usuarios.
También podran registrarse usuarios nuevos, los cuales también se almacenaran en esta base de datos.
La parte de frontend la desplegaremos en AWS.

Enlace:
https://main.d1xynfdiiv00mo.amplifyapp.com/

## Página de inicio ##

![Captura de pantalla 2022-12-04 204811](https://user-images.githubusercontent.com/109297564/205518740-d7512efb-cd9b-455a-aa84-c93b143ad70a.jpg)

Esta primera imagen nos muestra el Home sin estar logeado
En la página de inicio tendremos una muestra de películas top rated y los botones para logearse y registrarse.
En el navbar superior como vemos tendremos el logo de nuestra página VR, asi como los enlaces a Login, Register, Películas y menu.

![Captura de pantalla 2022-12-04 205027](https://user-images.githubusercontent.com/109297564/205518855-53697c1f-ea1c-43ae-878b-13cb3cdcdcfb.jpg)

En esta segunda imagen nos muestra como sería el home una vez hayamos hecho el login. Como vemos han desaparecido los botones de Login y Register y en la barra superior observamos como aparece el correo del usuario activo, así como el enlace a películas y el boton para hcer Logout.

## Register y Login

![Captura de pantalla 2022-12-04 204849](https://user-images.githubusercontent.com/109297564/205518954-756af969-15fd-40a4-8d4e-29412362730a.jpg)

![Captura de pantalla 2022-12-04 204829](https://user-images.githubusercontent.com/109297564/205518974-b7f4fdaf-f50b-46b0-8470-0b03bbbabc89.jpg)

Aquí podemos observar como son las páginas de Register y de Login. Si a la hora de registrarnos o logearnos no introdujeramos bien los datos que se solicitan, la pagina nos enseñaria un error.


## Películas

![Captura de pantalla 2022-12-04 204914](https://user-images.githubusercontent.com/109297564/205519002-c84d868d-b1d5-4243-a932-83dc051f949f.jpg)

Aquí tenemos una muestra de la vista de las películas, donde en un principio apareceran todas las películas disponibles. También observamos una barra de busqueda, donde deberemos introducir el nombre de la película que queremos ver. Y también vemos cuatro botones los cuales nos filtrarán las películas por género.


## Película detallada 

![Captura de pantalla 2022-12-04 205054](https://user-images.githubusercontent.com/109297564/205519237-6d652438-fba8-4cc7-a35a-4cf70cd5ec78.jpg)

En esta imagen observamos al detalle la película seleccionada. Nos mostrara el título, el cartel, género, valoración y una pequeña sinópsis.
Aquí tendremos una variación en base a si estamos logeados o no. Si estamos logeados aparecerá bajo de la película un botón para alquilar la película, si no estamos logeados, no aparecera.


## Vista usuario

![Captura de pantalla 2022-12-04 205122](https://user-images.githubusercontent.com/109297564/205519370-1b0d6275-5ffe-48b8-a76d-96b591df343e.jpg)

![Captura de pantalla 2022-12-04 205143](https://user-images.githubusercontent.com/109297564/205519523-d50ca122-4e7d-497f-8343-fa7886b28207.jpg)

Una vez alquilada la película nos redijirá a la vista de usuario, donde veremos nuestro perfil. Aquí veremos los datos del usuario con su avatar. Los alquileres que estan en activo (mostrandonos lal fecha de alquiler y la de devolución), y todos los alquileres realizados (también aparecerá la fecha en la que se alquiló y en la que se devolvió).

## Vista Administrador

![Captura de pantalla 2022-12-04 233616](https://user-images.githubusercontent.com/109297564/205519634-38e9a507-0c35-4164-898a-8001aed2aa88.jpg)

![Captura de pantalla 2022-12-04 233632](https://user-images.githubusercontent.com/109297564/205519640-36a8bc2a-5f62-4206-8f5b-b0d3f57c3c8d.jpg)

![Captura de pantalla 2022-12-04 233647](https://user-images.githubusercontent.com/109297564/205519642-a99118a9-f8c2-49bf-bf27-f4ca0367cc58.jpg)

Y por último tenemos la vista del administrador.
En ella veremos los alquileres que estan activos, todos los alquileres realizados por todos los usuarios, y también, veremos a todos los usuarios, teniendo la opción de poder borrarlos.
Para poder entrar como administrador, las credenciales son las siguientes.
email: admin@admin.com
contraseña: Admin12345



## :memo: License ##

Este proyecto esta bajo la licencia MIT. Para más detalles,ver [LICENSE](LICENSE.md) file.


Realizado por <a href="https://github.com/JotaroKujoo" target="_blank">Nacho García Valero, Jesus Valenzuela Chuliá y Jose Rodríguez Calero</a>

&#xa0;

<a href="#top">Back to top</a>
