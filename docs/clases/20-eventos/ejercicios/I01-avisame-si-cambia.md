---
sidebar_label: I01 - Avisame si cambia
title: Ejercicio I01 - Avisame si cambia
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
sidebar_position: 1
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
1. Crear un formulario con dos `TextBox`, tres `Label` y un `Button`.

![Diagrama de clase del formulario](/clases/20-eventos/ejercicios/diagrama_formulario.png)
![Vista formulario](/clases/20-eventos/ejercicios/imagen_formulario.png)

2. Crear la clase `Persona` a partir del siguiente diagrama de clases:

![Digrama de clase Persona](/clases/20-eventos/ejercicios/diagrama_biblioteca.png)

#### Clase `Persona`:
* El método `Mostrar` deberá retornar un `string` con el nombre y el apellido de la persona.
* Dentro del mismo namespace de la clase `Persona` se deberá declarar un delegado llamado `DelegadoString` el cual recibirá en su firma un `string` y retornará `void`.

#### Clase `FrmAvisador`
* Tendra un atributo privado de tipo `Persona`.
* El método **de clase** `NotificarCambio` recibirá un mensaje de tipo `string` como único parámetro y deberá mostrar al usuario el mensaje recibido mediante un `MessageBox`.
    * En el evento `Click` asociado al botón del formulario se deberá:
        * Si la persona del formulario aún no fue instanciada, se deberá instanciar a partir del nombre y apellido obtenidos en los `TextBox` del formulario, cambiar el texto “Crear” del botón por “Actualizar”. **Utilizar las propiedades para informar que se han modificado tanto nombre como apellido.**
        * Si la persona del formulario ya se encuentra instanciada, actualizar los datos.
        * En ambos casos se debera mostrar en nombre completo en el `lbl_NombreCompleto` usando el método `Mostrar`.
 

 ### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |


