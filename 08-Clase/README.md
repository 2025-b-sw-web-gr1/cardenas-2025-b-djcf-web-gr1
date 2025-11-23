# Taller Bruno - JSONPlaceholder API

Este taller contiene una colección completa de peticiones HTTP para probar la API de JSONPlaceholder usando Bruno.

## 📋 Descripción

Bruno es una herramienta Git-friendly y offline-first para probar APIs, similar a Postman o Insomnia. Esta colección contiene **19 peticiones** que cubren todos los endpoints disponibles en JSONPlaceholder.

## 🚀 Instalación de Bruno

1. Descarga Bruno desde [https://www.usebruno.com/](https://www.usebruno.com/)
2. Instala la aplicación en tu sistema operativo
3. Abre Bruno y selecciona "Open Collection"
4. Navega a la carpeta `08-Clase` de este repositorio

## 📁 Estructura de la Colección

La colección está organizada por recursos:

### Posts (6 peticiones)
- ✅ `get-all-posts.bru` - GET /posts
- ✅ `get-post-by-id.bru` - GET /posts/1
- ✅ `create-post.bru` - POST /posts
- ✅ `update-post-put.bru` - PUT /posts/1
- ✅ `update-post-title.bru` - PATCH /posts/1
- ✅ `delete-post.bru` - DELETE /posts/1

### Comments (3 peticiones)
- ✅ `get-all-comments.bru` - GET /comments
- ✅ `get-comments-by-post.bru` - GET /comments?postId=1
- ✅ `create-comment.bru` - POST /comments

### Albums (3 peticiones)
- ✅ `get-all-albums.bru` - GET /albums
- ✅ `get-album-by-id.bru` - GET /albums/1
- ✅ `create-album.bru` - POST /albums

### Photos (2 peticiones)
- ✅ `get-all-photos.bru` - GET /photos
- ✅ `get-photos-by-album.bru` - GET /photos?albumId=1

### Todos (3 peticiones)
- ✅ `get-all-todos.bru` - GET /todos
- ✅ `get-todo-by-id.bru` - GET /todos/1
- ✅ `create-todo.bru` - POST /todos

### Users (2 peticiones)
- ✅ `get-all-users.bru` - GET /users
- ✅ `get-user-by-id.bru` - GET /users/1

## 🎯 Objetivos del Taller

1. **Instalar Bruno** en tu computadora
2. **Abrir la colección** desde esta carpeta
3. **Ejecutar cada petición** y verificar las respuestas
4. **Observar los códigos de respuesta HTTP** (200, 201, etc.)
5. **Experimentar con parámetros** en las peticiones GET con query strings
6. **Enviar datos JSON** en las peticiones POST, PUT y PATCH
7. **Comprender los diferentes métodos HTTP** (GET, POST, PUT, PATCH, DELETE)

## 📖 Cómo Usar

1. Abre Bruno
2. Click en "Open Collection"
3. Selecciona la carpeta `08-Clase`
4. Verás todas las peticiones listadas en el panel izquierdo
5. Haz click en cualquier petición para ver sus detalles
6. Presiona el botón "Send" para ejecutar la petición
7. Observa la respuesta en el panel derecho

## 🔍 Qué Observar

- **Códigos de respuesta HTTP**: 
  - 200 (OK) - Para GET exitosos
  - 201 (Created) - Para POST exitosos
  - 200 (OK) - Para PUT/PATCH/DELETE exitosos

- **Headers de respuesta**: Content-Type, Date, etc.

- **Body de respuesta**: Los datos JSON devueltos por la API

- **Parámetros de query**: Cómo filtrar datos usando ?postId=1 o ?albumId=1

- **Request Body**: Cómo enviar datos JSON en peticiones POST/PUT/PATCH

## 📚 Recursos

- [Documentación de Bruno](https://docs.usebruno.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Formato de archivos .bru](https://docs.usebruno.com/bru-lang/overview)

## ✨ Características de Bruno

- 📂 **Git-friendly**: Los archivos .bru son texto plano, perfectos para control de versiones
- 🔒 **Offline-first**: No requiere cuenta ni conexión para funcionar
- 🎨 **Interfaz limpia**: Fácil de usar y navegar
- 🔄 **Colaboración**: Comparte colecciones a través de Git
- 🧪 **Testing**: Soporte para tests y scripts
