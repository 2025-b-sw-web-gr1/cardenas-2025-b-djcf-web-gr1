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
exports.RecetasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const receta_entity_1 = require("./receta.entity");
let RecetasService = class RecetasService {
    recetaRepository;
    constructor(recetaRepository) {
        this.recetaRepository = recetaRepository;
    }
    async crear(data) {
        const receta = this.recetaRepository.create(data);
        return this.recetaRepository.save(receta);
    }
    async actualizar(id, data) {
        await this.recetaRepository.update(id, data);
        return this.recetaRepository.findOneBy({ id });
    }
    async eliminar(id) {
        await this.recetaRepository.delete(id);
    }
    async obtenerUno(id) {
        return this.recetaRepository.findOne({
            where: { id },
            relations: ['ingredientes'],
        });
    }
    async obtenerMuchos(filtros) {
        const query = this.recetaRepository.createQueryBuilder('receta')
            .leftJoinAndSelect('receta.ingredientes', 'ingrediente');
        if (filtros?.nombre) {
            query.andWhere('receta.nombre LIKE :nombre', { nombre: `%${filtros.nombre}%` });
        }
        if (filtros?.descripcion) {
            query.orWhere('receta.descripcion LIKE :descripcion', { descripcion: `%${filtros.descripcion}%` });
        }
        return query.getMany();
    }
};
exports.RecetasService = RecetasService;
exports.RecetasService = RecetasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(receta_entity_1.Receta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecetasService);
//# sourceMappingURL=receta.service.js.map