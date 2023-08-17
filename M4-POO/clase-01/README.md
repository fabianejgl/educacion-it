# Clase 01 

## Instalar TypeScript

```sh
npm i typescript -g # Instalación global
```

## Verificar si lo tengo instalado y conocer la versión

```sh
tsc --version
```

## Y para transpilar (compilar)

```sh
tsc
tsc --watch # Para que vuelva a generar el js si cambió el ts
```

## Nodemon que permite escuchar cambios que sucedan sobre el archivo js y refrescar el node.

```sh
npm i nodemon -g
```

```sh
nodemon dist/index.js
```



