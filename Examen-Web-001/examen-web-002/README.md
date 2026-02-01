# Examen Web 002 - API RESTful con NestJS

API RESTful construida con NestJS, TypeORM y SQLite para gestionar equipos de fútbol y jugadores.

## 📋 Descripción

Este proyecto implementa una API REST que permite administrar equipos deportivos y sus jugadores, con una relación de uno a muchos (un equipo tiene múltiples jugadores).

## 🏗️ Estructura del Proyecto

```
src/
├── teams/
│   ├── team.entity.ts          # Entidad Team
│   ├── teams.controller.ts     # Controlador de equipos
│   ├── teams.service.ts        # Lógica de negocio de equipos
│   └── teams.module.ts         # Módulo de equipos
├── players/
│   ├── player.entity.ts        # Entidad Player
│   ├── players.controller.ts   # Controlador de jugadores
│   ├── players.service.ts      # Lógica de negocio de jugadores
│   └── players.module.ts       # Módulo de jugadores
└── app.module.ts               # Módulo principal con configuración TypeORM
```

## 🗃️ Modelo de Datos

### Team (Equipo)
- `id`: number (PK, auto-generado)
- `name`: string
- `country`: string
- `players`: Player[] (relación 1:N)

### Player (Jugador)
- `id`: number (PK, auto-generado)
- `name`: string
- `position`: string
- `teamId`: number (FK)
- `team`: Team (relación N:1)

## 🚀 Instalación

### Prerrequisitos
- Node.js (v16 o superior)
- npm

### Pasos de instalación

1. Clonar el repositorio o navegar a la carpeta del proyecto:
```bash
cd examen-web-002
```

2. Instalar las dependencias:
```bash
npm install
```

3. Las dependencias principales incluyen:
   - `@nestjs/typeorm`
   - `typeorm`
   - `sqlite3`

## ▶️ Ejecución del Servidor

### Modo desarrollo (con hot-reload):
```bash
npm run start:dev
```

### Modo producción:
```bash
npm run build
npm run start:prod
```

El servidor estará disponible en: `http://localhost:3000`

## 📡 Endpoints de la API

### Teams (Equipos)

#### Obtener todos los equipos
```bash
# Con curl
curl http://localhost:3000/teams

# Con HTTPie
http GET http://localhost:3000/teams
```

#### Obtener un equipo por ID
```bash
# Con curl
curl http://localhost:3000/teams/1

# Con HTTPie
http GET http://localhost:3000/teams/1
```

#### Crear un equipo
```bash
# Con curl
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name":"Real Madrid","country":"España"}'

# Con HTTPie
http POST http://localhost:3000/teams name="Real Madrid" country="España"
```

#### Actualizar un equipo
```bash
# Con curl
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"FC Barcelona","country":"España"}'

# Con HTTPie
http PUT http://localhost:3000/teams/1 name="FC Barcelona" country="España"
```

#### Eliminar un equipo
```bash
# Con curl
curl -X DELETE http://localhost:3000/teams/1

# Con HTTPie
http DELETE http://localhost:3000/teams/1
```

#### Obtener jugadores de un equipo específico
```bash
# Con curl
curl http://localhost:3000/teams/1/players

# Con HTTPie
http GET http://localhost:3000/teams/1/players
```

### Players (Jugadores)

#### Obtener todos los jugadores
```bash
# Con curl
curl http://localhost:3000/players

# Con HTTPie
http GET http://localhost:3000/players
```

#### Obtener un jugador por ID
```bash
# Con curl
curl http://localhost:3000/players/1

# Con HTTPie
http GET http://localhost:3000/players/1
```

#### Crear un jugador
```bash
# Con curl
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Lionel Messi","position":"Delantero","teamId":1}'

# Con HTTPie
http POST http://localhost:3000/players name="Lionel Messi" position="Delantero" teamId:=1
```

#### Actualizar un jugador
```bash
# Con curl
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Cristiano Ronaldo","position":"Delantero","teamId":2}'

# Con HTTPie
http PUT http://localhost:3000/players/1 name="Cristiano Ronaldo" position="Delantero" teamId:=2
```

#### Eliminar un jugador
```bash
# Con curl
curl -X DELETE http://localhost:3000/players/1

# Con HTTPie
http DELETE http://localhost:3000/players/1
```

## 🧪 Ejemplo de Flujo Completo

```bash
# 1. Crear un equipo
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name":"Manchester United","country":"Inglaterra"}'

# 2. Crear jugadores para ese equipo (asumiendo que el equipo tiene ID 1)
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Marcus Rashford","position":"Delantero","teamId":1}'

curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Bruno Fernandes","position":"Mediocampista","teamId":1}'

# 3. Obtener todos los jugadores del equipo
curl http://localhost:3000/teams/1/players

# 4. Actualizar un jugador
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"position":"Extremo"}'

# 5. Obtener todos los equipos con sus jugadores
curl http://localhost:3000/teams
```

## 🗄️ Base de Datos

El proyecto utiliza SQLite como base de datos. El archivo `db.sqlite` se crea automáticamente en la raíz del proyecto al iniciar el servidor.

- **Tipo**: SQLite
- **Archivo**: `db.sqlite`
- **Sincronización automática**: Habilitada (`synchronize: true`)

⚠️ **Nota**: En producción, se recomienda deshabilitar `synchronize` y usar migraciones.

## 🛠️ Tecnologías Utilizadas

- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor
- **TypeORM**: ORM para TypeScript y JavaScript
- **SQLite**: Base de datos embebida
- **TypeScript**: Lenguaje de programación

## 📝 Características Implementadas

✅ Proyecto NestJS configurado correctamente  
✅ Conexión a SQLite funcionando  
✅ Entidades con relación 1:N (Team → Players)  
✅ CRUD completo para Teams  
✅ CRUD completo para Players  
✅ Endpoint especial: GET /teams/:id/players  
✅ Manejo de errores (NotFoundException)  
✅ Validación de existencia antes de actualizar/eliminar  

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod

# Tests
npm run test
npm run test:e2e

# Linting
npm run lint
```

## 👨‍💻 Autor

Proyecto desarrollado para el examen de Aplicaciones Web - Sexto Semestre

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

