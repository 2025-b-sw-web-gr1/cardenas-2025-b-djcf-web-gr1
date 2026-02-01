"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ingrediente_entity_1 = require("./ingrediente.entity");
let IngredientesService = class IngredientesService {
    ingredienteRepository;
    constructor(ingredienteRepository) {
        this.ingredienteRepository = ingredienteRepository;
    }
    async crear(data) {
        const ingrediente = this.ingredienteRepository.create(data);
        return this.ingredienteRepository.save(ingrediente);
    }
    async actualizar(id, data) {
        await this.ingredienteRepository.update(id, data);
        return this.ingredienteRepository.findOneBy({ id });
    }
    async eliminar(id) {
        await this.ingredienteRepository.delete(id);
    }
    async obtenerUno(id) {
        return this.ingredienteRepository.findOne({
            where: { id },
            relations: ['receta'],
        });
    }
    async obtenerMuchos(filtros) {
        const query = this.ingredienteRepository.createQueryBuilder('ingrediente')
            .leftJoinAndSelect('ingrediente.receta', 'receta');
        if (filtros?.nombre) {
            query.andWhere('ingrediente.nombre LIKE :nombre', { nombre: `%${filtros.nombre}%` });
        }
        if (filtros?.cantidad) {
            query.orWhere('ingrediente.cantidad LIKE :cantidad', { cantidad: `%${filtros.cantidad}%` });
        }
        return query.getMany();
    }
};
exports.IngredientesService = IngredientesService;
exports.IngredientesService = IngredientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ingrediente_entity_1.Ingrediente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IngredientesService);
//# sourceMappingURL=ingrediente.service.js.map