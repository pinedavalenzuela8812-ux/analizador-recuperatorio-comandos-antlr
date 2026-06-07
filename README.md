Requisitos

Para ejecutar el proyecto se necesita tener instalado:

Node.js
Java JDK o JRE
ANTLR4
Git, opcional para clonar el repositorio
Instalación

Clonar el repositorio:

git clone https://github.com/pinedavalenzuela8812-ux/analizador-recuperatorio-comandos-antlr.git

Ingresar a la carpeta del proyecto:

cd analizador-recuperatorio-comandos-antlr

Instalar dependencias:

npm install
Generar Lexer y Parser

Para generar los archivos JavaScript a partir de la gramática Comandos.g4, ejecutar:

java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -listener -o generated Comandos.g4

Esto genera la carpeta generated, que contiene los archivos del lexer, parser, listener y visitor.

Ejecutar el analizador

Para ejecutar el programa:

npm start

El programa leerá el contenido de input.txt y mostrará en consola:

Código fuente leído
Tabla de lexemas y tokens
Resultado del análisis sintáctico
Árbol de derivación
Traducción a JavaScript
Ejecución básica del comando
Archivos principales
Comandos.g4       Gramática ANTLR4 del lenguaje
input.txt         Archivo de entrada con el código fuente
index.js          Programa principal del analizador
package.json      Configuración del proyecto Node.js
generated/        Archivos generados por ANTLR4
.gitignore        Archivos y carpetas ignoradas por Git
Ejemplos válidos
!saludar @ana --modo=formal
&saludar @ana
!mover @jugador --direccion=derecha --pasos=10
!atacar @dragon --fuerza=50
Ejemplos inválidos

Falta el prefijo del comando:

saludar @ana

Falta el símbolo @ en el argumento posicional:

!saludar ana

Falta el valor del argumento opcional:

!saludar @ana --modo=
Autor

Trabajo realizado para la materia Sintaxis y Semántica de los Lenguajes de Programación.

Alumno: Ginno Pineda


Después guardalo con `Ctrl + S`.

Luego hacés el commit del README:

```bash
git add README.md
git commit -m "Agrego README del proyecto"
git push

# Analizador de Comandos con ANTLR4 y JavaScript

## Descripción

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 con JavaScript.

El analizador procesa un archivo de entrada llamado `input.txt`, reconoce comandos escritos con una gramática específica, genera una tabla de lexemas y tokens, construye el árbol de derivación, traduce la entrada a JavaScript y ejecuta una interpretación básica del comando.

## Tema asignado

Tema: `25914_20`

La gramática del lenguaje reconoce comandos con la siguiente estructura:

```txt
<Comando> ::= <PrefijoComando> <NombreComando> (<Argumento>)*
