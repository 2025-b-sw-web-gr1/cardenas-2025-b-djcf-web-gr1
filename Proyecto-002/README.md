# API de Equipos y Jugadores

API RESTful desarrollada con NestJS que permite gestionar equipos de fútbol y jugadores. Incluye documentación automática con Swagger.

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene incluido con Node.js)

## 🚀 Instalación

1. Clonar el repositorio o descargar el proyecto

2. Instalar las dependencias:
```bash
npm install
```

## 🏃 Cómo Ejecutar el Servidor

### Modo Desarrollo (con auto-reload)
```bash
npm run start:dev
```

### Modo Producción
```bash
npm run build
npm run start:prod
```

El servidor se ejecutará en `http://localhost:3000`

## 📚 Acceso a Swagger

Una vez que el servidor esté corriendo, accede a la documentación interactiva de Swagger en:

```
http://localhost:3000/api
```

Desde la interfaz de Swagger podrás:
- Ver todos los endpoints disponibles
- Probar las peticiones directamente
- Ver los esquemas de datos (DTOs)
- Consultar las respuestas esperadas

## 🎯 Endpoints Documentados

### Teams (Equipos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/teams` | Obtener todos los equipos |
| GET | `/teams/:id` | Obtener un equipo por ID |
| POST | `/teams` | Crear un nuevo equipo |
| PUT | `/teams/:id` | Actualizar un equipo |
| DELETE | `/teams/:id` | Eliminar un equipo |
| GET | `/teams/:id/players` | Obtener todos los jugadores de un equipo |

#### Ejemplo de Request (POST /teams)
```json
{
  "name": "Barcelona FC",
  "country": "España",
  "foundedYear": 1899,
  "stadium": "Camp Nou"
}
```

### Players (Jugadores)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/players` | Obtener todos los jugadores |
| GET | `/players/:id` | Obtener un jugador por ID |
| POST | `/players` | Crear un nuevo jugador |
| PUT | `/players/:id` | Actualizar un jugador |
| DELETE | `/players/:id` | Eliminar un jugador |

#### Ejemplo de Request (POST /players)
```json
{
  "name": "Lionel Messi",
  "number": 10,
  "position": "Delantero",
  "nationality": "Argentina",
  "teamId": 1
}
```

## 🏗️ Estructura del Proyecto

```
src/
├── main.ts                 # Configuración de Swagger y bootstrap
├── app.module.ts           # Módulo principal
├── teams/                  # Módulo de equipos
│   ├── dto/
│   │   ├── create-team.dto.ts
│   │   └── update-team.dto.ts
│   ├── interfaces/
│   │   └── team.interface.ts
│   ├── teams.controller.ts
│   ├── teams.service.ts
│   └── teams.module.ts
└── players/                # Módulo de jugadores
    ├── dto/
    │   ├── create-player.dto.ts
    │   └── update-player.dto.ts
    ├── interfaces/
    │   └── player.interface.ts
    ├── players.controller.ts
    ├── players.service.ts
    └── players.module.ts
```

## 🔧 Características Técnicas

### Decoradores de Swagger Utilizados

#### En Controladores
- `@ApiTags()` - Agrupa endpoints por categoría
- `@ApiOperation()` - Describe la operación del endpoint
- `@ApiResponse()` - Documenta las posibles respuestas
- `@ApiParam()` - Documenta parámetros de ruta

#### En DTOs
- `@ApiProperty()` - Documenta propiedades con ejemplos y descripciones

### Ejemplo de Documentación en Controller
```typescript
@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamsService.findAll();
  }
}
```

### Ejemplo de Documentación en DTO
```typescript
export class CreateTeamDto {
  @ApiProperty({ example: 'Barcelona FC', description: 'Nombre del equipo' })
  name: string;

  @ApiProperty({ example: 'España', description: 'País del equipo' })
  country: string;
}
```

## 📦 Dependencias Principales

- **@nestjs/core** - Framework principal
- **@nestjs/swagger** - Generación de documentación
- **swagger-ui-express** - Interfaz de Swagger
- **class-validator** - Validación de datos
- **class-transformer** - Transformación de objetos

## 🧪 Datos de Prueba

El proyecto incluye datos de ejemplo:

**Equipos:**
- Barcelona FC (ID: 1)
- Real Madrid (ID: 2)

**Jugadores:**
- Lionel Messi (ID: 1, Team: Barcelona)
- Gerard Piqué (ID: 2, Team: Barcelona)
- Sergio Ramos (ID: 3, Team: Real Madrid)

## 📝 Notas Adicionales

- Los datos se almacenan en memoria (se pierden al reiniciar el servidor)
- Todos los endpoints están completamente documentados en Swagger
- Las respuestas incluyen códigos de estado HTTP apropiados
- Se validan automáticamente los parámetros de entrada

## 🛠️ Scripts Disponibles

```bash
npm run start          # Iniciar en modo normal
npm run start:dev      # Iniciar en modo desarrollo (recomendado)
npm run start:prod     # Iniciar en modo producción
npm run build          # Compilar el proyecto
npm run format         # Formatear código con Prettier
npm run lint           # Ejecutar ESLint
```

## 📧 Soporte

Para más información sobre NestJS y Swagger:
- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de Swagger](https://swagger.io/docs/)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
