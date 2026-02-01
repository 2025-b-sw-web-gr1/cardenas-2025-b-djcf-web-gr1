# 🚀 Guía Rápida - Examen Web 002

## ✅ Checklist de Evaluación

### ✔️ Proyecto Subido al Repositorio
- [x] Proyecto creado en carpeta `Examen-Web-001/examen-web-002`
- [x] Todos los archivos necesarios incluidos

### ✔️ Conexión SQLite Configurada
- [x] TypeORM instalado
- [x] SQLite3 instalado
- [x] Configuración en `app.module.ts`
- [x] Base de datos `db.sqlite` creada automáticamente

### ✔️ Entidades Definidas
- [x] **Team** entity: id, name, country
- [x] **Player** entity: id, name, position, teamId
- [x] Relación 1:N configurada (Team → Players)

### ✔️ Endpoints RESTful Implementados

#### Teams
- [x] `GET /teams` - Obtener todos los equipos
- [x] `GET /teams/:id` - Obtener un equipo por ID
- [x] `POST /teams` - Crear un equipo
- [x] `PUT /teams/:id` - Actualizar un equipo
- [x] `DELETE /teams/:id` - Eliminar un equipo
- [x] `GET /teams/:id/players` - Obtener jugadores de un equipo

#### Players
- [x] `GET /players` - Obtener todos los jugadores
- [x] `GET /players/:id` - Obtener un jugador por ID
- [x] `POST /players` - Crear un jugador
- [x] `PUT /players/:id` - Actualizar un jugador
- [x] `DELETE /players/:id` - Eliminar un jugador

### ✔️ README Completo
- [x] Instrucciones de instalación
- [x] Comando para correr el servidor
- [x] Ejemplos de endpoints con curl y HTTPie
- [x] Documentación completa

## 🏃 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run start:dev

# 3. El servidor estará en http://localhost:3000
```

## 🧪 Prueba Rápida

```bash
# Crear un equipo
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d "{\"name\":\"Real Madrid\",\"country\":\"España\"}"

# Ver todos los equipos
curl http://localhost:3000/teams

# Crear un jugador
curl -X POST http://localhost:3000/players -H "Content-Type: application/json" -d "{\"name\":\"Vinicius Jr\",\"position\":\"Delantero\",\"teamId\":1}"

# Ver jugadores del equipo
curl http://localhost:3000/teams/1/players
```

## 📁 Estructura del Proyecto

```
examen-web-002/
├── src/
│   ├── teams/
│   │   ├── team.entity.ts
│   │   ├── teams.controller.ts
│   │   ├── teams.service.ts
│   │   └── teams.module.ts
│   ├── players/
│   │   ├── player.entity.ts
│   │   ├── players.controller.ts
│   │   ├── players.service.ts
│   │   └── players.module.ts
│   ├── app.module.ts
│   └── main.ts
├── db.sqlite (generada automáticamente)
├── package.json
└── README.md
```

## 🎯 Puntos Clave de Implementación

1. **TypeORM + SQLite**: Configuración simple y funcional
2. **Relaciones**: OneToMany y ManyToOne correctamente implementadas
3. **Servicios**: Incluyen manejo de errores (NotFoundException)
4. **Controladores**: Todos los endpoints RESTful implementados
5. **Módulos**: Organización modular de teams y players

## 📊 Endpoints Disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/teams` | Lista todos los equipos |
| GET | `/teams/:id` | Obtiene un equipo específico |
| POST | `/teams` | Crea un nuevo equipo |
| PUT | `/teams/:id` | Actualiza un equipo |
| DELETE | `/teams/:id` | Elimina un equipo |
| GET | `/teams/:id/players` | Lista jugadores de un equipo |
| GET | `/players` | Lista todos los jugadores |
| GET | `/players/:id` | Obtiene un jugador específico |
| POST | `/players` | Crea un nuevo jugador |
| PUT | `/players/:id` | Actualiza un jugador |
| DELETE | `/players/:id` | Elimina un jugador |

---

**Estado**: ✅ Proyecto completamente funcional y listo para evaluación
