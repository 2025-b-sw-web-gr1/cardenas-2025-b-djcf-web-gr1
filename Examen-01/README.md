# Examen 01 - Documentación de API con Swagger/OpenAPI

## 📋 Descripción del Examen

Este examen consiste en la documentación completa de los endpoints de la API JSONPlaceholder utilizando Swagger Editor y la especificación OpenAPI 3.0. El objetivo es crear una interfaz interactiva que permita visualizar, comprender y probar todos los endpoints disponibles en la API.

## 🎯 Objetivos

1. **Documentar endpoints REST**: Crear documentación completa de todos los endpoints de JSONPlaceholder
2. **Usar OpenAPI 3.0**: Aplicar el estándar OpenAPI para especificar la API
3. **Generar interfaz interactiva**: Visualizar la documentación con Swagger UI
4. **Probar endpoints**: Permitir pruebas directas desde la interfaz de Swagger

## 🛠️ Tecnologías Utilizadas

- **OpenAPI 3.0**: Especificación estándar para documentar APIs REST
- **Swagger Editor**: Herramienta online para editar y visualizar documentación OpenAPI
- **Swagger UI**: Interfaz visual interactiva generada automáticamente
- **JSONPlaceholder API**: API REST gratuita de prueba (https://jsonplaceholder.typicode.com)

## 📁 Estructura del Proyecto

```
Examen-01/
├── swagger.yaml          # Documentación completa de la API en formato OpenAPI 3.0
└── README.md            # Este archivo - Explicación del examen
```

## 📚 Recursos Documentados

La documentación incluye los siguientes recursos de la API JSONPlaceholder:

### 1. **Posts** (`/posts`)
- **GET** `/posts` - Obtener todos los posts
- **GET** `/posts/{id}` - Obtener un post específico
- **POST** `/posts` - Crear un nuevo post
- **PUT** `/posts/{id}` - Actualizar un post completo
- **PATCH** `/posts/{id}` - Actualizar parcialmente un post
- **DELETE** `/posts/{id}` - Eliminar un post
- **GET** `/posts/{id}/comments` - Obtener comentarios de un post

### 2. **Comments** (`/comments`)
- **GET** `/comments` - Obtener todos los comentarios
- **GET** `/comments/{id}` - Obtener un comentario específico
- **POST** `/comments` - Crear un nuevo comentario
- **PUT** `/comments/{id}` - Actualizar un comentario
- **DELETE** `/comments/{id}` - Eliminar un comentario

### 3. **Albums** (`/albums`)
- **GET** `/albums` - Obtener todos los álbumes
- **GET** `/albums/{id}` - Obtener un álbum específico
- **POST** `/albums` - Crear un nuevo álbum
- **PUT** `/albums/{id}` - Actualizar un álbum
- **DELETE** `/albums/{id}` - Eliminar un álbum
- **GET** `/albums/{id}/photos` - Obtener fotos de un álbum

### 4. **Photos** (`/photos`)
- **GET** `/photos` - Obtener todas las fotos
- **GET** `/photos/{id}` - Obtener una foto específica
- **POST** `/photos` - Crear una nueva foto
- **PUT** `/photos/{id}` - Actualizar una foto
- **DELETE** `/photos/{id}` - Eliminar una foto

### 5. **Todos** (`/todos`)
- **GET** `/todos` - Obtener todas las tareas
- **GET** `/todos/{id}` - Obtener una tarea específica
- **POST** `/todos` - Crear una nueva tarea
- **PUT** `/todos/{id}` - Actualizar una tarea
- **DELETE** `/todos/{id}` - Eliminar una tarea

### 6. **Users** (`/users`)
- **GET** `/users` - Obtener todos los usuarios
- **GET** `/users/{id}` - Obtener un usuario específico
- **POST** `/users` - Crear un nuevo usuario
- **PUT** `/users/{id}` - Actualizar un usuario
- **DELETE** `/users/{id}` - Eliminar un usuario
- **GET** `/users/{id}/posts` - Obtener posts de un usuario
- **GET** `/users/{id}/albums` - Obtener álbumes de un usuario
- **GET** `/users/{id}/todos` - Obtener tareas de un usuario

## 🔧 Schemas (Modelos de Datos)

La documentación incluye esquemas detallados para cada entidad:

- **Post**: userId, id, title, body
- **Comment**: postId, id, name, email, body
- **Album**: userId, id, title
- **Photo**: albumId, id, title, url, thumbnailUrl
- **Todo**: userId, id, title, completed
- **User**: id, name, username, email, address, phone, website, company
- **Address**: street, suite, city, zipcode, geo
- **Geo**: lat, lng
- **Company**: name, catchPhrase, bs

## 🚀 Cómo Usar la Documentación

### Opción 1: Swagger Editor Online

1. Accede a [Swagger Editor](https://editor.swagger.io/)
2. Copia todo el contenido del archivo `swagger.yaml`
3. Pégalo en el editor (reemplaza el contenido existente)
4. Visualiza la documentación generada automáticamente en el panel derecho

### Opción 2: Desde el Archivo Local

1. Abre el archivo `swagger.yaml` en un editor de texto
2. Copia todo su contenido
3. Ve a https://editor.swagger.io/
4. Pega el contenido en el editor

### Opción 3: Importar en Swagger Editor

1. Descarga el archivo `swagger.yaml`
2. Ve a https://editor.swagger.io/
3. Menú File → Import file
4. Selecciona `swagger.yaml`

## 🧪 Probar los Endpoints

Desde Swagger UI puedes probar directamente los endpoints:

1. **Selecciona un endpoint** de la lista
2. Haz clic en **"Try it out"**
3. **Completa los parámetros** necesarios (si aplica)
4. Haz clic en **"Execute"**
5. Observa la **respuesta** del servidor

### Ejemplo de Prueba: Obtener Todos los Posts

```
1. Expande GET /posts
2. Click en "Try it out"
3. Click en "Execute"
4. Verás la respuesta con 100 posts
```

### Ejemplo de Prueba: Crear un Post

```
1. Expande POST /posts
2. Click en "Try it out"
3. Modifica el JSON del request body:
   {
     "title": "Mi primer post",
     "body": "Este es el contenido de mi post",
     "userId": 1
   }
4. Click en "Execute"
5. Verás la respuesta con el post creado (id: 101)
```

## 📖 Características de la Documentación

### ✅ Información General
- Título y descripción de la API
- Versión de la API
- Información de contacto y licencia
- URL del servidor base

### ✅ Organización por Tags
Los endpoints están agrupados por categorías:
- Posts
- Comments
- Albums
- Photos
- Todos
- Users

### ✅ Detalles por Endpoint
Cada endpoint incluye:
- **Summary**: Resumen breve de la funcionalidad
- **Description**: Descripción detallada
- **Parameters**: Parámetros requeridos y opcionales
- **Request Body**: Estructura del cuerpo de la petición (para POST, PUT, PATCH)
- **Responses**: Códigos de respuesta posibles y sus estructuras
- **Examples**: Ejemplos de valores para facilitar las pruebas

### ✅ Schemas Reutilizables
Todos los modelos de datos están definidos en `components/schemas` para:
- Evitar duplicación
- Facilitar mantenimiento
- Mejorar claridad

### ✅ Validación de Datos
La documentación especifica:
- Tipos de datos (string, integer, boolean, etc.)
- Formatos (email, uri)
- Campos requeridos vs opcionales
- Valores de ejemplo

## 🎓 Conceptos Aprendidos

### OpenAPI/Swagger
- Estructura de un archivo OpenAPI 3.0
- Definición de paths y operaciones HTTP
- Uso de referencias ($ref) para reutilización
- Schemas y componentes reutilizables
- Parámetros de path, query y body
- Códigos de respuesta HTTP

### Documentación de APIs
- Importancia de documentar APIs REST
- Descripción clara de endpoints
- Ejemplos de uso
- Especificación de contratos de API

### Herramientas
- Swagger Editor para edición y validación
- Swagger UI para visualización interactiva
- JSONPlaceholder como API de prueba

## 📝 Notas Importantes

### ⚠️ API de Solo Lectura (Fake)
JSONPlaceholder es una API de prueba que:
- Acepta todas las operaciones (GET, POST, PUT, PATCH, DELETE)
- **NO persiste** los cambios en el servidor
- Simula respuestas exitosas para operaciones de escritura
- Es ideal para prototipado y aprendizaje

### 💡 Ejemplos de Comportamiento

**POST /posts** → Retorna status 201 con id: 101 (no se guarda realmente)
**PUT /posts/1** → Retorna status 200 con los datos actualizados (no se guarda)
**DELETE /posts/1** → Retorna status 200 (no elimina nada realmente)

Esto permite practicar sin preocuparse por modificar datos reales.

## 🔍 Validación de la Documentación

El archivo `swagger.yaml` ha sido validado y cumple con:
- ✅ Especificación OpenAPI 3.0.0
- ✅ Sintaxis YAML correcta
- ✅ Referencias válidas ($ref)
- ✅ Esquemas bien definidos
- ✅ Ejemplos coherentes

## 📚 Referencias y Recursos

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [JSONPlaceholder Documentation](https://jsonplaceholder.typicode.com/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [OpenAPI Guide](https://oai.github.io/Documentation/)

## 🎯 Resultados del Examen

Al completar este examen, se ha logrado:

1. ✅ **Documentación Completa**: Todos los 6 recursos de JSONPlaceholder documentados
2. ✅ **40+ Endpoints**: Documentación de más de 40 operaciones diferentes
3. ✅ **Schemas Detallados**: 9 modelos de datos completamente especificados
4. ✅ **Ejemplos Funcionales**: Todos los endpoints con ejemplos válidos
5. ✅ **Interfaz Interactiva**: Documentación visualizable y testeable en Swagger UI
6. ✅ **Organización**: Endpoints agrupados lógicamente por tags
7. ✅ **Validación**: Archivo conforme a OpenAPI 3.0.0

## 👨‍💻 Autor

Doménica Cárdenas Fonseca
Escuela Politécnica Nacional
Aplicaciones Web - Sexto Semestre
Fecha: 22 de noviembre de 2025

## 📄 Licencia

Este proyecto es material educativo creado para fines académicos en el curso de Aplicaciones Web.

---

**Nota**: Para visualizar la documentación completa y probar los endpoints, abre el archivo `swagger.yaml` en [Swagger Editor](https://editor.swagger.io/).
