<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Movie-Rental-Frontend" />

  &#xa0;

  <!-- <a href="https://Movie-Rental-Frontend.netlify.app">Demo</a> -->
</div>

<h1 align="center">GeeksDent</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/JotaroKujoo/Movie-Rental-Frontend?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Movie-Rental-Frontend 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/JotaroKujoo" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Web de una Clínica Dental

## :sparkles: Features ##

:heavy_check_mark: Registrar  usuarios;

:heavy_check_mark: Iniciar sesión;

:heavy_check_mark: Modificar datos del usuario;

:heavy_check_mark: Pedir cita médica;

:heavy_check_mark: El admin puede ver todos los usuarios y todos los citas solicitadas;





## :rocket: Technologies ##

The following tools were used in this project:


- [React](https://pt-br.reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Ant-Design](https://ant.design/docs/spec/introduce)
- [Amazon Web Service](https://aws.amazon.com/es/?nc2=h_lg)
- [Redux]

## :white_check_mark: Register ##

Podrás registrarte con tu nombre, apellidos, correo electrónico, contraseña y telefono


## :checkered_flag: Log in ##
Podrás iniciar sesión con el correo electrónico y la contraseña


## :office:Appointments ##
El usuario podrá realizar pedir cita médica, donde podrá elegir el doctor que le atenderá, el tratamiento a realizar. Dar una pequeña explicación para que sepan en la clínica cual es el motivo de la consulta. Y también podrá elegir el dia y la hora en la que le atenderán.


## Descripción ##

En este proyecto hemos realizado una app, para una Clínica Dental, en la que el usuario podrá registrarse, hacer login, modificar sus datos, y pedir cita. Para ello tenemos una base de datos desplegada en railway.
La parte de frontend la desplegaremos en AWS.
La página es completamente responsive como podemos ver en la siguiente imagen.

![vista responsive](https://user-images.githubusercontent.com/109297564/212569615-96764921-b045-4d1e-96d2-086a3e1761e6.jpg)

Enlace:
https://main.d2lr8qxquy156.amplifyapp.com/


## Página de inicio ##

![Home](https://user-images.githubusercontent.com/109297564/212569208-b65c8e75-e0e7-4309-b9fb-d0c25361a117.jpg)

![Footer Home](https://user-images.githubusercontent.com/109297564/212569213-bea66747-5091-473d-89ee-16eedb77eee2.jpg)

Estas dos imagenes nos muestra el Home sin estar logeado
En el navbar superior como vemos tendremos el logo de nuestra Clínica, asi como los enlaces a Login, Register, equipo medico, una pequeña descripción de la clínica y un menú desplegable donde podemos ver una descripción de todos los tratamientos que se realizan en la clínica.

![navbar logeado](https://user-images.githubusercontent.com/109297564/212569377-e80c945c-bfeb-4056-9858-81d89f6ac4d7.jpg)


En esta segunda imagen nos muestra como sería el navbar una vez hayamos hecho el login. Como vemos han desaparecido los botones de Login y Register y en la barra superior observamos como aparece el nombre del usuario activo y el boton para hacer Logout.
Para que aparezca el nombre en el navbar hemos guardado las credenciales del usuario con Redux.

## Register y Login

![register](https://user-images.githubusercontent.com/109297564/212569440-b2293630-48f2-41a7-901e-2f0327865617.jpg)


![login responsive](https://user-images.githubusercontent.com/109297564/212569447-56c27c1f-4c22-4dd6-9419-bd250a2de1c8.jpg)


Aquí podemos observar como son las páginas de Register y de Login. 


##Modificar datos personales

![Captura de pantalla 2023-01-15 230151](https://user-images.githubusercontent.com/109297564/212569582-4085fe3e-465b-4ed4-a000-1911e2793d02.jpg)

El usuario podra modificar su nombre, sus apellidos y su número de telefono

##Citas

![Captura de pantalla 2023-01-15 230226](https://user-images.githubusercontent.com/109297564/212569544-19e0d438-9864-41e2-b53b-31039c60ce52.jpg)



Aquí tenemos una muestra de la vista de las citas, donde vemos un desplegable con todos los doctores de la clínica, todos los tratamientos que se realizan en la clínica, un cuadro de texto donde el usuario podrá escribir el motivo de la cita, y un datepicker donde seleccionaremos el dia y la hora de la cita


## Vista usuario

![pagina usuario](https://user-images.githubusercontent.com/109297564/212569548-e53575de-8d07-4b3b-bb3d-ca040bec30f8.jpg)


En la vista del usuario podremos observar su ficha, y todas las citas que el paciente ha pedido desde que esta registrado en nuestra página.


## Vista Administrador

![Admin](https://user-images.githubusercontent.com/109297564/212569559-8ec40f29-1248-4051-ac34-953cb3eaa27f.jpg)


![todas las citas admin](https://user-images.githubusercontent.com/109297564/212569563-24d51189-c1f1-45f4-aa2e-b6dfa682e230.jpg)


Y por último tenemos la vista del administrador.
En ella veremos todos los usuarios que están registrados en nuestra clínica, y todas las citas que se han solicitado.
Para poder entrar como administrador, las credenciales son las siguientes.
email: admin@admin.com
contraseña: Admin1234



## :memo: License ##

Este proyecto ha sido realizado por Ignacio Garcia Valero. The Laravel framework is open-sourced software licensed under the MIT license. 

&#xa0;

<a href="#top">Back to top</a>

