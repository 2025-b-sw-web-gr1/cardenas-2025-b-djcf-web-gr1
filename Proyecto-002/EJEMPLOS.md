# Ejemplos de Uso de la API

## Teams (Equipos)

### 1. Obtener todos los equipos
```bash
curl -X GET http://localhost:3000/teams
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Barcelona FC",
    "country": "España",
    "foundedYear": 1899,
    "stadium": "Camp Nou"
  },
  {
    "id": 2,
    "name": "Real Madrid",
    "country": "España",
    "foundedYear": 1902,
    "stadium": "Santiago Bernabéu"
  }
]
```

### 2. Obtener un equipo por ID
```bash
curl -X GET http://localhost:3000/teams/1
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Barcelona FC",
  "country": "España",
  "foundedYear": 1899,
  "stadium": "Camp Nou"
}
```

### 3. Crear un nuevo equipo
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Manchester United",
    "country": "Inglaterra",
    "foundedYear": 1878,
    "stadium": "Old Trafford"
  }'
```

**Respuesta:**
```json
{
  "id": 3,
  "name": "Manchester United",
  "country": "Inglaterra",
  "foundedYear": 1878,
  "stadium": "Old Trafford"
}
```

### 4. Actualizar un equipo
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "FC Barcelona",
    "stadium": "Spotify Camp Nou"
  }'
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "FC Barcelona",
  "country": "España",
  "foundedYear": 1899,
  "stadium": "Spotify Camp Nou"
}
```

### 5. Eliminar un equipo
```bash
curl -X DELETE http://localhost:3000/teams/3
```

**Respuesta:** `204 No Content`

### 6. Obtener jugadores de un equipo
```bash
curl -X GET http://localhost:3000/teams/1/players
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "number": 10,
    "position": "Delantero",
    "nationality": "Argentina",
    "teamId": 1
  },
  {
    "id": 2,
    "name": "Gerard Piqué",
    "number": 3,
    "position": "Defensa",
    "nationality": "España",
    "teamId": 1
  }
]
```

## Players (Jugadores)

### 1. Obtener todos los jugadores
```bash
curl -X GET http://localhost:3000/players
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "number": 10,
    "position": "Delantero",
    "nationality": "Argentina",
    "teamId": 1
  },
  {
    "id": 2,
    "name": "Gerard Piqué",
    "number": 3,
    "position": "Defensa",
    "nationality": "España",
    "teamId": 1
  },
  {
    "id": 3,
    "name": "Sergio Ramos",
    "number": 4,
    "position": "Defensa",
    "nationality": "España",
    "teamId": 2
  }
]
```

### 2. Obtener un jugador por ID
```bash
curl -X GET http://localhost:3000/players/1
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "number": 10,
  "position": "Delantero",
  "nationality": "Argentina",
  "teamId": 1
}
```

### 3. Crear un nuevo jugador
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Cristiano Ronaldo",
    "number": 7,
    "position": "Delantero",
    "nationality": "Portugal",
    "teamId": 2
  }'
```

**Respuesta:**
```json
{
  "id": 4,
  "name": "Cristiano Ronaldo",
  "number": 7,
  "position": "Delantero",
  "nationality": "Portugal",
  "teamId": 2
}
```

### 4. Actualizar un jugador
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "number": 30,
    "position": "Mediocampista"
  }'
```

**Respuesta:**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "number": 30,
  "position": "Mediocampista",
  "nationality": "Argentina",
  "teamId": 1
}
```

### 5. Eliminar un jugador
```bash
curl -X DELETE http://localhost:3000/players/4
```

**Respuesta:** `204 No Content`

## Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 204 | No Content - Eliminación exitosa |
| 400 | Bad Request - Datos inválidos |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |
