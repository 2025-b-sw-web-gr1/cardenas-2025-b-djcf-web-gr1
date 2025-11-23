# 💼 API RESTful - Bolsa de Trabajo

## 👥 Autores
- **Doménica Cárdenas**
- **Isabella Hernández**

---

## 📋 Descripción del Proyecto

Este proyecto implementa el diseño y documentación de una **API RESTful** para un sistema de **Bolsa de Trabajo**, siguiendo el estándar REST. La API gestiona la relación **1 a muchos** entre **Empresas** y **Vacantes**, donde:

- Una **Empresa** puede tener múltiples **Vacantes**
- Cada **Vacante** pertenece a una sola **Empresa**

El proyecto incluye:
- ✅ Documentación completa en **OpenAPI 3.0** (Swagger)
- ✅ Colección de requests en **Bruno** para pruebas
- ✅ Ejemplos de uso para todos los endpoints
- ✅ Especificación de modelos de datos y validaciones

---

## 🏗️ Estructura del Proyecto

```
Proyecto-001/
│
├── bruno.json                      # Configuración de la colección Bruno
├── job-board-api.yaml              # Documentación OpenAPI/Swagger
│
├── README.md                       # Este archivo
│
├── Endpoints de Empresas:
│   ├── get-all-empresas.bru       # GET /empresas
│   ├── get-empresa-by-id.bru      # GET /empresas/{id}
│   ├── create-empresa.bru         # POST /empresas
│   ├── update-empresa-put.bru     # PUT /empresas/{id}
│   └── delete-empresa.bru         # DELETE /empresas/{id}
│
└── Endpoints de Vacantes:
    ├── get-all-vacantes.bru       # GET /vacantes
    ├── get-vacante-by-id.bru      # GET /vacantes/{id}
    ├── create-vacante.bru         # POST /vacantes
    ├── update-vacante-put.bru     # PUT /vacantes/{id}
    ├── delete-vacante.bru         # DELETE /vacantes/{id}
    └── get-vacantes-by-empresa.bru # GET /empresas/{id}/vacantes
```

---

## 📊 Modelo de Datos

### 🏢 Empresa

Representa una empresa registrada en el sistema.

| Campo      | Tipo    | Requerido | Descripción                          |
|------------|---------|-----------|--------------------------------------|
| id         | integer | Sí        | Identificador único (auto-generado) |
| nombre     | string  | Sí        | Nombre o razón social                |
| sector     | string  | Sí        | Sector o industria                   |
| ubicacion  | string  | Sí        | Ubicación física                     |
| sitioWeb   | string  | No        | URL del sitio web                    |
| telefono   | string  | No        | Número de contacto                   |

**Ejemplo JSON:**
```json
{
  "id": 1,
  "nombre": "TechCorp S.A.",
  "sector": "Tecnología",
  "ubicacion": "Quito, Ecuador",
  "sitioWeb": "https://techcorp.com",
  "telefono": "+593-2-2345678"
}
```

### 💼 Vacante

Representa una oferta de trabajo publicada por una empresa.

| Campo       | Tipo    | Requerido | Descripción                              |
|-------------|---------|-----------|------------------------------------------|
| id          | integer | Sí        | Identificador único (auto-generado)     |
| titulo      | string  | Sí        | Título del puesto                        |
| descripcion | string  | Sí        | Descripción detallada y requisitos      |
| salario     | number  | No        | Salario ofrecido (USD)                   |
| ubicacion   | string  | No        | Ubicación del puesto                     |
| modalidad   | string  | No        | Presencial / Remoto / Híbrido           |
| empresaId   | integer | Sí        | ID de la empresa (clave foránea)        |

**Ejemplo JSON:**
```json
{
  "id": 1,
  "titulo": "Desarrollador Full Stack",
  "descripcion": "Buscamos desarrollador con experiencia en Node.js y React",
  "salario": 1500.00,
  "ubicacion": "Quito, Ecuador",
  "modalidad": "Híbrido",
  "empresaId": 1
}
```

---

## 🔗 Endpoints de la API

### Base URL
- **Producción:** `https://api.bolsatrabajo.com`
- **Desarrollo:** `http://localhost:3000`

### 🏢 Empresas

| Método | Endpoint               | Descripción                           |
|--------|------------------------|---------------------------------------|
| GET    | `/empresas`            | Obtener todas las empresas           |
| GET    | `/empresas/{id}`       | Obtener empresa por ID               |
| POST   | `/empresas`            | Crear nueva empresa                  |
| PUT    | `/empresas/{id}`       | Actualizar empresa completa          |
| DELETE | `/empresas/{id}`       | Eliminar empresa                     |

### 💼 Vacantes

| Método | Endpoint                    | Descripción                        |
|--------|-----------------------------|------------------------------------|
| GET    | `/vacantes`                 | Obtener todas las vacantes        |
| GET    | `/vacantes/{id}`            | Obtener vacante por ID            |
| POST   | `/vacantes`                 | Crear nueva vacante               |
| PUT    | `/vacantes/{id}`            | Actualizar vacante completa       |
| DELETE | `/vacantes/{id}`            | Eliminar vacante                  |
| GET    | `/empresas/{id}/vacantes`   | Obtener vacantes de una empresa   |

---

## 🎯 Lógica de la Relación 1 a Muchos

### Concepto

La relación **1 a muchos** entre Empresas y Vacantes significa:

1. **Una empresa puede tener múltiples vacantes:**
   - Ejemplo: "TechCorp S.A." puede publicar 5 vacantes diferentes

2. **Cada vacante pertenece a una sola empresa:**
   - La vacante "Desarrollador Full Stack" está asociada a "TechCorp S.A."
   - Esto se logra mediante el campo `empresaId` en el modelo Vacante

### Implementación

```
Empresa (1)  ──────────< Vacantes (N)
   ↑                         |
   |                         |
   └─────── empresaId ───────┘
```

**Flujo de trabajo:**

1. **Crear una empresa** → Se genera un `id` único
2. **Crear vacantes** → Cada vacante referencia el `empresaId` de la empresa
3. **Consultar vacantes de una empresa** → Filtrar por `empresaId`
4. **Eliminar una empresa** → Se eliminan todas sus vacantes asociadas (cascada)

### Ejemplo Práctico

```json
// 1. Crear empresa
POST /empresas
{
  "nombre": "TechCorp S.A.",
  "sector": "Tecnología",
  "ubicacion": "Quito, Ecuador"
}
// Respuesta: { "id": 1, ... }

// 2. Crear vacante asociada
POST /vacantes
{
  "titulo": "Desarrollador Full Stack",
  "descripcion": "Desarrollo de aplicaciones web",
  "empresaId": 1  ← Referencia a la empresa
}

// 3. Crear otra vacante para la misma empresa
POST /vacantes
{
  "titulo": "Diseñador UX/UI",
  "descripcion": "Diseño de interfaces",
  "empresaId": 1  ← Misma empresa
}

// 4. Consultar todas las vacantes de la empresa
GET /empresas/1/vacantes
// Retorna: [Desarrollador Full Stack, Diseñador UX/UI]
```

---

## 🧪 Cómo Probar la API

### Opción 1: Usando Bruno (Recomendado)

Bruno es un cliente de API moderno y open-source.

1. **Instalar Bruno:**
   - Descarga desde: https://www.usebruno.com/
   - Instala la aplicación en tu sistema

2. **Importar la colección:**
   ```
   - Abre Bruno
   - Click en "Open Collection"
   - Selecciona la carpeta Proyecto-001
   - Se cargarán automáticamente todos los archivos .bru
   ```

3. **Ejecutar requests:**
   - Navega por las carpetas de Empresas y Vacantes
   - Click en cualquier request
   - Presiona "Send" para ejecutarlo
   - Observa la respuesta en el panel derecho

4. **Modificar datos:**
   - Edita el `body:json` de los requests POST/PUT
   - Cambia IDs en las URLs de los requests GET/DELETE
   - Experimenta con diferentes combinaciones

### Opción 2: Usando Swagger UI

1. **Visualizar la documentación:**
   - Abre https://editor.swagger.io/
   - Copia el contenido de `job-board-api.yaml`
   - Pégalo en el editor

2. **Probar endpoints:**
   - Click en cualquier endpoint (GET, POST, etc.)
   - Click en "Try it out"
   - Completa los parámetros requeridos
   - Click en "Execute"
   - Observa la respuesta simulada

### Opción 3: Usando cURL (Línea de comandos)

```bash
# Obtener todas las empresas
curl -X GET https://api.bolsatrabajo.com/empresas

# Crear una empresa
curl -X POST https://api.bolsatrabajo.com/empresas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "TechCorp S.A.",
    "sector": "Tecnología",
    "ubicacion": "Quito, Ecuador"
  }'

# Obtener vacantes de una empresa
curl -X GET https://api.bolsatrabajo.com/empresas/1/vacantes

# Crear una vacante
curl -X POST https://api.bolsatrabajo.com/vacantes \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Desarrollador Full Stack",
    "descripcion": "Desarrollo con Node.js y React",
    "salario": 1500,
    "empresaId": 1
  }'
```

### Opción 4: Usando Postman

1. **Importar desde Swagger:**
   - Abre Postman
   - Click en "Import"
   - Selecciona "Link" y pega: `https://api.bolsatrabajo.com/openapi.yaml`
   - O importa el archivo `job-board-api.yaml` directamente

2. **Ejecutar requests:**
   - Similar a Bruno, navega y ejecuta cada request
   - Modifica parámetros según necesites

---

## 📝 Casos de Uso Recomendados

### Caso 1: Registro completo de empresa con vacantes

```
1. POST /empresas → Crear "TechCorp S.A."
2. POST /vacantes → Crear vacante "Desarrollador Backend" (empresaId: 1)
3. POST /vacantes → Crear vacante "Desarrollador Frontend" (empresaId: 1)
4. GET /empresas/1/vacantes → Verificar que ambas vacantes aparecen
```

### Caso 2: Actualización de información

```
1. GET /empresas/1 → Obtener datos actuales
2. PUT /empresas/1 → Actualizar sector y teléfono
3. GET /vacantes/1 → Obtener vacante
4. PUT /vacantes/1 → Actualizar salario y descripción
```

### Caso 3: Eliminación cascada

```
1. GET /empresas/1/vacantes → Ver vacantes (ej: 3 vacantes)
2. DELETE /empresas/1 → Eliminar empresa
3. GET /vacantes → Verificar que las 3 vacantes ya no existen
```

---

## 🔍 Validaciones y Reglas de Negocio

### Empresas
- ✅ El nombre debe tener entre 3-200 caracteres
- ✅ El sector es obligatorio (3-100 caracteres)
- ✅ La ubicación es obligatoria
- ✅ El sitio web debe ser una URL válida (opcional)
- ✅ El teléfono debe contener solo números, espacios, + y - (opcional)

### Vacantes
- ✅ El título debe tener entre 5-200 caracteres
- ✅ La descripción debe tener entre 10-2000 caracteres
- ✅ El salario debe ser un número positivo (opcional)
- ✅ La modalidad solo puede ser: Presencial, Remoto o Híbrido
- ✅ La `empresaId` debe existir en la tabla de empresas
- ✅ No se puede crear una vacante sin empresa asociada

### Códigos de Respuesta HTTP

| Código | Significado                  | Cuándo ocurre                        |
|--------|------------------------------|--------------------------------------|
| 200    | OK                           | Operación exitosa (GET, PUT)        |
| 201    | Created                      | Recurso creado (POST)                |
| 204    | No Content                   | Eliminación exitosa (DELETE)         |
| 400    | Bad Request                  | Datos inválidos                      |
| 404    | Not Found                    | Recurso no existe                    |
| 500    | Internal Server Error        | Error del servidor                   |

---

## 🛠️ Tecnologías y Estándares

### Estándar REST
- **Stateless:** Cada request contiene toda la información necesaria
- **Recursos:** Identificados por URLs (`/empresas`, `/vacantes`)
- **Métodos HTTP:** GET, POST, PUT, DELETE
- **Formato:** JSON para intercambio de datos
- **Idempotencia:** GET, PUT, DELETE son idempotentes

### Herramientas de Documentación
- **OpenAPI 3.0:** Especificación estándar de la industria
- **Swagger:** Visualización interactiva de la API
- **Bruno:** Cliente API moderno para testing

### Convenciones
- **Nombres de recursos:** En plural (`/empresas`, `/vacantes`)
- **URLs:** En minúsculas, sin espacios
- **IDs:** Numéricos, auto-incrementales
- **Fechas:** ISO 8601 (si se implementan timestamps)
- **Campos:** camelCase en JSON (`empresaId`, `sitioWeb`)

---

## 📚 Recursos Adicionales

### Documentación REST
- [REST API Tutorial](https://restfulapi.net/)
- [HTTP Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [Status Codes](https://httpstatuses.com/)

### Herramientas
- [Bruno](https://www.usebruno.com/) - Cliente API open-source
- [Swagger Editor](https://editor.swagger.io/) - Editor OpenAPI
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de prueba

### Aprendizaje
- [OpenAPI Specification](https://swagger.io/specification/)
- [RESTful Best Practices](https://restfulapi.net/rest-api-design-tutorial-with-example/)

---

## 🎓 Conceptos Clave Aprendidos

1. **Diseño de APIs RESTful:** Uso correcto de métodos HTTP y URLs semánticas
2. **Relaciones 1-N:** Implementación mediante claves foráneas
3. **Documentación OpenAPI:** Especificación completa y profesional
4. **Testing de APIs:** Uso de herramientas modernas como Bruno
5. **Modelos de datos:** Diseño de esquemas con validaciones
6. **Códigos HTTP:** Uso apropiado de status codes
7. **JSON:** Formato estándar para APIs REST

---

## 📞 Contacto y Soporte

**Desarrollado por:**
- Doménica J. Cárdenas
- Isabella Hernández

**Institución:** Escuela Politécnica Nacional  
**Curso:** Aplicaciones Web - Grupo Fabuloso
**Fecha:** Noviembre 2025

---

## 📄 Licencia

Este proyecto es de uso académico para el curso de Aplicaciones Web.

---

**¡Gracias por revisar nuestro proyecto! 🚀**
