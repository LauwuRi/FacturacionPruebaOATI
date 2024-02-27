
# Prueba de ingreso OATI

#### Laura Andrea Riobueno Rincon

lariobuenor@udistrital.edu.co

API para gestionar facturas que relaciona clientes y productos


## Deployment

Clone el repositorio

```bash
  git clone
```
Instale las dependencias necesarias

```bash
  npm install
```
Ejecute el entorno de desarrollo

```bash
  npm run dev
```
## Tech Stack

 NodeJs
 TypeScript
 MySQL




## Features

- Agregar, listar, modificar o eliminar facturas
- Listar todos los productos y por id
- Listar todos los clientes y por id

## API Reference


#### InsertFactura

```http
  POST /facturacion/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `number` | **Required**.  |
| `producto_id` | `number` | **Required** |
| `cliente_id` | `number` | **Required** |
| `cantidad` | `number` | **Required** |


#### GetFacturaById

```http
  GET /facturacion/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |


#### UpdateFactura

```http
  PUT /facturacion/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**.  |
| `producto_id` | `number` | **Required** |
| `cliente_id` | `number` | **Required** |
| `cantidad` | `number` | **Required** |

#### DeleteFactura

```http
  DELETE /facturacion/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**.  |

#### ListClientes

```http
  GET /clientes/
```


#### GetClientesById

```http
  GET /clientes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**.  |

#### ListProductos

```http
  GET /productos/
```


#### GetProductosById

```http
  GET /productos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**.  |





## Modelo de datos

![Modelo de Datos](link)

## Pruebas de funcionamiento

![Modelo de Datos](link)

