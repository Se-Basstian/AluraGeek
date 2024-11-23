# Practicando Front End: Challenge AluraGeek 🇵🇪🇵🇪🇵🇪

## Requisitos

* Bun [Descargar aquí](https://bun.sh/)
* Editos de código (Recomendado: [Zed](https://zed.dev/)

## Estructura del proyecto

```text
/
|-- public/
|-- src/
|    |-- assets/
|    |      └ imgs/
|    |         |-- bote-de-basura.png
|    |         └-- tres_corazones.png
|    |- css/
|    |   └-- main.css
|    └-- ts
|        |-- funciones.ts
|        |-- interfaces.ts
|        └-- main.ts
|-- index.html
|-- db.json
└-- package.json
```
La carpetas principales y archivos para el desarrollo de este proyecto se encuntra en los
archivos _package.json_, _db.json_ y _index.html_ y directorios como _public/_ y _src/_.

## Uso correcto del proyecto

* Descarga el proyecto de Github.
* Una ves en tu máquina local ejecuta el siguiente comando
para instalar todo lo necesario para que el proyecto funcione sin problema:
```sh
bun install
```
* Ejecuta el siguiente comando para activar el json-server:
```sh
bunx json-server --watch db.json --port 3001
```
* Finalmente iniciamos las página con:
```sh
bun run dev
```
